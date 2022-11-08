import React, { useState,useEffect } from "react";

const Edit=(props)=>{

   const[user,setUser] =useState(props.currentData)

   useEffect(()=>{
    setUser(props.currentData)
},[props])

   const handleChange=(e)=>{
    const {name,value}=e.target
  setUser({...user,[name]:value})

  }
    return(
        <div>
        <h1 className="text-center"> Edit </h1>
        <form className=" m-auto border  border-2 p-3 mt-3" onSubmit={(e)=>{
            e.preventDefault();
            if(!user|| !user.name) return;
            props.updateuser(user.id, user)
        }}>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control h-10" name="name" value={user.name} onChange={(e)=>handleChange(e)}/>
          </div>
          <div class="mb-3">
            <label class="form-label">Age</label>
            <input type="number " class="form-control" name="age" value={user.age} onChange={(e)=>handleChange(e)} />
          </div>
          <button type="submit" class="btn btn-primary">
            Update
          </button>
          <button type="submit" class="btn btn-primary" onClick={()=>{
            props.setEditing(false)
          }}>
            Cancle
          </button>
          
        </form>
        </div>
    )
}

export default Edit