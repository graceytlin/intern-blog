import { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    backgroundColor: "#EC6B29",
    iconColor: "white",
    showDownloadButton: false,
  },
  caption: {
    captionColor: "white",
    captionFontSize: "20px",
  },
  settings: {
    overlayColor: "rgba(26, 29, 36, 0.9)",
  },
};

const LightBox = (props) => {
  return <SRLWrapper options={options} elements={props.elements} />;
};

export default LightBox;
