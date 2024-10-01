import { FaRegEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Goals",
    url: "/goals",
  },
  {
    title: "Teams",
    url: "/teams",
  },
  // {
  //   title: "Questions",
  //   url: "/questions",
  // },
];

export const icons = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/graceytlin",
  },
  {
    icon: <FaGithub />,
    url: "https://www.github.com/graceytlin",
  },
  {
    icon: <FaRegEnvelope />,
    url: "mailto:graceytlin@gmail.com",
  },
];
