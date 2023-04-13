import React, { useState } from "react";
import "./Modal.css";

export function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
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
            <h2 className="color">Hello Modal</h2>
            <form id="formVuelo">
<label>Destino</label>
<input type="text" name="destino"/><br/>
<label>Num. vuelo</label>
<input type="text" name="numerovuelo"/><br/>
<label>Puerta</label>
<input type="text" name="puerta"/><br/>
<label>Fecha</label>
<input type="datetime-local" name="fecha"/><br/>
<input type="hidden" value="Programado" name="estado"/>
<input type="button" id="enviar" value="Enviar"/>
</form>    

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}     
    </>
  );
}

export default Modal;