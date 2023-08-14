# Small tic-tac-toe with no style
this one is straight up from the React docs and will be my first contact with the framework
- link https://react.dev/learn/tutorial-tic-tac-toe

## Notes
- Setup
Clicking on the package.json of the tutorial I saw the following dependencies
```json
"dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^5.0.0"
},
``` 
So i believe this the default dependencies that compose React Framework and will install each of then with <npm i dependency>

- Index.js file
The tutorial suggest some imports but doesnt explain then so I did a bit of research because we hate to just copy and paste like some alieneted 20 century industrial worker

* StrictMode 
From my superficial reading this lib is like a wrapper component (and this is true just by seeing how the code is) that check for potential problems during development, seems like the "strict" property of a typescript config file but for react code

* createRoot
This one seems like a constructor of a class from the framework that create this "root" object (and can accept a existing HTML element to do on it) that has the render method who display the components passed on the args as content inside the browser DOM

- The build process
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
So we learned that React has some opinions on how the folder structure of the project should be. After rearrenging the stuff it claims to be on /src into /src everything worked fine