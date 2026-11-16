
import { useState, useEffect } from "react";

export default function Esquites() {
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);

  const photo = "/images/food/esquites.jpeg";

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
      <p className="recipe-category">
        THE KITCHEN / SIDES
      </p>

      <h1>Homemade Esquites (Mexican Street Corn)</h1>

      <button
        type="button"
        className="recipe-button print-recipe-button"
        onClick={() => window.print()}
      >
        🖨️ Print Recipe
      </button>

      <p className="recipe-intro">
        I've always been a fan of a good side dish,
        especially one that doesn't take a whole lot
        of effort to throw together. That's where
        these Esquites come in! If you've never heard
        of Esquites, think Mexican street corn,
        but served off the cob with plenty of flavor.
        We're talking buttery corn, Mexican crema,
        Cotija cheese, lime, and just enough seasoning
        to give it a little kick. I made this alongside
        some homemade Mexican Pizzas, and let me tell
        you, they made one heck of a dinner together!
      </p>

      <section className="recipe-gallery kitchen-gallery">
        <div className="recipe-gallery-item">
          <button
            type="button"
            className="kitchen-photo-button"
            onClick={() => setEnlargedPhoto(photo)}
            aria-label="Enlarge Homemade Esquites photo"
          >
            <img
              src={photo}
              alt="Homemade Esquites Mexican street corn cooked in a skillet"
              loading="lazy"
            />
          </button>

          <div className="recipe-gallery-caption">
            <span>01 / FINISHED DISH</span>
            <h3>A Little Street Corn Goodness!</h3>
            <p>
              Golden corn tossed with Mexican crema,
              Cotija cheese, lime, and seasonings.
              A flavorful side dish that's easy to
              make right in your kitchen!
            </p>
          </div>
        </div>
      </section>

      <section className="recipe-instructions">
        <h2>What You'll Need</h2>

        <ul>
          <li>2 lbs frozen corn</li>
          <li>3 tablespoons butter</li>
          <li>⅓ cup Mexican crema</li>
          <li>¾–1 teaspoon chili powder, to taste</li>
          <li>Juice of 1 lime</li>
          <li>¾ cup Cotija cheese, crumbled</li>
          <li>
            Dried cilantro, to taste (or fresh chopped
            cilantro if you prefer)
          </li>
          <li>Garlic powder, optional</li>
          <li>Salt and black pepper, to taste</li>
        </ul>

        <p>
          <strong>Prep Time:</strong> 5 minutes
          <br />
          <strong>Cook Time:</strong> 15–20 minutes
        </p>

        <h2>Let's Get Cooking</h2>

        <ol>
          <li>
            <strong>Get that corn cooking.</strong>
            <p>
              Grab a large skillet and add your frozen
              corn over medium-high heat. Cook it for
              a few minutes, stirring occasionally,
              until the corn has thawed and most of
              the extra moisture has evaporated.
              We don't want a watery skillet!
            </p>
          </li>

          <li>
            <strong>Bring on the butter!</strong>
            <p>
              Add your 3 tablespoons of butter and
              stir everything together. Let the corn
              cook for another 5–8 minutes, stirring
              occasionally, until it starts getting
              some golden brown spots. That's where
              some of that great flavor comes from!
            </p>
          </li>

          <li>
            <strong>Season that goodness.</strong>
            <p>
              Turn the heat down to low. Sprinkle in
              your chili powder, a little salt and
              black pepper, and garlic powder if
              you're using it. Stir everything
              together until the corn is nicely
              coated.
            </p>
          </li>

          <li>
            <strong>Make it creamy.</strong>
            <p>
              Add the Mexican crema and squeeze in
              the juice of one lime. Stir until the
              corn is coated in that creamy, tangy
              goodness. Keep the heat low so the
              crema doesn't separate.
            </p>
          </li>

          <li>
            <strong>Bring in the Cotija and cilantro.</strong>
            <p>
              Remove the skillet from the heat and
              stir in your crumbled Cotija cheese.
              Sprinkle in dried cilantro to taste.
              I used the prepackaged dried stuff
              because it saved me some time, but
              fresh chopped cilantro works great
              too!
            </p>
          </li>

          <li>
            <strong>Give it a taste and dig in!</strong>
            <p>
              Taste your Esquites and adjust the
              seasonings if needed. Want a little
              more heat? Add another pinch of chili
              powder. Want more tang? Give it
              another squeeze of lime. Serve it
              warm and enjoy!
            </p>
          </li>
        </ol>

        <h2>A Little Tip From My Kitchen</h2>

        <p>
          Don't feel like you've got to use fresh
          corn for this recipe. I used frozen corn,
          and it worked perfectly! The trick is
          letting that extra moisture cook off
          before adding the butter. That way, the
          corn can get a little color instead of
          just steaming in the skillet.
        </p>

        <p>
          And here's another shortcut: dried cilantro!
          I used the prepackaged kind to save myself
          some chopping. If you've got fresh cilantro
          on hand, go right ahead and use it instead.
          Either way, you're getting a flavorful
          side dish without making things complicated.
        </p>

        <p>
          I served these Esquites alongside my
          homemade Mexican Pizzas, and the two
          went together perfectly. If you're
          making both recipes for dinner, you
          can work on the corn while the pizzas
          are coming together. Good food,
          simple ingredients, and no need
          to overcomplicate dinner!
        </p>
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
            aria-label="Enlarged Esquites photograph"
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
              alt="Enlarged photograph of homemade Esquites"
            />
          </div>
        </div>
      )}
    </div>
  );
}
