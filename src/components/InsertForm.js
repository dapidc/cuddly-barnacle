import React, { useState, useCallback } from "react";

const InsertForm = ({ onInsert }) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = useCallback((event) => {
        event.preventDefault(); // Prevents the page from refreshing due to default HTML behavior
        if(typeof onInsert === "function" && inputValue) { // Check if onInsert is a valid function to avoid errors
            onInsert(inputValue);
        }
        setInputValue("");
    },[onInsert, inputValue])

    return (
        <form onSubmit={handleSubmit}>
            <input value={inputValue} onChange={(event) => {
                setInputValue(event.target.value);
            }} />
            <button type="submit">Register</button>
        </form>
    )

}

export default InsertForm;