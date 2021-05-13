import React from 'react'

function Form({id, value, handle, name}) {
    return (
        <div className="form-group">
            {/* label htmlFor="title", input id="title" => connected */}
            <label htmlFor={id}>{name}</label>
            <input 
                type="text"
                className="form-control"
                id={id}
                // required:  no input => 경고창
                required
                value={value}
                onChange = {handle}
                name={name}
            />
        </div>
    )
}

export default Form
