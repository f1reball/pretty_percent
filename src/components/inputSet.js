import React from "react";
import '../App.css';
import Input from "./input";

function InputSet(props) {
    return(
        <div className='inputSet'>
            <h1>{props.name}</h1>
            <Input update={props.update} value={props.value} />
        </div>
    );
}

export default InputSet;