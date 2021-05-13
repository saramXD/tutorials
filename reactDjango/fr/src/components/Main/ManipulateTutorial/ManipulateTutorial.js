import React, { useState } from "react";
import Form from './Form';
import TutorialDataService from "../../../services/TutorialService";

function ManipulateTutorial({currentTutorial, retrieveTutorials}) {
  const [tutorial, setTutorial] = useState({
    id: null,
    title: "",
    description: "",
    published: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
       const {name, value} = e.target;
       setTutorial({...tutorial, [name]:value})
   }
   //Add
   const addTutorial = () => {
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
        console.log(response.data);
        resetTutorial();
        retrieveTutorials();
          })
      .catch(e => {
        console.log(e);
      });
   }

   const resetTutorial = () => {
        setTutorial({
          id: null,
          title: "",
          description: "",
          published: false
        });
   }
   //EDIT rerender issue 고칠것
   const editTutorial = () => {
        var data = {
            title: tutorial.title,
            description: tutorial.description,
        };

         TutorialDataService.update(currentTutorial.id , data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        console.log(response.data);
        resetTutorial();
        retrieveTutorials();
      })
      .catch(e => {
        console.log(e);
      });
   }
//DELETE 고칠것
    const deleteTutorial = () => {
         TutorialDataService.remove(currentTutorial.id )
      .then(response => {   
        console.log(response.data);
        retrieveTutorials();
      })
      .catch(e => {
        console.log(e);
      });
   }
  return (
    <div className="submit-form mt-5">
      <h4>Add / Edit / Delete Tutorial</h4>
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

            <button onClick={addTutorial} className="btn btn-success mr-3 mb-5">
                Submit
            </button>
            <button onClick={editTutorial} className="btn btn-warning mr-3 mb-5">
                Edit
            </button>
            <button onClick={deleteTutorial} className="btn btn-danger mr-3 mb-5">
                Delete
            </button>
        </div>
    </div>
  );
}

export default ManipulateTutorial;
