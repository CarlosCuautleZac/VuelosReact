import React, { useState } from "react";
import "./Modal.css";
import Swal from 'sweetalert2'

// import { PostModule } from "../scripts/PostModule";

export function Modal() {
  const [modal, setModal] = useState(false);
  const [succes,setSucces] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();

    const url = "https://aerolineatec.sistemas19.com/api/vuelos";
    const botonEnviar = document.querySelector("#enviar");
    botonEnviar.addEventListener("click", (event) => {
      //console.log('Le diste clic');
      var data = new FormData(document.querySelector("#formVuelo"));
      var jsonData = {};
      data.forEach((value, key) => (jsonData[key] = value));
      var json = JSON.stringify(jsonData);
      console.log(json);
      fetch(url, {
        body: json,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(async (response) =>{
          const status = await response;

           console.log(response)
        if(status.ok)
          {          
            setModal(!modal);
            Swal.fire({
              icon: 'success',
              title: 'Exito',
              text: "¡Se ha enviado el vuelo con exito!",
            })
          }
            else{
              const text = await response.text();
              throw Error(text);      
            }        
          }
        )       
        .catch(async (error) => {console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })});
    });
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="color">Nuevo Vuelo</h2>
            <form  id="formVuelo" className="form-vuelo">
              <label>Destino</label>
              <input type="text" name="destino" />
              <br />
              <label>Num. vuelo</label>
              <input type="text" name="numerovuelo" />
              <br />
              <label>Puerta</label>
              <input type="text" name="puerta" />
              <br />
              <label>Fecha</label>
              <input type="datetime-local" name="fecha" />
              <br />
              <input type="hidden" value="Programado" name="estado" />
              {/* <input type="button" id="enviar" onClick={toggleModal} value="Enviar" /> */}
              <button
                type="submit"
                id="enviar"
                onClick={handleSumbit}
                value="Enviar"
              >
                Enviar
              </button>
            </form>

            {/* <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}





export default Modal;
