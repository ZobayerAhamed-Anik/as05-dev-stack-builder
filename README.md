# Dev Stack Builder

Dev Stack Builder is a responsive web application built with React, Vite, and Tailwind CSS. It allows users to explore various software technologies, view details, search/filter through tools, and dynamically assemble their personal development stack in an interactive sidebar.

---

## Project Overview

* **Application Name**: Dev Stack Builder
* **Purpose**: Helps developers plan, manage, and curate their modern tech stack for future software projects.
* **Architecture**: Component-based React architecture using Vite for fast bundling, Tailwind CSS for modern utility styling, and custom UI components including responsive navigation, interactive tech cards, stack sidebar, and full footer.

---

## Technologies Used

* React.js (Vite)
* Tailwind CSS
* JavaScript (ES6+)
* HTML5 / CSS3
* React-Toastify
* JSON (Local Data Storage)

---

## Key Features

* **Tech Stack Builder**: Add or remove software technologies dynamically to/from a target stack list.
* **Duplicate Protection**: Prevents duplicate entries from being added to the selected stack.
* **Interactive UI & Feedback**: Integrated toast notifications (`react-toastify`) for real-time user action updates.
* **Conditional UI Elements**: Dynamic display for empty stack states, action counters, and loading indicators.
* **Responsive Layout**: Designed for mobile, tablet, and desktop viewports with a complete structured header, hero banner, tech grid, sidebar, and multisection footer.

---

## Getting Started

1. **Clone the repository**
```bash
git clone <your-repository-url>
cd dev-stack-builder

```


2. **Install dependencies**
```bash
npm install

```


3. **Run local development server**
```bash
npm run dev

```


4. **Build for production**
```bash
npm run build

```



---

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like elements directly inside JavaScript code. React uses JSX because it makes describing component structure intuitive, readable, and easy to maintain compared to standard JavaScript function calls.

### 2. What is the difference between props and state?

Props (short for properties) are read-only inputs passed from a parent component down to a child component to supply data. State represents internal, dynamic data managed locally within a component that changes over time based on user interactions.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook declares component state variables and provides an updater function to re-render the UI when data updates. In this project, `useState` manages the list of fetched technologies, selected items in the user's stack sidebar, and application loading states.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook performs side effects in functional components, such as data fetching or subscriptions. It was used here to execute an asynchronous `fetch()` request that loads the local `technologies.json` file into state after the initial component renders.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` prop provides a stable identity for each list item. React relies on this key during DOM diffing to efficiently identify which items have changed, added, or removed without re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering displays specific elements or components based on variable state conditions. In this project, conditional rendering displays the message `"Your stack is empty."` when the selected stack length is zero, and renders the stack list elements when items exist.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data down to a child by defining custom attributes (props) on the child tag. A child component sends data back to the parent by triggering a callback function that was passed down to it through those same props.