import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import GalleryButton from "../Gallery/GalleryButton";
import LightBox from "../Gallery/LightBox";
import "./Tabs.css";

const Tabs = (props) => {
  const tabs = props.tabs;
  const options = props.options;
  const [value, setValue] = useState(0);

  const { category, title, subtitle, tasks, button, pictures } = tabs[value];

  return (
    <section className="tabs">
      <div className="tabs-center">
        {/* tabs container */}
        <div className="btn-container">
          {tabs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`tab-btn ${index === value && "active-btn"}`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* tab content */}
        <article className="tab-content">
          <h3>{title}</h3>
          <h4>{category}</h4>
          <p className="subtitle">{subtitle}</p>

          <div className="tasks-container">
            {tasks.map((task, index) => {
              return (
                <div key={index} className="task-desc task-tabs">
                  <FaAngleDoubleRight className="task-icon"></FaAngleDoubleRight>
                  <p>{task}</p>
                </div>
              );
            })}
          </div>

          {button && (
            <>
              <GalleryButton />
              <LightBox options={options} elements={pictures} />
            </>
          )}
        </article>
      </div>
    </section>
  );
};

export default Tabs;
