
import BourbonReviewTemplate from "../components/BourbonReviewTemplate";

export default function FlightLQRHouse() {
  const photos = [
    {
      src: "/images/bourbon/flight-lqr-house.jpg",
      alt: "Flight by LQR House bourbon bottle beside a glass of bourbon on the rocks",
      label: "01 / THE POUR",
      title: "Flight by LQR House",
      description:
        "A rum-and-wine-barrel-finished bourbon, enjoyed on the rocks.",
    },
  ];

  const introduction = [
    "Some bourbons are worth hunting down, and others are simply worth picking up when you happen to come across them. For me, Flight by LQR House falls into that second category.",

    "I picked this bottle up for just $21, and considering it's finished in rum and wine barrels, I was curious to see what it would bring to the glass. I've had it before, but tonight I'm pouring another glass on the rocks and giving it another look.",
  ];

  const details = [
    {
      label: "THE BOTTLE",
      value: "Flight by LQR House",
    },
    {
      label: "PROOF",
      value: "88.5 Proof",
    },
    {
      label: "MY PREFERENCE",
      value: "On the Rocks",
    },
    {
      label: "PRICE PAID",
      value: "$21",
    },
    {
      label: "WOULD I BUY AGAIN?",
      value: "Sure, But I Wouldn't Hunt for It",
    },
  ];

  const tastingNotes = [
    {
      title: "The Nose",
      paragraphs: [
        "Right off the nose, there's something different about this bourbon. It's not what I typically expect when smelling a glass of bourbon, and I'm sure the rum and wine barrel finishing has something to do with that.",

        "It's an interesting aroma, and it definitely lets you know this isn't your everyday bourbon.",
      ],
    },
    {
      title: "The First Sip",
      paragraphs: [
        "I'm drinking this one on the rocks, and the first thing I notice is that it leans toward the sweeter side.",

        "I'm picking up black cherry along with some spice. LQR House mentions vanilla in their tasting notes, but personally, I'm just not getting that. Everybody's palate is different, and that's part of the fun of trying different bourbons.",
      ],
    },
    {
      title: "The Burn & Finish",
      paragraphs: [
        "Despite the sweetness up front, there's still some noticeable burn on the backend.",

        "It's not enough to ruin the experience, but it's definitely there. You've got some sweetness, some spice, and then that little kick to remind you you're drinking bourbon.",
      ],
    },
    {
      title: "How I Drink It",
      paragraphs: [
        "As usual, I'm enjoying this one on the rocks. That's how I tasted it for this review, and it's how I personally prefer my bourbon.",

        "Even with ice in the glass, I can still pick up that black cherry, the spice, and the burn on the finish.",
      ],
    },
  ];

  const finalPour = [
    "For $21, I really can't complain about Flight. It's a good bourbon, and I definitely feel like I got my money's worth.",

    "The rum and wine barrel finishing gives it something a little different, and I enjoy the sweeter profile with that black cherry and spice coming through.",

    "Would I buy another bottle? Sure, absolutely. But would I go out of my way to track one down? Probably not.",

    "There's nothing wrong with Flight. It's enjoyable, affordable, and worth trying if you happen to come across it at a good price. It just doesn't have that something extra that makes me want to hunt it down.",

    "My Verdict: Worth the price, not the hunt. A solid $21 bourbon that I'd happily drink again, but not one I'm going out of my way to find.",
  ];

  return (
    <BourbonReviewTemplate
      title="Flight by LQR House — Worth the Price, Not the Hunt"
      introduction={introduction}
      details={details}
      photos={photos}
      tastingNotes={tastingNotes}
      finalPour={finalPour}
    />
  );
}
