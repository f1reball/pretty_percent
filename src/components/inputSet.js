import React from "react";
import '../App.css';
import Input from "./input";

function InputSet(props) {
    return(
        <div className='inputSet'>
            <h1>test</h1>
            <Input update={props.update} value={props.start} />
        </div>
    );
}

export default InputSet;