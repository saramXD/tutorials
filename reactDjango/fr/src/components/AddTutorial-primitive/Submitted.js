import React from 'react'

function Submitted({setTutorial, setSubmitted, submitted}) {
    const newTutorial = () => {
    setTutorial({
        id: null,
        title: "",
        description: "",
        published: false,
  });
    setSubmitted(false);
  };
    
    return (
        <div>
            <h4>Successfully Submitted!!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
    )
}

export default Submitted
