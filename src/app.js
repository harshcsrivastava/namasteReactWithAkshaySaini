
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./component/Header"
import Body from "./component/Body"

const root = ReactDOM.createRoot(document.getElementById('root'))

/* *We create different JS file for each component. 
app.js => Root Level Code
commponent folder => make your component and file name same starting with CAPITAL LETTER


some people write .jsx extension, sooomme .tsx for typescript

REACT FOLDER STRUCTURE (article on web)


U need  to link or we can say import Header component from  Header File
Before import we need to Export the Header Compoonent.

Never keep Hardcoded data like API in same file and URL too
NEVER keep in Compoonent


Name all your constants in CAPITAL LETTERS

in one file we can only export, we hae two items then it will throw an error

Two types of export:- 
- Default Export/Impoort
    export default Header
    import Header from "./"

-Named Export/Import
    export const HEADER
    import {HEADER} from "./"

*/


const AppDesign = () => {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  };
  
  root.render(<AppDesign />);