"use client";
// Third Party
import { Slide, ToastContainer } from "react-toastify";

// Custom Close Button Component
const CustomCloseButton = ({ closeToast }) => (
  <button
    onClick={closeToast}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginLeft: "auto"
    }}
    aria-label="close"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
        fill="#1D1B20"
      />
    </svg>
  </button>
);

export default function ToastProvider() {
  return (
    <ToastContainer
      transition={Slide}
      position="top-right"
      autoClose={100000}
      limit={1}
      hideProgressBar={true}
      newestOnTop={false}
      draggable={false}
      pauseOnVisibilityChange
      closeOnClick={false}
      pauseOnHover
      style={{ width: "100%", maxWidth: "456px" }}
      toastClassName={() => ""}
      closeButton={CustomCloseButton}
    />
  );
}
