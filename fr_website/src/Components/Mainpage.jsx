import React,{useState} from 'react';
import Mealcards from './Mealcards';

const Mainpage = () => {
    const [data,setData]  =useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleInput =(event) =>{
        setSearch(event.target.value);
    }

    const myFun = async () =>{
        if(search === ""){
            setMsg("Please Enter Something")
        }else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
        console.log(jsonData.meals);
        setData(jsonData.meals);
        setMsg("");
    }
    }


  return (
   <>
  
   <div className="bg-lime-300 m-8 justify-center h-70 rounded-md">
   <h1 className='text-center text-3xl mt-4 p-8'>FOOD RECIPE APP</h1>
   <p className='text-center text-xl'>Find your fav dish recipe here....</p>
    <div className='flex justify-center gap-2 mt-5 p-6'>
        <input type='text' placeholder='Enter Name' onChange={handleInput} className='w-96 p-2 text-2xl bg-[#e7e7e7] rounded-md'/>
        <button onClick={myFun} className='w-24 bg-lime-800 text-white text-2xl rounded-md cursor-pointer'>Search</button>
        
    </div>
    <h4 className='text-xl text-center'>{msg}</h4>
   </div>
   <div>
    <Mealcards detail={data}/>
   </div>
   </>
  )
}

export default Mainpage;
