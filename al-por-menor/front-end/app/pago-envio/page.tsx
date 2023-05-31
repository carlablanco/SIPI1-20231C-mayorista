import React from 'react';
import "./stylesPE.css";

export default function PagoEnvio() {
  return (
        <div className='payment-container'>
            <div className="credit-card-info--form">
                <div className="input_container">
                <h2>Informacion de compra</h2>
                    <label htmlFor="cardholder_name" className="input_label">Nombre completo que figura en la tarjeta</label>
                    <input id="cardholder_name" className="input_field" type="text" name="cardholder_name" title="Input title" placeholder="Nombre del titular" />
                </div>
                <div className="input_container">
                    <label htmlFor="card_number" className="input_label">Numero de tarjeta</label>
                    <input id="card_number" className="input_field" type="number" name="card_number" title="Input title" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="input_container">
                    <label htmlFor="expiry_date" className="input_label">Fecha de vencimiento / CVV</label>
                    <div className="split">
                    <input id="expiry_date" className="input_field" type="text" name="expiry_date" title="Expiry Date" placeholder="01/23" />
                    <input id="cvv" className="input_field" type="number" name="cvv" title="CVV" placeholder="CVV" />
                    </div>
                </div>

            </div>
            <div>
            <h2>Informacion de envio</h2>
                <form className="form">
            
                    <div className="flex nya">
                        <label className='nameEnvio'>
                            <input required placeholder ="Provincia" type="text" className="input"/>
                        </label>

                        <label className='lastEnvio'>
                            <input required placeholder="Localidad" type="text" className="input"/>
                        </label>
                    </div>  
                      
                    <label>
                        <input required type="text" placeholder="Calle" className="input"/>
                    </label>
                    <div className='flex nya'>
                        <label>
                            <input required type="text" placeholder="Numero" className="input"/>
                        </label>
                        <label>
                            <input required type="text" placeholder="CP" className="input"/>
                        </label>
                        <label>
                            <input type="text" placeholder="Piso/Depto" className="input"/>
                        </label>

                    </div>
                        
                    <label>
                        <input required type="tel" placeholder="Numero de celular" className="input"/>
                    </label>
                    <label>
                        <textarea required placeholder="Mensaje adicional" className="input01"></textarea>
                    </label>
        
                    <button className="purchase--btn">Suscribirse</button>
                </form>
            </div>
        </div>

  );
}
