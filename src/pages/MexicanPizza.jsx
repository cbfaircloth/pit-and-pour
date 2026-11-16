
import { useState, useEffect } from "react";

export default function MexicanPizza() {
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);

  const photos = [
    {
      src: "/images/food/mexican-pizzas.jpeg",
      alt: "Homemade Mexican pizzas topped with melted cheese, tomatoes, and green onions",
      label: "01 / FINISHED DISH",
      title: "Better Than the Drive-Thru!",
      description:
        "Crispy tortillas, seasoned ground beef, refried beans, sauce, and plenty of melted cheese. A homemade take on a fast-food favorite!",
    },
    {
      src: "/images/food/mexican-pizza-prep.jpeg",
      alt: "Preparing homemade Mexican pizzas with ground beef, crispy tortillas, and fresh toppings",
      label: "02 / BEHIND THE SCENES",
      title: "Getting Everything Ready",
      description:
        "A little prep work, some crispy tortillas, and a skillet full of seasoned beef. Nothing complicated, just good homemade food!",
    },
  ];

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

      <h1>Better-Than-the-Drive-Thru Mexican Pizza</h1>

      <button
        type="button"
        className="recipe-button print-recipe-button"
        onClick={() => window.print()}
      >
        🖨️ Print Recipe
      </button>

      <p className="recipe-intro">
        If you've ever had one of those Mexican Pizzas
        from Taco Bell, you already know why I wanted
        to try making them at home! I figured we could
        make something just as good, if not better,
        without spending a fortune at the drive-thru.
        We're talking crispy tortillas, seasoned ground
        beef, refried beans, and plenty of melted
        cheese. Nothing fancy, just a homemade version
        of a fast-food favorite that the whole family
        can enjoy!
      </p>

      <section className="recipe-gallery kitchen-gallery">
        {photos.map((photo) => (
          <div className="recipe-gallery-item" key={photo.src}>
            <button
              type="button"
              className="kitchen-photo-button"
              onClick={() => setEnlargedPhoto(photo)}
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

      <section className="recipe-instructions">
        <h2>What You'll Need</h2>

        <ul>
          <li>1 lb ground beef</li>
          <li>8 medium flour tortillas (6–8 inches)</li>
          <li>1 packet taco seasoning</li>
          <li>1 can (16 oz) fat-free refried beans</li>
          <li>1 can (10 oz) mild red enchilada sauce</li>
          <li>2 cups shredded Mexican cheese blend</li>
          <li>1 medium tomato, diced</li>
          <li>2 green onions, chopped</li>
          <li>2–3 tablespoons olive oil, for frying</li>
          <li>
            Water, according to your taco seasoning packet
          </li>
        </ul>

        <p>
          <strong>Servings:</strong> 4 Mexican pizzas
          <br />
          <strong>Prep Time:</strong> 15 minutes
          <br />
          <strong>Cook Time:</strong> 20–25 minutes
        </p>

        <h2>Let's Get Cooking</h2>

        <ol>
          <li>
            <strong>Brown that beef.</strong>
            <p>
              Grab a skillet and cook your ground beef
              over medium heat until it's completely
              browned, breaking it apart as you go.
              Drain off the excess grease, then add
              your taco seasoning and water according
              to the packet. Give everything a good
              stir and let it simmer until the sauce
              thickens.
            </p>
          </li>

          <li>
            <strong>Get those tortillas crispy!</strong>
            <p>
              Heat a thin layer of olive oil in
              a skillet over medium heat. Fry each
              flour tortilla for about 1–2 minutes
              per side until golden brown and crispy.
              Transfer them to paper towels to drain.
              You want them nice and crunchy so they
              can hold all that goodness we're about
              to pile on!
            </p>
          </li>

          <li>
            <strong>Warm up those beans.</strong>
            <p>
              Heat your fat-free refried beans in a
              small saucepan or microwave until they're
              warm and easy to spread. This makes
              assembling the pizzas a whole lot easier
              without breaking those crispy tortillas.
            </p>
          </li>

          <li>
            <strong>Start building those pizzas.</strong>
            <p>
              Preheat your oven to 400°F. Place four
              crispy tortillas on a baking sheet.
              Spread a layer of refried beans over
              each one, followed by a generous helping
              of seasoned ground beef. Place another
              crispy tortilla on top of each pizza.
            </p>
          </li>

          <li>
            <strong>Bring on the sauce and cheese!</strong>
            <p>
              Spoon about 2–3 tablespoons of red
              enchilada sauce over the top tortilla
              of each pizza. Spread it around, then
              pile on that shredded Mexican cheese.
              Don't be shy with the cheese!
            </p>
          </li>

          <li>
            <strong>Into the oven they go.</strong>
            <p>
              Slide the baking sheet into your
              preheated oven and bake for about
              7–10 minutes, or until the cheese
              is melted and bubbly.
            </p>
          </li>

          <li>
            <strong>Finish them off and dig in!</strong>
            <p>
              Remove the pizzas from the oven and
              top with diced tomatoes and chopped
              green onions. Let them sit for a
              minute or two, then slice into
              quarters and enjoy!
            </p>
          </li>
        </ol>

        <h2>A Little Tip From My Kitchen</h2>

        <p>
          Here's the secret to getting these right:
          don't skip crisping those flour tortillas!
          If they're too soft, you'll end up with
          a soggy mess once you start adding the
          beans, beef, and sauce. Get them golden
          and crunchy before you start building.
        </p>

        <p>
          I went with fat-free refried beans for
          this recipe, and they worked great!
          There's no need to spend extra money
          on fancy ingredients when the
          inexpensive stuff gets the job done.
        </p>

        <p>
          Another little trick is to go easy
          on the enchilada sauce. You want
          enough for flavor without soaking
          the top tortilla. And if you've got
          leftovers, store the toppings and
          tortillas separately whenever possible.
          That way, you can put together another
          crispy pizza the next day!
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
            aria-label="Enlarged Mexican Pizza photograph"
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
              src={enlargedPhoto.src}
              alt={enlargedPhoto.alt}
            />
          </div>
        </div>
      )}
    </div>
  );
}
