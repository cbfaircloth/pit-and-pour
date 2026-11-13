
import { useState, useEffect } from "react";

export default function PenelopeBarrelStrength() {
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);

  useEffect(() => {
    if (!enlargedPhoto) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setEnlargedPhoto(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [enlargedPhoto]);

  const photos = [
    {
      src: "/images/bourbon/penelope-barrel-strength.jpeg",
      alt: "Penelope Barrel Strength bourbon bottle",
      label: "01 / THE BOTTLE",
      title: "Penelope Barrel Strength",
      description:
        "Four-grain bourbon bottled at 114 proof (57% ABV).",
    },
    {
      src: "/images/bourbon/penelope-barrel-strength-label.jpeg",
      alt: "Close-up of the Penelope Barrel Strength label",
      label: "02 / THE DETAILS",
      title: "A Little Extra Horsepower",
      description:
        "A closer look at the barrel strength label.",
    },
    {
      src: "/images/bourbon/penelope-barrel-strength-glass.jpeg",
      alt: "A glass of Penelope Barrel Strength bourbon",
      label: "03 / THE POUR",
      title: "My Kind of Pour",
      description:
        "A little bourbon over ice. Just how I like it.",
    },
  ];

  return (
    <main className="recipe-page">
      <div className="recipe-page-container">
        <div className="recipe-header">
          <span className="recipe-category">
            THE WEEKEND POUR / BOURBON REVIEWS
          </span>

          <h1>Penelope Barrel Strength Bourbon</h1>

          <p>
            If there's one thing I've learned about bourbon,
            it's that a higher proof doesn't necessarily mean
            a better pour. But sometimes, that extra kick is
            part of what makes a bourbon worth trying.
          </p>

          <p>
            Tonight, I'm pouring a glass of Penelope Barrel
            Strength, a four-grain bourbon that comes in at
            a respectable 114 proof (57% ABV). And let me
            tell you, this one definitely lets you know
            it's there!
          </p>
        </div>

        <div className="recipe-info-grid">
          <div className="recipe-info-item">
            <span>THE BOTTLE</span>
            <strong>Penelope Barrel Strength</strong>
          </div>

          <div className="recipe-info-item">
            <span>PROOF</span>
            <strong>114 Proof</strong>
          </div>

          <div className="recipe-info-item">
            <span>MY PREFERENCE</span>
            <strong>On the Rocks</strong>
          </div>

          <div className="recipe-info-item">
            <span>WOULD I BUY AGAIN?</span>
            <strong>Absolutely</strong>
          </div>
        </div>

        <section className="recipe-gallery bourbon-gallery">
          {photos.map((photo) => (
            <div className="recipe-gallery-item" key={photo.src}>
              <button
                type="button"
                className="bourbon-photo-button"
                onClick={() => setEnlargedPhoto(photo.src)}
                aria-label={`Enlarge ${photo.title} photo`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                />
              </button>

              <div className="recipe-gallery-caption">
                <span>{photo.label}</span>
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="recipe-section">
          <h2>My Tasting Notes</h2>

          <div className="recipe-steps">
            <div className="recipe-step">
              <h3>The Nose</h3>
              <p>
                Right off the bat, I picked up some fruity
                notes, particularly apple, along with a nice
                hint of honey. It's a pleasant combination
                that gives you a little sweetness before
                you even take that first sip.
              </p>
            </div>

            <div className="recipe-step">
              <h3>The First Sip</h3>
              <p>
                My first impression? This bourbon leans
                towards the sweeter side at first, but not
                so much that it becomes overwhelming.
              </p>

              <p>
                The sweetness makes for an enjoyable first
                sip, but don't let that fool you. As the
                bourbon settles, that higher proof starts
                to make itself known.
              </p>
            </div>

            <div className="recipe-step">
              <h3>The Burn &amp; Finish</h3>
              <p>
                This is where Penelope Barrel Strength
                really shows its muscle.
              </p>

              <p>
                There's a noticeable burn on the backend,
                and while it's definitely stronger than
                some of the bourbons I've had, I wouldn't
                call it unbearable. It's got a kick, but
                one that I can still appreciate.
              </p>
            </div>

            <div className="recipe-step">
              <h3>How I Drink It</h3>
              <p>
                I personally enjoy my bourbon on the rocks,
                and that's exactly how I drank this one.
                As the ice started melting, it watered the
                bourbon down just enough to take some of
                that edge off without completely losing
                the flavor.
              </p>

              <p>
                For me, that made it an even more enjoyable
                pour.
              </p>
            </div>
          </div>
        </section>

        <section className="recipe-section">
          <h2>My Final Pour</h2>

          <p>
            Penelope Barrel Strength brings a nice balance
            of sweetness and heat. The apple and honey
            notes on the nose were a pleasant surprise,
            and while that stronger finish might catch
            you off guard, a little ice helped smooth
            things out.
          </p>

          <p>
            If you enjoy a bourbon with some sweetness
            up front and a little extra horsepower on
            the backend, this one's worth giving a shot.
          </p>

          <p>
            <strong>
              Would I buy another bottle? Absolutely!
            </strong>
          </p>

          <p>
            <strong>My Verdict:</strong> A solid pour with
            a sweet start, a noticeable kick, and enough
            character to earn another spot on my shelf.
          </p>

          <p>
            <em>Smoke Has a Story. So Does Every Pour.</em>
          </p>
        </section>
      </div>

      {enlargedPhoto && (
        <div
          className="bourbon-lightbox"
          role="presentation"
          onClick={() => setEnlargedPhoto(null)}
        >
          <div
            className="bourbon-lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged bourbon photograph"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="bourbon-lightbox-close"
              onClick={() => setEnlargedPhoto(null)}
              aria-label="Close enlarged photograph"
            >
              ×
            </button>

            <img
              src={enlargedPhoto}
              alt="Enlarged Penelope Barrel Strength photograph"
            />
          </div>
        </div>
      )}
    </main>
  );
}
