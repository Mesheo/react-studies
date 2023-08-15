# Small tic-tac-toe with no style
this one is straight up from the React docs and will be my first contact with the framework
- link https://react.dev/learn/tutorial-tic-tac-toe

## Notes
#### Setup
Clicking on the package.json of the tutorial I saw the following dependencies
```json
"dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^5.0.0"
},
``` 
So i believe this the default dependencies that compose React Framework and will install each of then with <npm i dependency>

#### Index.js file
The tutorial suggest some imports but doesnt explain then so I did a bit of research because we hate to just copy and paste like some alieneted 20 century industrial worker

#### StrictMode 
From my superficial reading this lib is like a wrapper component (and this is true just by seeing how the code is) that check for potential problems during development, seems like the "strict" property of a typescript config file but for react code

#### createRoot
  This one seems like a constructor of a class from the framework that create this "root" object (and can accept a existing HTML element to do on it) that has the render method who display the components passed on the args as content inside the browser DOM

#### The build process
I tryed to just click on my html file to open browser and for my surprise it showed up nothing. I learned that without a dev server like create-react-app or a bundler that convert the code into something else like webpack the React code wont be executed.
And seems like this is the standardd for modern frontend frameworks so mybad.

I already installed Create React App so i just added a script on package.json to execute one of the react-scripts, this package provides a set of scripts for common tasks like starting a development server, building the app for production, and running tests.

Running the script I unfortunately recieved
```bash
➜  tic-tac-toe git:(main) ✗ npm run start

> start
> react-scripts start

Could not find a required file.
  Name: index.js
  Searched in: /home/michel/PROJETOS/react-studies/tic-tac-toe/src
```
So we learned that React has some opinions on how the folder structure of the project should be. After rearrenging the stuff it claims to be on /src into /src everything worked fine and this was the result after this first compilation
![image](https://github.com/Mesheo/react-studies/assets/71408872/2f604fe0-9969-4689-abc9-2647deb9c33a)


## Ok now can we make this playable?
To a tic tac toe game be considered a game we must be able to intereact with these buttons so lets see how to do that

#### Props
We can set arguments inside brackets on the components function that i think is being used as a constructor or something, the sintaxe is like this
```js
function Square({ value }) {
    return <button className="square">{value}</button>;
}
```
This allows to pass data from the property of the "html element" version of the component to his rendered state like this
```js
 <div className="board-row">
                <Square value="1"/>
                <Square value="2"/>
                <Square value="3"/>
</div>
```
Very nice and smooth way

#### Making something when button is clicked
We can make a function that will be executed after a click inside the component, and then, passed as an javascript item on the `onClick=` property of the html element returned, like this
```js
function Square({ value }) {
    function handleClick() {
        console.log('clicked!');
      }
    return <button className="square" onClick={handleClick}>{value}</button>;
}
```
#### States
To our componnet remember that was clicked we need to alter his "state"
So we import the useState from react that will be a function that returns 2 items we destruct as `[item, setItem]`, how excatly the setItem function works is still a bit of mistery to me that will be revelead when i try to make a tictactoe with only HTML, CSS and VanillaJS

#### How to declare a winner?
We can already mutate the value of the square in turns, and using a early return to check if the square is empty we alread block rewriting the value of the square. But how the board (that have the array of squares and its values) will know when someone is a winner?


