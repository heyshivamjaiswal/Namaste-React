import React from "react";
// import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

// Nested structure example
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
