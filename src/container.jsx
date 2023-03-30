import { useState, useEffect } from 'react'
import './App.css'

export function Container({data, loading, error}){

return(
<div className="container" >
    <h2 className='text-center pb-2 mb-2'>Departures</h2>
    <div className="table-responsive">
        <table className="table table-dark table-hover">
            <thead >
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
                      <td data-label="Status" className={vuelo.estado === 'Cancelado' ? 'cancelled':''}>{vuelo.estado}</td>
                       </tr> ))}

            </tbody>
        </table>
    </div>
</div>)

}

export default Container;