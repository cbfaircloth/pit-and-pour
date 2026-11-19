
import { useState, useEffect } from "react";
import RecipeHeader from "./RecipeHeader";
import ContentWithReactions from "./ContentWithReactions";

export default function BourbonReviewTemplate({
  title,
  introduction = [],
  details = [],
  photos = [],
  tastingNotes = [],
  finalPour = [],
}) {
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

  return (
    <main className="recipe-page bourbon-review-template">
      <div className="recipe-page-container">
        <RecipeHeader />

        <div className="recipe-header">
          <span className="recipe-category">
            THE WEEKEND POUR / BOURBON REVIEWS
          </span>

          <h1>{title}</h1>

          {introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <ContentWithReactions />

        <div className="recipe-info-grid">
          {details.map((detail, index) => (
            <div className="recipe-info-item" key={index}>
              <span>{detail.label}</span>
              <strong>{detail.value}</strong>
            </div>
          ))}
        </div>

        <section className="recipe-gallery bourbon-gallery">
          {photos.map((photo) => (
            <div
              className="recipe-gallery-item"
              key={photo.src}
            >
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
            {tastingNotes.map((note, index) => (
              <div className="recipe-step" key={index}>
                <h3>{note.title}</h3>

                {note.paragraphs.map(
                  (paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="recipe-section">
          <h2>My Final Pour</h2>

          {finalPour.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <p>
            <em>
              Smoke Has a Story. So Does Every Pour.
            </em>
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
              alt={`Enlarged ${title} photograph`}
            />
          </div>
        </div>
      )}
    </main>
  );
}
