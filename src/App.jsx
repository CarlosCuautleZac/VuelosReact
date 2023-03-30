import { useFetch } from './useFetch'
import './App.css'

function App() {

const {data, loading, error} = useFetch("https://aerolineatec.sistemas19.com/api/vuelos");

  return (
   
    
    <div class="container">
    <h2 className='text-center pb-2 mb-2'>Departures</h2>
    <div class="table-responsive">
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>Flight No.</th>
                    <th>Destination</th>
                    <th>Time</th>
                    <th>Gate</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody> 
                    {error && <li>Error:{error}</li>}
                    {loading&&<li>Loading...</li>}
                    {data?.map((vuelo)=>( 
                    <tr key={vuelo.id}>
                        <td data-label="Flight No.">{vuelo.numerovuelo}</td>
                       <td data-label="Destination" >{vuelo.destino}</td>
                       <td data-label="Time" >{new Date(vuelo.fecha).toLocaleString('es-ES', 
                       {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</td>
                      <td data-label="Gate">{vuelo.puerta}</td>
                      <td data-label="Status" class={vuelo.estado === 'Programado' ? 'green' : vuelo.estado === 'Cancelado' ? 'red' : ''}>{vuelo.estado}</td>
                       </tr> ))}

            </tbody>
        </table>
    </div>
</div>

  )
}

export default App
