import { useFetch } from './useFetch'
import './App.css'

function App() {

const {data, loading, error} = useFetch("https://aerolineatec.sistemas19.com/api/vuelos");

  return (
    
      <main>
        <div>
         <h1>Vuelos</h1> 
         <div>
          <ul>
            {error && <li>Error:{error}</li>}
            {loading&&<li>Loading...</li>}
            {data?.map((vuelo)=>( <li><h2 key={vuelo.id}>{vuelo.destino}</h2></li> ))}
          </ul>
         </div>
      </div>
      </main>
 
  )
}

export default App
