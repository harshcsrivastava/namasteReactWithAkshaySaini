// React.createElement is just a OBJEct
const heading = React.createElement("h1", {
    id: 'Hash',
    xyx: 'fef'
    //2nd para => to give attributes
}, "Hey There, React Here.")

const root = ReactDOM.createRoot(document.getElementById("root"))
// where all the work will happen, iske andar kaand hoga sab

root.render(heading) //converting obj to h1


//CREATING NESTED ELEMENT with PARENT and children

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
        // to create  SIBLINGS convert this into array
        //looks ugly thats why JSX is created and used, this is not used


// ReactElement(Obj)=> HTML  thhat browser understands

// Difference between Library(can work in a small portion of file also) and Framework
const body = ReactDOM.createRoot(document.querySelector('body'))
body.render(parent)

