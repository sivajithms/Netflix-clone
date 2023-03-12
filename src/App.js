import React from 'react';
import { useState } from 'react';
import './App.css';



function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" onChange={(e) => setToDo(e.target.value)} placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos,{id:Date.now() , text: toDo, status:false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          
          toDos.map((value) => {
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e)=>{
                    console.log(e.target.checked);
                    setToDos(toDos.filter(obj=>{
                      if(value.id===obj.id){
                        obj.status=e.target.checked
                      }
                      return true
                    }))
                  }} type="checkbox" name="" id="" />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"  onClick={()=>{
                    setToDos(toDos.filter(obj=>{
                      return(value.id!==obj.id)                     
                      
                    }))
                  }}></i>
                </div>
              </div>
            )
          })
        }

        {
          toDos.map((obj)=>{
            if(obj.status){
              return(
                <div>
                  <br/>
                  <br/>
                  <br/>
                  <h1>Finished works</h1>
                  <h2>{obj.text}</h2>
                </div>
              )
            }
            return true
          })
        }
      </div>
    </div>
  );
}

export default App;