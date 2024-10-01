import { useLightbox } from "simple-react-lightbox";

const GalleryButton = (props) => {
  const { openLightbox } = useLightbox();

  return (
    <button className="action-btn" onClick={() => openLightbox(props.imageToOpen)}>
      Gallery
    </button>
  );
};

export default GalleryButton