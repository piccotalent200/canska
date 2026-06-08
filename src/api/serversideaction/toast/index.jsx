'use client'
import React from "react";
import Link from 'next/link'
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const typeConfig = {
  success: {
   bg: "#DDEFD5",
   textColor: "#121A2B",
  },
  error: {
    bg: "#B93832",
    textColor: "#FFFFFF",
  },
  warning: {
    bg: "#FF9800",
    textColor: "#FFFFFF",
  },
  info: {
    bg: "#2196F3",
    textColor: "#FFFFFF",
  },
};

export const ToastMessage = ({ type, message, routeMsg }) => {
  const config = typeConfig[type] || typeConfig.info;

  toast(
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginRight: "10px" }}>
      <p
        style={{
          fontSize: "15px",
          fontWeight: 500,
          color: config.textColor,
          lineHeight: "22px",
          margin: 0,
        }}
      >
        {message}
      </p>
      {type === "dark" && (
        <Link
          href="/quotation"
          prefetch={false}
          style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}
        >
          {routeMsg}
        </Link>
      )}
    </div>,
    {
      style: {
        background: config.bg,
        border: "none",
        borderRadius: "16px",
        padding: "14px 20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        minWidth: "300px",
        maxWidth: "420px",
        display: "flex",
        alignItems: "center",
      },
      icon: false,
      closeButton: ({ closeToast }) => (
        <button
          onClick={closeToast}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            // color: "#000000",
            color: config.textColor,
            fontSize: "18px",
            lineHeight: 1,
            padding: "0",
            marginLeft: "auto",
            flexShrink: 0,
            alignSelf: "center",
            opacity: 0.9,
          }}
          aria-label="Close"
        >
          ✕
        </button>
      ),
    }
  );

  ToastMessage.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  ToastMessage.dismiss = toast.dismiss;
  toast.clearWaitingQueue();
};
