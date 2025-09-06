import axios from 'axios'
import React from 'react'
export const revalidade= 60;
const Todos = async () => {
    const slowres=await axios.get("https://procodrr.vercel.app/?sleep=5000")
    const slowData=slowres.data;
    const response= await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data= await response.data;
    console.log(data);
  return (
   <>
   <h1 className='text-7xl text-red-700'>Todos</h1>
   {
    data.map(({id,title,completed})=>(
        <div className='text-4xl ml-7' key={id}>
            <input type='checkbox' checked ={completed} readOnly></input>
            <p className='text-2xl'>{title}</p>
           
        </div>
    ))
   }
   </>
  )
}

export default Todos