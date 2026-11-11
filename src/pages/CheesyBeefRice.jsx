import { useState, useEffect } from "react";
export default function CheesyBeefRice() {
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);

  useEffect(() => {
    if (!enlargedPhoto) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setEnlargedPhoto(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [enlargedPhoto]);

  return (
    <div className="recipe-content">
      <p className="recipe-category">
        THE KITCHEN / SKILLET DINNERS
      </p>

      <h1>Cheesy Beef &amp; Rice Skillet</h1>

      <p className="recipe-intro">
        Some nights, I just want something good for dinner
        without spending a fortune or dirtying every pot
        and pan in the kitchen. That's where this cheesy
        beef and rice skillet comes in. Ground beef,
        rice, Rotel, and plenty of melted cheddar cheese.
        Nothing fancy, just a good, filling meal that
        doesn't take all evening to make!
      </p>

      <section className="recipe-gallery kitchen-gallery">
        <div className="recipe-gallery-item">
          <button
            type="button"
            className="kitchen-photo-button"
            onClick={() => setEnlargedPhoto("/images/food/cheesy-beef-rice.jpeg")}
            aria-label="Enlarge Cheesy Beef and Rice Skillet photo"
          >
            <img
              src="/images/food/cheesy-beef-rice.jpeg"
              alt="Homemade cheesy beef and rice skillet with melted cheddar cheese"
              loading="lazy"
            />
          </button>

          <div className="recipe-gallery-caption">
            <span>01 / FINISHED DISH</span>
            <h3>Cheesy Beef &amp; Rice Goodness</h3>
            <p>
              Two pounds of ground beef, seasoned rice,
              Rotel, and plenty of melted cheese.
            </p>
          </div>
        </div>
      </section>

      <section className="recipe-instructions">
        <h2>What You'll Need</h2>

        <ul>
          <li>2 lbs ground beef</li>
          <li>1½ cups uncooked long-grain white rice</li>
          <li>1 can (10 oz) Rotel, undrained</li>
          <li>2 cups beef broth</li>
          <li>
            1½ packets taco seasoning
            (use 2 for stronger flavor)
          </li>
          <li>2 cups shredded cheddar cheese</li>
          <li>¾ teaspoon garlic powder</li>
          <li>Salt and black pepper, to taste</li>
        </ul>

        <h2>Let's Get Cooking</h2>

        <ol>
          
<li>
  <strong>Brown that beef.</strong>
  <p>
    Grab a large, deep skillet and turn the heat
    to medium-high. Toss in your 2 pounds of
    ground beef and cook until it's completely
    browned, breaking it apart as you go.
    Drain off the extra grease before moving on.
    Nobody wants a swimming pool of grease
    in their dinner!
  </p>
</li>


          <li>
            <strong>Time to season things up.</strong>
            <p>
              Add your taco seasoning and garlic powder
              to the browned beef. Give everything a good
              stir and let it cook for about 30 seconds.
              We're just getting those seasonings mixed
              in and waking up all that flavor.
            </p>
          </li>

          <li>
            <strong>Bring in the rice and Rotel.</strong>
            <p>
              Pour in your uncooked rice, the entire can
              of Rotel (juice and all), and 2 cups of
              beef broth. Stir everything together
              until it's well combined, then bring
              it to a gentle boil.
            </p>
          </li>

          <li>
            <strong>Let the skillet do its thing.</strong>
            <p>
              Once everything starts bubbling, turn
              the heat down to low and cover the skillet
              with a lid. Let it simmer for about
              18–22 minutes, or until the rice is tender
              and most of the liquid has been absorbed.
              Try not to keep lifting the lid!
              If the rice is still a little firm,
              add about ¼ cup of broth or water
              and cook for another 3–5 minutes.
            </p>
          </li>

          <li>
            <strong>Here comes the good stuff!</strong>
            <p>
              Once the rice is cooked, stir in
              1½ cups of shredded cheddar cheese.
              Sprinkle the remaining ½ cup over
              the top, put the lid back on, and
              let everything sit over low heat
              for another 2–3 minutes until
              that cheese is melted.
              Now we're talking!
            </p>
          </li>

          <li>
            <strong>Time to dig in!</strong>
            <p>
              Give everything one final stir if you
              want, grab yourself a plate, and enjoy!
              You've got a big skillet full of
              cheesy beef and rice without having
              to spend half the evening cooking.
            </p>
          </li>
        </ol>

        <h2>A Little Tip From My Kitchen</h2>

        <p>
          With 2 pounds of ground beef, you'll definitely
          want to use a large, deep skillet or pan with a
          good-fitting lid. Trust me, things can get
          crowded in there pretty quickly!
        </p>

        <p>
          And don't feel like you need to get fancy
          with this one. That's the whole point!
          It's cheap, easy, filling, and anything
          involving ground beef and melted cheese
          is already off to a pretty good start
          in my book.
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
            aria-label="Enlarged Cheesy Beef and Rice Skillet photograph"
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
              alt="Enlarged Cheesy Beef and Rice Skillet photograph"
            />
          </div>
        </div>
      )}
    </div>
  );
}
