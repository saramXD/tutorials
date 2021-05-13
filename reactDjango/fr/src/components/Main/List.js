import React, {useEffect} from 'react'

function List({tutorials, currentIndex, setActiveTutorial, removeAllTutorials}) {
   

    return (
        <div>
            <h4>Tutorials List</h4>

            <ul className="list-group">
                {tutorials && 
                tutorials.map((tutorial, index) => (
                    <li className={"list-group-item " +  (index === currentIndex?"active": null)}
                        // 왜 콜백인가?
                        onClick={() => setActiveTutorial(tutorial, index)}
                        key={index}
                    >
                        {tutorial.title}
                    </li>
                ))
                }
            </ul>

            <button
                className="m-3 btn btn-sm btn-danger"
                onClick={removeAllTutorials}
            >
                Remove All
            </button>
        </div>
    )
}

export default List
