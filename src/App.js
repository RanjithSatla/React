import React from "react";
import ReactDOM from "react-dom/client";

const Component = () => {
  return (
    <div>
      <h1>This is React Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component />);
