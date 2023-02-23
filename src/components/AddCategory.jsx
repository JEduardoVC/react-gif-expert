import { useState } from "react"
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState("Demon Slayer")

    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        const value = inputValue.trim();
        if(value.length <= 1) return;

        onNewCategory(value);
        setinputValue("");
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" onChange={onInputChange}></input>
        </form>
    )
}