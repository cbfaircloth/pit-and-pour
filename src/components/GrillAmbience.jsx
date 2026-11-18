
import { useEffect, useRef, useState } from "react";

const SOUND_PREFERENCE_KEY = "pit-and-pour-grill-sound";

export default function GrillAmbience() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.20;

    const savedPreference = localStorage.getItem(
      SOUND_PREFERENCE_KEY
    );

    // Only attempt autoplay if the visitor hasn't muted it.
    if (savedPreference !== "muted") {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem(SOUND_PREFERENCE_KEY, "muted");
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
        localStorage.setItem(SOUND_PREFERENCE_KEY, "enabled");
      } catch (error) {
        console.error("Unable to play grill ambience:", error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="grill-ambience">
      <audio
  ref={audioRef}
  src="/audio/pit-and-pour-fire.mp3"
  autoPlay
  loop
  preload="auto"
/>

      <button
        type="button"
        className="grill-ambience-button"
        onClick={toggleSound}
        title={isPlaying ? "Mute Grill Sounds" : "Enable Grill Sounds"}
        aria-label={
          isPlaying ? "Mute Grill Sounds" : "Enable Grill Sounds"
        }
        aria-pressed={isPlaying}
      >
        <span aria-hidden="true">
          {isPlaying ? "🔊" : "🔇"}
        </span>
      </button>
    </div>
  );
}
