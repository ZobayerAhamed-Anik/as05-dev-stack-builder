# Dev Stack Builder

Dev Stack Builder is a responsive web application built with React, Vite, and Tailwind CSS. It allows users to explore various software technologies, view details, search/filter through tools, and dynamically assemble their personal development stack in an interactive sidebar.


## Project Overview

* **Application Name**: Dev Stack Builder
* **Purpose**: Helps developers plan, manage, and curate their modern tech stack for future software projects.
* **Architecture**: Component-based React architecture using Vite for fast bundling, Tailwind CSS for modern utility styling, and custom UI components including responsive navigation, interactive tech cards, stack sidebar, and full footer.


## Technologies Used

* React.js (Vite)
* Tailwind CSS
* JavaScript (ES6+)
* HTML5 / CSS3
* React-Toastify
* JSON (Local Data Storage)


## Key Features

* **Tech Stack Builder**: Add or remove software technologies dynamically to/from a target stack list.
* **Duplicate Protection**: Prevents duplicate entries from being added to the selected stack.
* **Interactive UI & Feedback**: Integrated toast notifications (react-toastify) for real-time user action updates.
* **Conditional UI Elements**: Dynamic display for empty stack states, action counters, and loading indicators.
* **Responsive Layout**: Designed for mobile, tablet, and desktop viewports with a complete structured header, hero banner, tech grid, sidebar, and multisection footer.


## Questions and Answers

1. What is JSX, and why is it used in React?
Answer: JSX lets us write HTML code directly inside JavaScript. React uses it because it makes writing and understanding UI layout much easier.

2. What is the difference between props and state?
Answer: Props are read-only data passed down from a parent component (like a gift you receive). State is private data managed inside a component that can change over time (like your current age).

3. What does the useState hook do, and where did you use it in this project?
Answer: useState gives a component memory so it can store and update data on the screen. In this project, it tracks the loaded tech items, the user's selected stack list, and the loading state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: useEffect runs code after a component loads on the screen. It was used to fetch data from technologies.json automatically right after the page loads.

5. Why does every item in a .map() list need a unique key prop?
Answer: Unique keys help React track which items changed, were added, or got removed so it can update only those items instead of re-rendering the whole list.

6. What is conditional rendering? Show one place you used it.
Answer: Conditional rendering means showing different UI elements based on true or false conditions. For example, showing "Your stack is empty." when no items are selected, and showing the stack list when items exist.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer: Parents send data down to children using props. Children send data back up by calling a function that the parent passed to them.