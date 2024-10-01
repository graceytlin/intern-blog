function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

export const teams = [
  {
    name: "Team 1",
    category: "Team 1",
    title: "Technology Team",
    subtitle: "Names of teammates",
    tasks: [
      "Lead Engineer - Product Owner - Scrum Master",
      "Testing Lead - UX/UI Lead - Engineer",
      "Subset of the wider UK intern team",
      "Worked together in sprints and to complete user stories, developing and improving functionalities on internal dashboard",
    ],
  },
  {
    name: "Team 2",
    category: "Team 2",
    title: "Intern Family",
    subtitle:
      "Names of teammates",
    tasks: [
      "Cross-functional and cross-regional group of interns",
      "Great opportunity to meet new people across the different intern streams (and hear about their experiences)",
      "Participated in fun events such as the Minute to Win It challenge, a scavenger hunt, and quizzes",
      "Involved in the creation of our intern family video to demonstrate what we have been up to this summer",
      "Volunteered together to create educational finance packs for primary school children",
    ],
    button: "Gallery",
    pictures: [
      {
        src: images["placeholder.png"],
        caption: "Quiz time!",
        width: 1898,
        height: "auto",
      },
      {
        src: images["placeholder.png"],
        caption: "Volunteer day",
        width: 1537,
        height: "auto",
      },
      {
        src: images["placeholder.png"],
        caption: "Our last intern family meeting",
        width: 1174,
        height: "auto",
      },
    ],
  },
];
