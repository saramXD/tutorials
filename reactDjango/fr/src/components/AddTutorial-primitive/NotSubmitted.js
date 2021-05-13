import React from 'react';
import Form from './Form';
import TutorialDataService from "../../services/TutorialService";

function notSubmitted({tutorial, setTutorial, setSubmitted}) {
    
   const handleInputChange = (e) => {
       const {name, value} = e.target;
       setTutorial({...tutorial, [name]:value})
   }

   const saveTutorial = () => {
        var data = {
            title: tutorial.title,
            description: tutorial.description,
        };

         TutorialDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
   }
    return (
        <div>
            <Form 
                id="title"
                value={tutorial.title}
                handle={handleInputChange}
                name="title"
            />
            <Form 
                id="description"
                value={tutorial.description}
                handle={handleInputChange}
                name="description"
            />
        <button onClick={saveTutorial} className="btn btn-success">
            Submit
        </button>
        </div>
    )
}

export default notSubmitted
