import React from 'react'

function Label({field, currentTutorial}) {
    return (
        <div>
            <label>
                <strong>{field}:</strong>
            </label>
            {"  "}{typeof currentTutorial[field] === "boolean"? (currentTutorial[field]? "true" : "false"): currentTutorial[field]}
        </div>
    )
}

export default Label
