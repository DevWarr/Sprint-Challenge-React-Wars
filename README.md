# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Functional Components and Class Components. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

  - React JS is a Javascript library created by Facebook to allow web developers to work with reactive components. The idea behind react is: As we scroll through a web page, sometimes a lot of data we see changes very quickly. Normal HTML and CSS cannot handle these changes. Javascript can, and React introduces new syntax that expands the ability of JS to make it easier for developers to code out how they want their webpage to react with different data.

  - For example: This Sprint Challenge asks us to create a _single_ webpage that can display multiple pages of data. Using HTML and CSS alone, this would be impossible.(as said above) Using Javascript, we could `document.querySelector()` and rewrite each element, or `document.createElement()` and write new HTML from scratch. But we would have to do so for each new piece of data. React is our way of simplifying that Javascript process. By mixing HTML and JS to create what we call JSX (The 'X' makes it _edgy_), we can create and modify HTML elements in a way that makes sense to us: normal HTML formatting. None of that `document.querySelector()` nonesense over and over again. Now we have React!

- [x] What does it mean to _think_ in react?

  - Thinking in React requires some extra foresight than typical HTML typing. When you look at or envision a webpage, you need to conceptualize everything as components. There's a full `<div>` container that houses everything, and then several smaller components that hold each piece of data. Each component gets its own JS file, so we need to plan ahead with the different components we want to use.
  - Example: For this page, we knew that we had one page to display data. As I was thinking about the page, I went deeper to think about what components I might need: A components for the entire list, a component for each character, and even a component to display each vehicle. Thinking in React is about thinking in terms of small Components that piece together to create the big picture.

- [x] Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

  - Functional Components:
    - Utilize props
    - DON'T use `render() {}`
    - simply take in props, runs other functions if declared and called, and returns JSX
  - Class components:
    - Utilize state to allow render updates when the state is updated
    - DOES use `render() {}`
    - Can take in props, but they must be listed within the constructor or this.state due to class syntax (variables outside the constructor or methods give an error when coding inside a class)

- [x] Describe state.

  - No, not Texas or California. In this case, we're talking about a _state of being._ A component's state houses several properties that can be modified when events occur or data changes. When we use `this.setState({})` to change our state, the component re-renders anything that uses state properties. This re-rendering process allows us to make changes and immediately see results on our webpage.

- [x] Describe props.

  - Props are properties that a component inherits from a parent. 
  - As we pass props _into_ a Component, we write them as component attributes. As we recieve and use props in a component, we use dot notation to access each specific property.
  - Passing props: `<Component text="flyAway" />`
  - Accessing props: `const Component = () => <p>{props.text}</p>`
  - This allows us to have variable properties for our components, instead of hard-coded data. If our property values change, then each component can update with the new value without having to edit each component.

## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add PM as collaborator on Github.
- [x] Clone your OWN version of Repo (Not Lambda's by mistake!)
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Change directories into `./starwars` (`cd starwars`) and run `yarn install` to retrieve all needed dependencies.
- [x] Once you have installed the _node_modules_, run `yarn start or` to get your server up and running.
- [x] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [x] Implement the project on this Branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by  merging the branch back into master.

Please note:

- In `App.js`'s `componentDidMount()` method we call the public Star Wars API, which stores the result in the component state.
- Here's an excerpt of that logic:

```js
componentDidMount() {
  this.getCharacters('https://swapi.co/api/people');
}

getCharacters = URL => {
  fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ starwarsChars: data.results });
    })
    .catch(err => {
      throw new Error(err);
    });
};
```

- At a high level, this code is a common way to automatically load data from a remote server into a component.
- View your `App` component's `state` by opening the Chrome `React Dev Tools` to peek at the data set. At this point you will know what to do from here.

Your data set will look like this:

![Star Wars state data](starwars_data.png)


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [x] A list of Star Wars Characters rendered to the screen.
- [x] You must have at least one list element for each star wars character in the data set.
- [x] The list elements must all be minimally styled. (Don't rely on browser default styles.)

Required best practices:

- [x] Consistent naming. Examples: variables, functions, classes, and files.
- [x] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [x] Consistent quotation usage.
- [x] Spell-check.
- [x] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems

- [x] Build a pagination system that will allow you to load the next page of data

- Take note on the data that's coming back from the server call in our `getCharacters()`.
- console.log() the data coming back from the server.
- Notice that there are `next` `previous` fields that give you a URL.
- You have a function that will get chars called `getCharacters` you'll want to just call this function and supply it with the proper fields. You'll need to set this up on state to do this.

```js
 .then(data => {
    console.log(data); <-- Log data here to find the fields you will need.
    this.setState({ starwarsChars: data.results });
  })
```

- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.

- Be mindful of the `fetch API` that is now built into most modern browsers [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
- Your data coming back from Dogs should be formatted in JSON format.
