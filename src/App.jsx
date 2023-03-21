import { useState, useEffect } from 'react'
import './App.css'

function App() {

const [data, setData] = useState(null);

useEffect(()=>{
  fetch("https://aerolineatec.sistemas19.com/api/vuelos").then((response)=>response.json()).then((data)=>setData(data));
},[]);

  return (
    
      <main>
        <div>
         <h1>Vuelos</h1> 
         <div>
          {data?.map((vuelo)=>(<h2 key={vuelo.id}>{vuelo.destino}</h2>))}
         </div>
      </div>
      </main>
 
  )
}

export default App
