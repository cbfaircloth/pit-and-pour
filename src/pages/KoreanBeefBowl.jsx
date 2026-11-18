
import RecipeTemplate from "../components/RecipeTemplate";

export default function KoreanBeefBowl() {
  return (
    <RecipeTemplate
      category="THE KITCHEN / FAMILY DINNERS"
      title="Korean Beef Bowls"
      introduction={
        "Some nights, I want something a little different for dinner without spending a fortune or standing in the kitchen all evening. That's where these Korean Beef Bowls come in! Two pounds of ground beef cooked in a sweet and savory sauce, served over a bed of jasmine rice. Nothing complicated, just a quick, filling meal that's packed with flavor and easy enough for a busy weeknight!"
      }
      photos={[
        {
          src: "/images/food/korean-beef-bowl.jpeg",
          alt: "Homemade Korean Beef Bowls served over white rice",
          label: "FINISHED DISH",
          heading: "Sweet, Savory & Delicious!",
          description:
            "Seasoned ground beef tossed in a sweet and savory sauce, served over fluffy jasmine rice. Simple ingredients and a whole lot of flavor!",
        },
      ]}
      ingredients={[
        "2 lbs ground beef",
        "6 cloves garlic, minced",
        "1 teaspoon ground ginger",
        "⅔ cup low-sodium soy sauce",
        "⅓ cup light brown sugar",
        "1 tablespoon toasted sesame oil",
        "½ teaspoon black pepper",
        "½ teaspoon red pepper flakes (optional)",
        "Jasmine Rice (4 Success boil-in-bag portions, or your preferred jasmine rice)",
        "4 green onions, chopped",
        "Sesame seeds (optional)",
        "4 fried eggs (optional)",
      ]}
      steps={[
        {
          title: "Get that rice going.",
          description:
            "First things first, get your jasmine rice cooking according to the package instructions. I used Success Jasmine Rice boil-in-bag, which makes things super easy. While the rice is cooking, we'll get started on the beef.",
        },
        {
          title: "Brown that beef.",
          description:
            "Grab a large skillet and turn the heat to medium-high. Add your 2 pounds of ground beef and cook until completely browned, breaking it apart as you go. Drain off the excess grease before moving on.",
        },
        {
          title: "Bring in the garlic.",
          description:
            "Add the minced garlic to your browned beef and give everything a good stir. Let it cook for about a minute until that garlic starts smelling good. Don't let it burn!",
        },
        {
          title: "Mix up that sauce.",
          description:
            "In a separate bowl, whisk together the soy sauce, light brown sugar, ground ginger, toasted sesame oil, black pepper, and red pepper flakes if you want a little heat. Give it a good mix until everything is combined.",
        },
        {
          title: "Let those flavors get happy.",
          description:
            "Pour the sauce over your cooked ground beef and stir until everything is coated. Reduce the heat to medium-low and let it simmer for about 3–5 minutes. This gives the beef time to soak up all that sweet and savory goodness!",
        },
        {
          title: "Build those bowls!",
          description:
            "Spoon some cooked jasmine rice into your bowls and pile that Korean beef right on top. Finish with chopped green onions and a sprinkle of sesame seeds if you've got them. Feeling fancy? Throw a fried egg on top and dig in!",
        },
      ]}
      tipTitle="A Little Tip From My Kitchen"
      tips={[
        "Here's a little shortcut that makes this recipe even easier. Grab yourself a box of Success Jasmine Rice boil-in-bag rice. The box comes with four bags, so I use one bag for each of our four bowls. No measuring out rice or worrying about getting the water-to-rice ratio just right. Cook the bags according to the package, and you're good to go!",
        "The brown sugar gives this sauce a nice sweetness, while the soy sauce brings that savory flavor. The garlic, ginger, and sesame oil pull everything together. If you want a little kick, add those red pepper flakes. If not, leave them out. It'll still taste great!",
        "This is also a great recipe for leftovers. Keep the beef and rice refrigerated in separate airtight containers, and you've got yourself an easy lunch the next day. Nothing fancy, just good food that doesn't break the bank!",
      ]}
    />
  );
}
