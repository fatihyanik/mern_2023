export default [
    {
        id: 1,
        question: "If you want to import just the Component from the React library, what syntax do you use?",
        options: [
            'import React.Component from "react"',
            'import [ Component ] from "react"',
            'import Component from "react"',
            'import { Component } from "react"'
        ]
    },
    {
        id: 2,
        question: "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
        options: [
            'Wrap it in the React.memo higher-order component.',
            'Implement the useReducer Hook.',
            'Implement the useMemo Hook.',
            "Implement the shouldComponentUpdate lifecycle method."
        ]
    },
    {
        id: 3,
        question: "If you see the following import in a file, what is being used for state management in the component? import React, {useState} from 'react'; ",
        options: [
            'React Hooks',
            'stateful components',
            'math',
            'class components',
        ]
    },
    {
        id: 4,
        question: "How do you handle passing through the component tree without having to pass props down manually at every level?",
        options: [
            'React Send',
            'React Pinpoint',
            'React Context',
            'React Router'
        ]
    },
    {
        id: 5,
        question: "What is the name of the tool used to take JSX and turn it into createElement calls?",
        options: [
            'JSX Editor',
            'Babel',
            'ReactDOM',
            'Browser Buddy'
        ]
    },
    {
        id: 6,
        question: "Why might you use useReducer over useState in a React component?",
        options: [
            'when you want to replace Redux',
            'when you need to manage more complex state in an app',
            'when you want to improve performance',
            'when you want to break your production app'
        ]
    },
    {
        id: 7,
        question: "Which of these terms commonly describe React applications?",
        options: [
            'declarative',
            'integrated',
            'closed',
            'imperative'
        ]
    },
    {
        id: 8,
        question: "A representation of a user interface that is kept in memory and is synced with the 'real' DOM is called what?",
        options: [
            'virtual DOM',
            'DOM',
            'virtual elements',
            'shadow DOM'
        ]
    },
    {
        id: 9,
        question: "In which lifecycle method do you make requests for data in a class component?",
        options: [
            'constructor',
            'componentDidMount',
            'componentWillReceiveProps',
            'componentWillMount'
        ]
    },
    {
        id: 10,
        question: "Which function is used to update state variables in a React class component?",
        options: [
            'replaceState',
            'refreshState',
            'updateState',
            'setState'
        ]
    },

];

export const answers = [3, 0, 0, 2, 1, 1, 0, 0, 1,3];