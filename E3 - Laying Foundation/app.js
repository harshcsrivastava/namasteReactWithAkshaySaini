import React from "react";
import ReactDOM from "react-dom/client";

// React Element => it Creates an Object (Replaces everything with the code here)

const heading = React.createElement("h1", { id: "head" }, "Namaster Bhaiyo");

// OR USE THIS

// JSX - Javascript Syntax (Not a part of React and makes life easy for developers) (JSX is not hmtl in JS it is a html like syntax)

const jsxHeading = (
  <h1 id="heading" className="root">
    Yooohoohooo
  </h1>
);
// JS code is transpiled(converted) before it reaches the JS by PARCEL(manager) by BABEL
// JSX is converted to React.createElement by BABEL
// BABEL is a JS controllerd
// JS ENGINE understand Ecma script(ES6), therefore browser will not understand but how it is working, (due to parcel)
// BABEL transpile/js compiler for older browser.
// Always use camelCase for attribute
console.log(heading);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

// const a = <a href="https://youtube.com" target="blank">Clcik me</a>
const a = (
  <img src="https://filmfare.wwmindia.com/content/2023/jul/janhvikapoor21688711319.jpg"></img>
);

// to write in multiple lines, mandatory to use brackets
root.render(a); //for only React Element

/*
React Component - Search Bar, Header, Footer,etc

- Class Based Component (OLD)
- Functional Component (NEW)


*/
// React Functional Component (Always start with Capital Letter)
// A functional returning a JS component is called a React Fn compo
const Title = () => {
  return <h1>A Title Component</h1>;
};

// OR
//to render Title Component comments bhi dikhega

// What is Component Composition - this
// {} - Write any JS code in

// to put react element in Component or in React Element  add it in Curly{},
const subTitle = <h3>Sub-Heading</h3>;

number = 100;
const HeadingComponent2 = () => (
  <div className="container">
    <Title />
    {subTitle}
    {Title()}
    <Title></Title>
    {number + 100}
    <h1>A Second Functional Component</h1>
  </div>
);
// Cross-site scripting if agar hame malicious data API se mile and hamne use execute kr diya, to JSX sanitizes anything, prevents cross-siting Scripting 
// what makes code readeable and faster- JSX, modules
root.render(<HeadingComponent2 />);
