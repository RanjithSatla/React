# Basics

## React

```javascript
const parent = React.createElement(
  "div",
  {},
  React.createElement("h1", { id: parent }, "This is Parent tag")
);

 React.createElement => Creates a JavaScript object (React element)
 ReactDOM.createRoot => Initializes the React application
 root.render(Element) => Converts the React element into an actual HTML element and renders it to the DOM


The explanation breaks down the steps:
1. `React.createElement` creates a **React element**, which is just a JavaScript object describing the structure of your UI.
2. `ReactDOM.createRoot` sets up the root DOM node where React will render the UI.
3. `root.render(Element)` converts the React element into real **HTML elements** in the DOM.

This format ensures that your notes remain clear and concise while embedded in the code. Let me know if you’d like to format it differently!


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
```
