# Virtual CV
[Work in progress]

## Table od content

* [Demo](#demo)
* [Description](#description)
* [Preview](#preview)
* [Technologies](#technologies)
* [Available scripts](#available-scripts)

## Demo

You can find a demo [here](https://paulgrym.github.io/personal-homepage-react/).

## Description

Single page application made in React. It includes lists of my projects, skills and things I would like to learn next. 

The repositories are fetched from the GitHub API and they are sorted by create date. The website has a theme switcher which changes site's color theme from light to dark. The theme color is saved in a local storage.

At the top of the page there is a "Hire me" button, clicking it will scroll to the bottom of the page, where I have listed all the communication channels through which you can contact me.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Preview
<img src="./Preview.gif" width="700px">

## Technologies

- HTML
- JavaScript (ES6+)
- CSS (Flex, Grid, media queries)
- React
- Create-react-app
- Styled Components
- ThemeProvider
- React-scroll
- Redux / Toolkit
- Redux-Saga
- Promises, async/await
- Local Storage

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
