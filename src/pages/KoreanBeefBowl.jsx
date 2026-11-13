
import { useState, useEffect } from "react";

export default function KoreanBeefBowl() {
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);

  const photo = "/images/food/korean-beef-bowl.jpeg";

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
        THE KITCHEN / FAMILY DINNERS
      </p>

      <h1>Korean Beef Bowls</h1>

      <button
        type="button"
        className="recipe-button print-recipe-button"
        onClick={() => window.print()}
      >
        🖨️ Print Recipe
      </button>

      <p className="recipe-intro">
        Some nights, I want something a little different
        for dinner without spending a fortune or standing
        in the kitchen all evening. That's where these
        Korean Beef Bowls come in! Two pounds of ground
        beef cooked in a sweet and savory sauce, served
        over a bed of jasmine rice. Nothing complicated,
        just a quick, filling meal that's packed with
        flavor and easy enough for a busy weeknight!
      </p>

      <section className="recipe-gallery kitchen-gallery">
        <div className="recipe-gallery-item">
          <button
            type="button"
            className="kitchen-photo-button"
            onClick={() => setEnlargedPhoto(photo)}
            aria-label="Enlarge Korean Beef Bowls photo"
          >
            <img
              src={photo}
              alt="Homemade Korean Beef Bowls served over white rice"
              loading="lazy"
            />
          </button>

          <div className="recipe-gallery-caption">
            <span>01 / FINISHED DISH</span>
            <h3>Sweet, Savory &amp; Delicious!</h3>
            <p>
              Seasoned ground beef tossed in a sweet
              and savory sauce, served over fluffy
              jasmine rice. Simple ingredients and
              a whole lot of flavor!
            </p>
          </div>
        </div>
      </section>

      <section className="recipe-instructions">
        <h2>What You'll Need</h2>

        <ul>
          <li>2 lbs ground beef</li>
          <li>6 cloves garlic, minced</li>
          <li>1 teaspoon ground ginger</li>
          <li>⅔ cup low-sodium soy sauce</li>
          <li>⅓ cup light brown sugar</li>
          <li>1 tablespoon toasted sesame oil</li>
          <li>½ teaspoon black pepper</li>
          <li>
            ½ teaspoon red pepper flakes (optional)
          </li>
          <li>Jasmine Rice (4 Success boil-in-bag portions, or your preferred jasmine rice)</li>
          <li>4 green onions, chopped</li>
          <li>Sesame seeds (optional)</li>
          <li>4 fried eggs (optional)</li>
        </ul>

        <h2>Let's Get Cooking</h2>

        <ol>
          <li>
            <strong>Get that rice going.</strong>
            <p>
              First things first, get your jasmine rice
    cooking according to the package instructions.
    I used Success Jasmine Rice boil-in-bag,
    which makes things super easy. While the rice
    is cooking, we'll get started on the beef.
            </p>
          </li>

          <li>
            <strong>Brown that beef.</strong>
            <p>
              Grab a large skillet and turn the heat
              to medium-high. Add your 2 pounds of
              ground beef and cook until completely
              browned, breaking it apart as you go.
              Drain off the excess grease before
              moving on.
            </p>
          </li>

          <li>
            <strong>Bring in the garlic.</strong>
            <p>
              Add the minced garlic to your browned
              beef and give everything a good stir.
              Let it cook for about a minute until
              that garlic starts smelling good.
              Don't let it burn!
            </p>
          </li>

          <li>
            <strong>Mix up that sauce.</strong>
            <p>
              In a separate bowl, whisk together
              the soy sauce, light brown sugar,
              ground ginger, toasted sesame oil,
              black pepper, and red pepper flakes
              if you want a little heat.
              Give it a good mix until everything
              is combined.
            </p>
          </li>

          <li>
            <strong>Let those flavors get happy.</strong>
            <p>
              Pour the sauce over your cooked ground
              beef and stir until everything is
              coated. Reduce the heat to medium-low
              and let it simmer for about 3–5 minutes.
              This gives the beef time to soak up
              all that sweet and savory goodness!
            </p>
          </li>

          <li>
            <strong>Build those bowls!</strong>
            <p>
              Spoon some cooked jasmine rice into
              your bowls and pile that Korean beef
              right on top. Finish with chopped
              green onions and a sprinkle of
              sesame seeds if you've got them.
              Feeling fancy? Throw a fried egg
              on top and dig in!
            </p>
          </li>
        </ol>

        <h2>A Little Tip From My Kitchen</h2>

<p>
  Here's a little shortcut that makes this
  recipe even easier. Grab yourself a box of
  Success Jasmine Rice boil-in-bag rice.
  The box comes with four bags, so I use
  one bag for each of our four bowls.
  No measuring out rice or worrying about
  getting the water-to-rice ratio just right.
  Cook the bags according to the package,
  and you're good to go!
</p>


        <p>
          The brown sugar gives this sauce a nice
          sweetness, while the soy sauce brings
          that savory flavor. The garlic, ginger,
          and sesame oil pull everything together.
          If you want a little kick, add those
          red pepper flakes. If not, leave them
          out. It'll still taste great!
        </p>

        <p>
          This is also a great recipe for leftovers.
          Keep the beef and rice refrigerated in
          separate airtight containers, and you've
          got yourself an easy lunch the next day.
          Nothing fancy, just good food that
          doesn't break the bank!
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
            aria-label="Enlarged Korean Beef Bowls photograph"
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
              alt="Enlarged Korean Beef Bowls photograph"
            />
          </div>
        </div>
      )}
    </div>
  );
}
