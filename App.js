import './App.css';
import React, { useState } from 'react';
import ToDOlist from './ToDoList';



const App = () => {
  const [inputList, setinputList] = useState(" ");

  const [Items, setItems] = useState([]);

  const itemEvent = (e) => {
    setinputList(e.target.value);
  }
    const addItems = () => { 
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setinputList("")
    };
  
  console.log(Items);
  
    const deleteItem=(id)=>{

        console.log("deleted")
        setItems((oldItems)=>{
           return oldItems.filter((arrElem,i)=>{
            return i!==id;
          })
        })
    };
  
  return (
    <>
      <div className="mainDiv">
        <div className='centerDiv'>
          <br />
          <h1>
            ToDo List
          </h1>
          <br />
          <input type='text' className='inputlist' placeholder='Add a Items' value={inputList} onChange={itemEvent} />
          <button className='Add' onClick={addItems}>Add Items</button>

          <ol>
            {/* <li>{inputList}</li> */}
            { Items.map((itemval , i) => {
                // return <li> {itemval} </li>;
                 return <ToDOlist 
                 key={i} 
                 id={i} 
                 text={itemval} 
                 onSelect={deleteItem}/>
              })
              }
          </ol>
        </div>


      </div>
    </>
  );
}
 

export default App;
