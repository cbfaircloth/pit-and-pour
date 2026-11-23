
import RecipeTemplate from "../components/RecipeTemplate";

export default function StLouisCherryColaRibs() {
  return (
    <RecipeTemplate
      category="THE SMOKEHOUSE / BBQ RECIPES"
      title="St. Louis Style Smoked Cherry Cola Spare Ribs"
      introduction="I decided to switch things up with these spare ribs. I trimmed two racks St. Louis style, seasoned them with Fire & Smoke Society Cherry Cola rub, and fired up the Traeger with pecan pellets. I also threw in a smoke tube loaded with pecan pellets for some extra smoke. After wrapping them with Country Crock, honey, brown sugar, and apple juice, I finished them with Blues Hog Raspberry Chipotle BBQ sauce. The result? Sweet, smoky ribs with a little heat and meat that practically came off the bone!"
      photos={[
        {
          src: "/images/food/spare-ribs-trimming.jpeg",
          alt: "Spare ribs before and during St. Louis style trimming",
          label: "THE PREP",
          heading: "Starting With Spare Ribs",
          description:
            "The original spare ribs still in the package alongside the first rack I had already started trimming.",
        },
        {
          src: "/images/food/spare-ribs-trimmed.jpeg",
          alt: "Two racks of St. Louis style spare ribs trimmed and seasoned",
          label: "READY FOR THE SMOKER",
          heading: "Trimmed and Seasoned",
          description:
            "Both racks trimmed St. Louis style by hand and coated with Cherry Cola rub.",
        },
        {
          src: "/images/food/smoked-spare-ribs.jpeg",
          alt: "Finished Cherry Cola smoked ribs with Raspberry Chipotle sauce",
          label: "THE FINISHED RIBS",
          heading: "The Final Result",
          description:
            "Sweet, smoky, tender ribs finished with Blues Hog Raspberry Chipotle BBQ sauce.",
        },
      ]}
      ingredients={[
        "2 racks of pork spare ribs, trimmed St. Louis style",
        "Fire & Smoke Society Cherry Cola BBQ Rub",
        "Country Crock buttery spread",
        "Honey",
        "Light brown sugar",
        "Apple juice",
        "Blues Hog Raspberry Chipotle BBQ Sauce",
        "Pecan wood pellets for the smoker",
        "Pecan wood pellets for the smoke tube",
        "Heavy-duty aluminum foil",
      ]}
      steps={[
        {
          title: "Trim the Ribs",
          description:
            "Start with two full racks of spare ribs. Trim away the rib tips, excess cartilage, and uneven edges to create St. Louis style racks. Remove the membrane from the bone side if it's still attached.",
        },
        {
          title: "Season Them Up",
          description:
            "Coat both racks with Fire & Smoke Society Cherry Cola BBQ Rub. Make sure to cover both sides and let the seasoning settle while the smoker comes up to temperature.",
        },
        {
          title: "Fire Up the Traeger",
          description:
            "Set the smoker to 250°F using pecan pellets. Fill and light a smoke tube with pecan pellets as well, then place it safely inside the smoker away from the meat. The extra smoke really made a difference on this cook!",
        },
        {
          title: "Get the Ribs Smoking",
          description:
            "Place both racks directly on the smoker grates, bone side down. I started mine at 10:45 AM and kept the smoker at 250°F throughout the cook. Let the ribs develop color and bark before wrapping.",
        },
        {
          title: "Wrap With the Sweet Stuff",
          description:
            "Once the bark has developed, lay out heavy-duty aluminum foil and add Country Crock, honey, light brown sugar, and a splash of apple juice. Wrap the ribs tightly and return them to the smoker at 250°F until tender.",
        },
        {
          title: "Sauce and Set the Bark",
          description:
            "Carefully remove the ribs from the foil and return them to the smoker. Brush on Blues Hog Raspberry Chipotle BBQ Sauce and let it set for about 20 minutes at 250°F.",
        },
        {
          title: "Rest and Enjoy",
          description:
            "I pulled my ribs off the smoker at 4:20 PM, after 5 hours and 35 minutes of smoking. I loosely covered them with foil and let them rest for a few minutes before serving.",
        },
      ]}
      tipTitle="The Final Bite"
      tips={[
        "These ribs turned out absolutely delicious! The Cherry Cola rub brought a nice sweetness without being overwhelming, while the Raspberry Chipotle sauce added just a little tinge of heat.",
        "The flavors complemented each other perfectly, and using pecan pellets in both the smoker and smoke tube gave these ribs noticeably more smoke flavor than my usual cooks.",
        "As for tenderness? The meat was coming off the bone with ease. This is definitely a combination I'd use again!",
      ]}
    />
  );
}
