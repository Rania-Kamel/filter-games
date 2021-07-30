import GameData from './data.json'
import './App.css';
import React from 'react'

function App() {

  const [details, setDetails] = React.useState(GameData.data);


  const handelSubmit = (Filter) => {
    console.log(Filter)
    let newData = details.filter(details => (details.Topic === Filter || details.Level === Filter || details.Group === Filter))
    console.log(newData)
    setDetails(newData)
   
    
  }


  return (
    <div>
      <h1>9ijakids Game List</h1>
      <form onSubmit={(e) =>{
        e.preventDefault()
        handelSubmit(e.target.elements.topic.value)
        e.target.elements.topic.value=""
      }}>
        <input type="search" name="topic" placeholder="topic or level or group"/>
     
     
        <input type="submit" value="Filter"/>
      </form>

      <div className="data">
      {details.map(({GameTitle , GameImage , GameDescription} , index)=>{
        return (
            
            <figure>
            <h3>{GameTitle}</h3>
            <img src={GameImage}/>
            <figcaption>{GameDescription}</figcaption>
            </figure>
          
        )
        
      })}
      </div>
      
     
    </div>
  );
}

export default App;
