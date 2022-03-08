import React from "react";
import '../App.css';

function Input(props) {

    function handleChange(e){
        e.preventDefault();
        props.update(e.target.value);
    }

    return(
        <div>
            <input type="number" onChange={handleChange} value={props.value}></input>
        </div>
    );
}

export default Input;