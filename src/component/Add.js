import React, { useState } from "react";

const Add = (props) => {

    const initialData={id:null,name:'',age:''}
            const[userdata,setUserData] =useState(initialData)

            const handleChange=(e)=>{
              const {name,value}=e.target
            setUserData({...userdata,[name]:value})

            }
  return (
    <div>
      <div>
        <h1 className="text-center"> Add form </h1>
        <form className=" m-auto border  border-2 p-3 mt-3" onSubmit={(e)=>{
            e.preventDefault();
            if(!userdata|| !userdata.name) return;
            props.add(userdata)
            setUserData(initialData)
        }}>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control h-10" name="name" value={userdata.name} onChange={(e)=>handleChange(e)}/>
          </div>
          <div class="mb-3">
            <label class="form-label">Age</label>
            <input type="number " class="form-control" name="age" value={userdata.age} onChange={(e)=>handleChange(e)} />
          </div>
          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
