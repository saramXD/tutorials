import React from 'react'
import Label from './Label';
import { Link } from "react-router-dom";

function Detail({currentTutorial}) {
    return (
        <div className="mt-5">
            <h4>Selected Tutorial</h4>
            {currentTutorial?
            <div>
                <Label field="title" currentTutorial={currentTutorial}/>
                <Label field="description" currentTutorial={currentTutorial}/>
                <Label field="published" currentTutorial={currentTutorial}/>
            </div> :
                <p>Please Click the Tutorial</p>
            }
        </div>
    )
}

export default Detail
