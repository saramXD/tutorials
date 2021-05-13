import React, {useEffect, useState} from "react";
import TutorialDataService from '../../services/TutorialService';
import SearchBar from './SearchBar/SearchBar';
import List from './List';
import Detail from './Detail/Detail';
import ManipulateTutorial from './ManipulateTutorial/ManipulateTutorial';

function TutorialsList() {
     const [tutorials, setTutorials] = useState([]);
    // mount될 때마다 useEffect안에 function call
    useEffect(() => {
        retrieveTutorials();
    }, []);
    
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    };

    const removeAllTutorials = () => {
    TutorialDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

    const setActiveTutorial = (tutorial, index) => {
        setCurrentTutorial(tutorial);
        setCurrentIndex(index);
  };

 


    return (
  <div>
        <SearchBar />
        <List
            tutorials={tutorials}
            currentIndex={currentIndex}
            setActiveTutorial={setActiveTutorial}
            removeAllTutorials={removeAllTutorials}
        />
        <Detail currentTutorial={currentTutorial} />
        <ManipulateTutorial currentTutorial={currentTutorial} retrieveTutorials={retrieveTutorials}/>
  </div>
  );
}

export default TutorialsList;
