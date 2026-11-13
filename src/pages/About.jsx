
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function About() {
  return (
    <main className="about-page">
      <div className="about-container">
        <header className="about-header">
          <span className="about-eyebrow">
            THE STORY BEHIND PIT & POUR
          </span>

          <h1>About Pit & Pour</h1>

          <p className="about-tagline">
            Just a guy who enjoys good BBQ, good food, and a good bourbon.
          </p>
        </header>

        <section className="about-intro">
          
           

<div className="about-photo-section">
  <div className="about-photo">
    <img
      src="/images/about/thelegend.png"
      alt="Brandon wearing his BBQ apron in the backyard"
      className="about-profile-image"
    />
  </div>

  <div className="about-socials">
    <h3>Follow Along</h3>

    
<div className="about-social-links">
  <a
    href="https://www.facebook.com/profile.php?id=61596385983247"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow on Facebook"
    title="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/yourmomshero/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow on Instagram"
    title="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.tiktok.com/@salvadorsown?lang=en"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow on TikTok"
    title="TikTok"
  >
    <FaTiktok />
  </a>
</div>

  </div>
</div>



          <div className="about-intro-text">
            <h2>Hey, I'm Brandon!</h2>

            <p>Welcome to Pit & Pour!</p>

            <p>
              If there's one thing I enjoy, it's firing up the smoker,
              cooking something good for the family, and kicking back
              with a bourbon when the day is done.
            </p>

            
<p>
  I'm not a professional pitmaster, chef, or bourbon expert.
  I'm just a regular guy who enjoys all three and figured,
  why not put it all in one place?
</p>

<p>
  My smoking adventure started back in November 2025 when
  one of my best friends, my brother, and I decided we
  wanted to smoke a turkey for Thanksgiving. There was
  just one problem: I didn't own a smoker!
</p>

<p>
  I started searching Facebook Marketplace, trying to
  find a good deal, but apparently getting someone to
  respond to a message was harder than finding the smoker
  itself! After striking out over and over, I finally
  managed to be the first person to message a seller all
  the way down in Myrtle Beach, South Carolina.
</p>

<p>
  The catch? It was a Traeger Pro 34 that didn't even work!
</p>

<p>
  But I wasn't about to let that stop me. I brought it
  home, ordered the replacement parts it needed, got
  everything working again, and gave it a proper break-in.
</p>

<p>
  What started as a mission to smoke a Thanksgiving turkey
  turned into a hobby I never expected to enjoy as much
  as I do. I've been firing up that Traeger and smoking
  meat ever since!
</p>

<p>
  And that's pretty much how Pit &amp; Pour got its start.
  Good food, a little determination, and a whole lot
  of smoke!
</p>
<p>
  At the end of the day, that's really what Pit &amp; Pour
  is all about. I hope the recipes I share here bring a
  little warmth to your home, some good food to your table,
  and plenty of full bellies around it. If something I
  cook inspires you to fire up the smoker or try something
  new in the kitchen, then I'd say this whole thing is
  worth it.
</p>

<div className="about-personal-signature">
  <p>Thanks for stopping by, and happy cooking!</p>

  <img
    src="/images/copper-signature.png"
    alt="Brandon's handwritten signature"
    className="about-signature-image"
  />

  <span className="about-signature-caption">
    FOUNDER • PIT &amp; POUR
  </span>
</div>

          </div>
        </section>

        <section className="about-section">
          <h2>What's Cooking Around Here?</h2>

          <div className="about-feature-grid">
            <article className="about-feature">
              <span className="about-feature-label">01 / THE SMOKEHOUSE</span>
              <h3>The Smokehouse</h3>
              <p>
                This is where I share what I've got going on the smoker.
                Ribs, brisket, pork, and whatever else I decide to
                throw on there.
              </p>
              <p>
                I'll share how I cooked it, what worked, and probably
                a few things I'd do differently next time.
                It's all part of learning!
              </p>
            </article>

            <article className="about-feature">
              <span className="about-feature-label">02 / THE KITCHEN</span>
              <h3>The Kitchen</h3>
              <p>
                Not everything good comes off a smoker. Sometimes
                it's just about putting together a good meal without
                spending a fortune or needing a grocery list a mile long.
              </p>
              <p>
                That's what you'll find here: simple, affordable meals
                that my family and I actually enjoy.
              </p>
            </article>

            <article className="about-feature">
              <span className="about-feature-label">03 / THE WEEKEND POUR</span>
              <h3>The Weekend Pour</h3>
              <p>
                I enjoy a good bourbon, especially one that doesn't
                cost an arm and a leg.
              </p>
              <p>
                I'm not here to throw around fancy tasting terms or
                pretend I know everything about whiskey. I'll tell
                you what I smell, what I taste, how I like to drink
                it, and whether I'd buy another bottle.
              </p>
            </article>
          </div>
        </section>

        <section className="about-honesty">
          <span className="about-eyebrow">NO SHORTCUTS. JUST REAL EXPERIENCES.</span>

          <h2>Keeping It Real</h2>

          <p>
            Everything you see here comes from my own experiences.
            The food, the photos, the recipes, and the bourbon reviews
            are all things I've actually tried.
          </p>

          <p>
            I'm still learning, experimenting, and having a good time
            doing it.
          </p>

          <p>
            If something turns out great, I'll share it. If something
            doesn't go quite as planned, I'll probably share that too!
          </p>

          <p>
            Thanks for stopping by. Hopefully, you'll find something
            worth cooking, smoking, or pouring.
          </p>

          <p className="about-signoff">
            "Smoke Has a Story. So Does Every Pour."
          </p>
        </section>
      </div>
    </main>
  );
}
