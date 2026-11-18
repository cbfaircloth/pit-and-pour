
import { useEffect, useState } from "react";

export default function RecipeTemplate({
  category,
  title,
  introduction,
  photos = [],
  ingredients = [],
  steps = [],
  tipTitle = "A Little Tip From My Kitchen",
  tips = [],
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
    <div className="recipe-content">
      <p className="recipe-category">{category}</p>

      <h1>{title}</h1>

      <button
        type="button"
        className="recipe-button print-recipe-button"
        onClick={() => window.print()}
      >
        🖨️ Print Recipe
      </button>

      <p className="recipe-intro">{introduction}</p>

      {photos.length > 0 && (
        <section className="recipe-gallery kitchen-gallery">
          {photos.map((photo, index) => (
            <div className="recipe-gallery-item" key={photo.src}>
              <button
                type="button"
                className="kitchen-photo-button"
                onClick={() => setEnlargedPhoto(photo.src)}
                aria-label={`Enlarge ${title} photo`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt || title}
                  loading="lazy"
                />
              </button>

              <div className="recipe-gallery-caption">
                <span>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {photo.label || "FINISHED DISH"}
                </span>
                {photo.heading && <h3>{photo.heading}</h3>}
                {photo.description && <p>{photo.description}</p>}
              </div>
            </div>
          ))}
        </section>
      )}

      <section className="recipe-instructions">
        <h2>What You'll Need</h2>

        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2>Let's Get Cooking</h2>

        <ol>
          {steps.map((step, index) => (
            <li key={index}>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        {tips.length > 0 && (
          <>
            <h2>{tipTitle}</h2>
            {tips.map((tip, index) => (
              <p key={index}>{tip}</p>
            ))}
          </>
        )}
      </section>

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
            aria-label={`Enlarged ${title} photograph`}
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
    </div>
  );
}
