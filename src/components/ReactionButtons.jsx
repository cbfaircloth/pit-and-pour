
import { useEffect, useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';
import { supabase } from '../supabaseClient';

export default function ReactionButtons({ contentType, contentId }) {
  const [reaction, setReaction] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [voting, setVoting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);
  const [needsCaptcha, setNeedsCaptcha] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadReactions() {
      setLoading(true);
      setErrorMessage('');
      setReaction(null);

      try {
        // Load shared reaction totals.
        const { data: counts, error: countsError } =
          await supabase.rpc('get_reaction_counts', {
            p_content_type: contentType,
            p_content_id: contentId,
          });

        if (countsError) throw countsError;

        if (!cancelled) {
          setLikes(Number(counts?.[0]?.likes ?? 0));
          setDislikes(Number(counts?.[0]?.dislikes ?? 0));
        }

        // Check for an existing visitor session.
        const { data: sessionData, error: sessionError } =
          await supabase.auth.getSession();

        if (sessionError) throw sessionError;
        if (cancelled) return;

        let user = sessionData.session?.user;

        // New visitors must complete Turnstile verification.
        if (!user) {
          if (!captchaToken) {
            setNeedsCaptcha(true);
            return;
          }

          const { data, error } =
            await supabase.auth.signInAnonymously({
              options: {
                captchaToken,
              },
            });

          if (error) throw error;

          user = data.user;
        }

        if (!user) {
          throw new Error(
            'Unable to establish a visitor session.'
          );
        }

        if (cancelled) return;

        // Existing sessions do not need another CAPTCHA.
        setNeedsCaptcha(false);

        // Find this visitor's existing reaction.
        const { data: existing, error: existingError } =
          await supabase
            .from('reactions')
            .select('reaction')
            .eq('content_type', contentType)
            .eq('content_id', contentId)
            .eq('visitor_id', user.id)
            .maybeSingle();

        if (existingError) throw existingError;

        if (!cancelled) {
          setReaction(existing?.reaction ?? null);
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Reaction loading failed:', error);
          setErrorMessage('Unable to load reactions.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadReactions();

    return () => {
      cancelled = true;
    };
  }, [contentType, contentId, captchaToken]);

  async function handleReaction(choice) {
    if (loading || voting) return;

    setVoting(true);
    setErrorMessage('');

    try {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError) throw userError;

      const user = userData.user;

      if (!user) {
        throw new Error('Visitor session not available.');
      }

      if (reaction === choice) {
        // Clicking the selected reaction removes it.
        const { error } = await supabase
          .from('reactions')
          .delete()
          .eq('content_type', contentType)
          .eq('content_id', contentId)
          .eq('visitor_id', user.id);

        if (error) throw error;

        setReaction(null);
      } else if (reaction) {
        // Switch between Like and Dislike.
        const { error } = await supabase
          .from('reactions')
          .update({ reaction: choice })
          .eq('content_type', contentType)
          .eq('content_id', contentId)
          .eq('visitor_id', user.id);

        if (error) throw error;

        setReaction(choice);
      } else {
        // Submit a new reaction.
        const { error } = await supabase
          .from('reactions')
          .insert({
            content_type: contentType,
            content_id: contentId,
            visitor_id: user.id,
            reaction: choice,
          });

        if (error) throw error;

        setReaction(choice);
      }

      // Refresh shared totals after voting.
      const { data: counts, error: countsError } =
        await supabase.rpc('get_reaction_counts', {
          p_content_type: contentType,
          p_content_id: contentId,
        });

      if (countsError) throw countsError;

      setLikes(Number(counts?.[0]?.likes ?? 0));
      setDislikes(Number(counts?.[0]?.dislikes ?? 0));
    } catch (error) {
      console.error('Reaction voting failed:', error);
      setErrorMessage(
        'Could not save your reaction. Please try again.'
      );
    } finally {
      setVoting(false);
    }
  }

  return (
    <section className="reaction-section">
      {needsCaptcha && (
        <Turnstile
          siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          onSuccess={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken(null)}
          onError={() => setCaptchaToken(null)}
          options={{
            theme: 'dark',
            size: 'compact',
          }}
        />
      )}

      <h3>
        {contentType === 'weekend-pour'
          ? 'Give This Pour a Thumbs Up or Down!'
          : 'Give This Recipe a Thumbs Up or Down!'}
      </h3>

      <div className="reaction-buttons">
        <button
          type="button"
          className={`reaction-button ${
            reaction === 'like' ? 'active' : ''
          }`}
          aria-pressed={reaction === 'like'}
          disabled={loading || voting || needsCaptcha}
          onClick={() => handleReaction('like')}
        >
          <ThumbsUp size={20} />
          <span>Like ({likes})</span>
        </button>

        <button
          type="button"
          className={`reaction-button ${
            reaction === 'dislike' ? 'active' : ''
          }`}
          aria-pressed={reaction === 'dislike'}
          disabled={loading || voting || needsCaptcha}
          onClick={() => handleReaction('dislike')}
        >
          <ThumbsDown size={20} />
          <span>Dislike ({dislikes})</span>
        </button>
      </div>

      {errorMessage && (
        <p className="reaction-error" role="alert">
          {errorMessage}
        </p>
      )}
    </section>
  );
}
