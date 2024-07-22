/*
npm => Package Manager(anything but node package manager)
npm init... (Or npm init -y {skip nmany things})

most imp thing in package {packages your app to push it to production}
React use WebPac bundler.

then need a bundler(webpac, parcel*,veet,etc)
parcel comes as node package
( 
Two de pendencies:
    - Dev Dependency => development phase (-D - parameter,)
    - Normal Dependency => in production phase
)
to install => npm install -D parcel
^ - caret, ~ - tilde in package.json
^ - updates minor and patch while keeping major fixed
~ - updates patch/major updates
if removed both, then no updates

The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

Transitive Dependencies - one package can have dependencies which have further dependencies

Node Modules have many package.json due to dependencies.

if we delete node modules it can be downloaded with the help package.json, package-lock.json(use npm install)
whatever you can regenrate, don't put in github (put in .gitignore)

npx => to execute the (npx parcel index.html)

Ways to get React:
- Fetching from CDN(Costly, not preferable)
- Install React and React-DOM as a Package (npm install/i react)

what makes REACT faster? (ModiJI, Ammit Shah)
Uses of PARCEL
- DEV Build
- Local Server
- HMR(Hot Module Replacement) => auto reload feature
- Use File Watching Algorithm for HMR written in C++
- Faster Builds because of Reliable Caching
- Image Optimization
- Minification
- Bundling 
- Compressing
- Consistent Hashing* (Read)
- Code Splitting
- Differential Bundling => Support Older Browser
- Diagnostics
- Error Handling
- HTTPS from Http if needed
- Tree Shaking => Remove unused code
- Different Dev and Prod Bundles

1. npx parcel build index.html (prod bundle)
2. Remove Main: App.js form package.json because automatically add hota hai
Parcel is giving muscles and bones to app

Ctrl + C to exit


browserlist.dev
- in package.json => "browserslist": ["last 2 Chrome version","last 2 Firefox version"],
Can configure it accordingly with help github documentation like "cover 99% in US"


now after adding script we dont have to type "npx parcel ..." baar-baar we can use "npm run start" or "npm start"
"npm run build" (short me nhi work krega)
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h2", {
    id: 'Hash',
    xyx: 'fef'
    //2nd para => to give attributes
}, "Hey There, React Here.")

const root = ReactDOM.createRoot(document.getElementById("root"))


// root.render(heading)


const parent = React.createElement(
    'div',
    {id:'parent'}, 
    [
        React.createElement(
            'div', 
            {id:'children1'},
            [
                React.createElement('h1',{id:'head'},"NEsted ELement"),
                React.createElement('h3',{id:'sib'},"Sibling ELement")
            ]
        ),
        React.createElement(
            'div', 
            {id:'children2'},
            [
                React.createElement('h1',{id:'head'},"NEsted ELement"),
                React.createElement('h3',{id:'sib'},"Sibling ELement")
            ]
        )
    ]
)
       
const body = ReactDOM.createRoot(document.querySelector('#root'))
body.render(parent)

