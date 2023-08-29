import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
          position: "relative",
          zIndex: 2,
        }}
      >
        {progress.toFixed(2)}%
      </p>
      <span
        className="canvas-loader"
        style={{ marginTop: 20, zIndex: 1 }}
      ></span>
    </Html>
  );
};

export default Loader;
