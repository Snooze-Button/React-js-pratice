# Notes on React development

### Create React App
**npx create-react-app** 

//gives project struture with folder and files to perform different tasks//

**hello-react--use -npm** 

//Sets up folder hello-react using npm//

**npm start**

//Opens project in local host//

### Folders in React
* package.json: Contains project dependicies like libralies (react , react dom. react scripts)
* src: Contains all the files used to write the application
* public: Contains all the build files when launching App for production

### Shotcuts for browser
* Ctrl + Shift + J -> Opens Developer Tools
* RightClick + Inspect -> Opens Developer Tools
    * Components tab: shows all the different componenets on the page
* Ctrl ++ -> Zoom in Developer Tools
    
### Index.js -> function ReactDom
 ReactDom takes 2 arguments 
 1. argument to create
 2. where to render element


**ReactDOM.render(**

**React.createElement ("h1", { style: {color: "blue" }}, "Hello!"),**
1. React.createElement takes in 3 agruments

    *    name of the tag to create e.g. "h1" , "h2"
    *    properties for the element to have e.g. style: {color: "red"}
    *    any children e.g. tag or text "Hello!"


**document.getElementById("root")** 

2. Renders element in root location, root is found in public/index folder

**);**



