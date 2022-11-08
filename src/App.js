import React, { useState } from "react";
import Table from './component/Table'
import Add from "./component/Add";
import Edit from './component/Edit'


const App = () => {
  const user = [
    {
      id:1,
      name: "Divya",
      age: "22",
    },
    {   id:2,
        name: "Nisha",
        age: "22",
      }, {
        id:3,
        name: "Kitty",
        age: "22",
      }, 
  ];
  
  const adddata=(data)=>{
    data.id=userData.length+1;
    setUserData([...userData,data])
  }

  const deleteData =(id)=>{
    setUserData(userData.filter((obj)=>obj.id!==id))
    setEditing(false)
  }
  
  const [userData,setUserData] =useState(user)



  const[editing,setEditing]=useState(false)

  const initialData={id:null,name:'',age:''}

  const [currentData,setCurrentData]=useState(initialData)

  const editrow=(data)=>{
    setEditing(true);
    currentData({id:data.id,name:data.name,age:data.age})
  }

  const updateUser=(id,updateValue)=>{
    setEditing(false)
    setUserData(userData.map((obj)=>(obj.id===id?updateValue:obj)))
  }

  return (
    <div className="container">
      
      <div className="row">
      <div className="col-md-4" >
        {editing?(<div>
          <Edit setEditing={setEditing}
                  currentData={currentData}
                  updateData={updateUser}/>
        </div>):( <div>
        <Add add={adddata}/></div>)
      }
        </div>
        <div className="col-md-8" >
         <Table data={userData} delete={deleteData} editrow={editrow}/>
        </div>
        
      </div>
    </div>
  );
};

export default App;
