import Tabs from "../../components/Tabs/Tabs";
import { goals } from "./goals-data";
import { BiTargetLock } from "react-icons/bi";

const pictures = [
  {
    src: "https://www.simple-react-lightbox.dev/docs/gallery/unsplash01.jpg",
    caption: "Lorem ipsum dolor sit amet",
    width: 1920,
    height: "auto",
  },
  {
    src: "https://www.simple-react-lightbox.dev/docs/gallery/unsplash02.jpg",
    caption: "Consecutur adiscip elit",
    width: 2000,
    height: "auto",
  },
  {
    src: "https://www.simple-react-lightbox.dev/docs/gallery/unsplash03.jpg",
    thumbnail:
      "https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash03.jpg",
    caption: "Commodo commodo dolore",
    width: 1024,
    height: "auto",
  },
];

const GoalsPage = () => {
  return (
    <section className="section">
      <div className="title">
        <h2>
          Goals{" "}
          <i style={{ display: "inline-block" }}>
            <BiTargetLock />
          </i>
        </h2>
        <div className="underline"></div>
      </div>

      <Tabs tabs={goals} elements={pictures} />
    </section>
  );
};

export default GoalsPage;
