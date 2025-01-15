import React, { useRef } from "react";

const AskName = ({ onNameSubmit }) => {
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        const enteredName = inputRef.current.value; // Hämta värdet från input
        onNameSubmit(enteredName); // Skicka värdet till Greeting-komponenten
    };

    const resetButton = () => {
        onNameSubmit(inputRef.value = "");
    }


    return (
        <>
            <input ref={inputRef} type="text" placeholder="Enter your name" />
            <button onClick={handleButtonClick}>Enter</button>
            <button onClick={resetButton}>Reset</button>
        </>
    );
};

export default AskName; 