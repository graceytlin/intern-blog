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

export const goals = [
  {
    name: "1",
    category: "Goal 1",
    title: "Internal dashboard",
    subtitle: "Front-end, testing, teamwork",
    tasks: [
      "Work effectively within my team to add functionality to the internal metrics dashboard",
      "Challenging but rewarding",
      "Worked within a Scrum (and then Kanban) team to devliver on tasks assigned by Product Owner",
      "Technologies used: React.js, Jest, Enzyme, Cypress, Java",
    ],
    button: "Gallery",
    pictures: [
      {
        src: images["placeholder.png"],
        caption: 'Refactoring the usage of the word "Story"',
        width: 928,
        height: "auto",
      },
      {
        src: images["placeholder.png"],
        caption:
          "Test Completion Report for manual testing completed during the first sprint",
        width: 817,
        height: "auto",
      },
      {
        src: images["placeholder.jpg"],
        caption: "All environments report view",
        width: 1900,
        height: "auto",
      },
      {
        src: images["placeholder.jpg"],
        caption: "Enzyme test to check filters work as expected",
        width: 846,
        height: "auto",
      },
      {
        src: images["placeholder.jpg"],
        caption: "Further Enzyme test",
        width: 890,
        height: "auto",
      },
      {
        src: images["placeholder.jpg"],
        caption: "Updating UI elements",
        width: 1732,
        height: "auto",
      },
      {
        src: images["placeholder.jpg"],
        caption: "More UI updates",
        width: 1902,
        height: "auto",
      },
      {
        src: images["palceholder.jpg"],
        caption: "Bug fix test written using Cypress",
        width: 753,
        height: "auto",
      },
    ],
  },
  {
    name: "2",
    category: "Goal 2",
    title: "React.js Knowledge",
    subtitle: "Self-development task",
    tasks: [
      "Utilise Udemy to improve my knowledge of React.js",
      "Learnt the basics of React including props, components, and routing",
      "Created this website to demostrate goal achievement",
    ],
  },
  {
    name: "3",
    category: "Goal 3",
    title: "Build strong relationships",
    subtitle: "Networking",
    tasks: [
      "Engaged with other UK interns by researching and implementing ways to build strong team relationships",
      "Created and set up a UK interns events committee",
      "Hosted weekly games including: Quiz night, Among Us, and a hackathon",
    ],
    button: "Gallery",
    pictures: [
      {
        src: images["placeholder.png"],
        caption: "The team on a Microsoft Teams catch-up",
        width: 1626,
        height: "auto",
      },
      {
        src: images["placeholder.png"],
        caption:
          "Discord server created to facilitate events, announcements, and communication between intern group",
        width: 1624,
        height: "auto",
      },
      {
        src: images["placeholder.png"],
        caption: "Quiz night",
        width: 1920,
        height: "auto",
      },
      {
        src: images["placeholder.png"],
        caption: "Picture taken during one of our catch-ups",
        width: 1643,
        height: "auto",
      },
      {
        src: images["placeholder.png"],
        caption:
          "Expression of interest form created to gauge interest in a hackathon",
        width: 1613,
        height: "auto",
      },
    ],
  },
];
