import Modal from "react-modal";
import ReactPlayer from "react-player";

Modal.setAppElement("#root");

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const modalStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#000",
    border: "none",
    padding: 0,
    overflow: "hidden",
    width: "80vw",
    maxWidth: "960px",
    height: "auto",
    maxHeight: "80vh",
    borderRadius: "8px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
    zIndex: 1000,
  },
};

function VideoPlayer({ isOpen, onClose, videoUrl }: VideoPlayerProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      contentLabel="Video Modal"
      ariaHideApp={false}
    >
      <div
        style={{
          position: "relative",
          paddingTop: "56.25%" /* 16:9 aspect ratio */,
        }}
      >
        <ReactPlayer
          src={videoUrl}
          playing={isOpen}
          controls={true}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(0,0,0,0.6)",
            border: "none",
            borderRadius: "50%",
            color: "white",
            fontSize: 24,
            width: 36,
            height: 36,
            cursor: "pointer",
            lineHeight: 1,
          }}
          aria-label="Close video"
        >
          ×
        </button>
      </div>
    </Modal>
  );
}

export default VideoPlayer;
