import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const [userData, setUserData] = useState([]);
  const [index, setindex] = useState(1)

  const btnclicked = async() => {
   const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   setUserData(response.data)
    
  }
useEffect(() => {
  btnclicked()
  }, [index])


  let printUSerData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loding...</h3>
  if(userData.length > 0){
    printUSerData = userData.map(function(elem,idx){

      return <div key={idx}>
        <a href={elem.url} target='_black'>
          <div className=' h-60 w-75 overflow-hidden bg-white rounded-xl'>
        <img  className = ' h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold'>{elem.author}</h2>
        </a>
      </div>
      
    })}
    return (
    
      <div className= 'bg-black h-screen overflow-auto text-white p-6 '>
        <h2 className='fixed  bg-amber-950 h-10 w-10 text center text-4xl'>{index}</h2>
        <div className=' flex flex-wrap gap-4'>
        {printUSerData}
      </div>
      <div className=' flex justify-center items-center gap-4'>
        <button onClick={function(){
          if(index > 1){
            setindex(index - 1)
            setUserData([])
          }
      
        }} className=' bg-amber-300 text-black font-bold py-2 px-8 rounded active:scale-95 cursor-pointer'>prev</button>
        
        <button  onClick={function(){
          setUserData([])
        setindex(index+1)
        }} className=' bg-amber-300 text-black font-bold py-2 px-8 rounded active:scale-95 cursor-pointer'>next</button>
      </div>
      

      </div>
  
  )
}

export default App
