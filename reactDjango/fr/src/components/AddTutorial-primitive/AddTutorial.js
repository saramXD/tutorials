import React, { useState } from "react";
import TutorialDataService from "../../services/TutorialService";
import Submitted from "./Submitted";
import NotSubmitted from "./NotSubmitted";

function AddTutorial() {
  const [tutorial, setTutorial] = useState({
    id: null,
    title: "",
    description: "",
    published: false,
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="submit-form">
      {submitted ? 
      <Submitted setTutorial={setTutorial} setSubmitted={setSubmitted} /> : 
      <NotSubmitted  tutorial={tutorial} setTutorial={setTutorial} setSubmitted={setSubmitted} />
      }
    </div>
  );
}

export default AddTutorial;
