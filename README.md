# Notes on React development

### Create React App (cmd)
`npx create-react-app `

gives project struture with folder and files to perform different tasks

`hello-react--use -npm `

Sets up folder hello-react using npm

`npm start`

Opens project in local host

### Folders in React
* package.json: Contains project dependicies like libralies (react , react dom. react scripts)
* src: Contains all the files used to write the application
* public: Contains all the build files when launching App for production

### Shotcuts for browser
* Ctrl + Shift + J -> Opens Developer Tools
* RightClick + Inspect -> Opens Developer Tools
    * Components tab: shows all the different componenets on the page
* Ctrl ++ -> Zoom in Developer Tools
    
### Render react element to dom
 ReactDom takes 2 arguments 
 1. argument to create
 2. where to render element

```

ReactDOM.render(

React.createElement ("h1", { style: {color: "blue" }}, "Hello!"),
    
```
1. React.createElement takes in 3 agruments

    *    name of the tag to create e.g. "ul" , "h2"
    *    properties for the element to have e.g. style: {color: "red"}
    *    any children e.g. tag or text "Hello!"
      
 
 ` document.getElementById("root"));`

2. Renders element in root location, root is found in public/index folder

  
### Render multiple elements 

*   Nested elements example below

  ```
  ReactDOM.render(

    React.createElement ("div", { style: {color: "blue" }}, React.createElement("h1 , null, hi!")) , document.getElementById("root")
    
    );
```
    
    
### Incoperate JSX (JavaScript as XML)

* Allows tags to be written directly in the JavaScript
* Babel complies HTML into JS
```
//Example of unordered list 
ReactDOM.rendom(

<ul>
<li>List 1</li>
<li>List 2</li>
</ul>,
document.getElementById("root") 

);


//Example with CSS ID selector and dot notation

let city = {
    name = Tokyo;
    country = Japan;
}

RReactDOM.render(
  <h1 id="heading" className="cool-text">
    Hello from {city.country} , {city.name}
  </h1>,
  document.getElementById("root")
);

```
**Result:** ![](https://i.imgur.com/sEUC7Py.png)


## Creating react components

React components are collection of react elements used to build UI

**Rule**

* Components must be capitalised

```
function Hello() {
  return (
    <div>
      <h1> Welcome to react! </h1>
      <p> Lets build something cool </p>
    </div>
  );
}
//Function in self closing parenthesis
ReactDOM.render(<Hello />, document.getElementById("root"));
```

**Result:**  ![](https://i.imgur.com/nEb4gae.png)

