'use client'
import React, { useState } from 'react';
import "./stylesPE.css";
import Link from 'next/link';
import swal from 'sweetalert';
import { userAddresses, userPaymentMethods } from '../../mock/mockdata';

export default function PagoEnvio() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');
    const [selectedAddressData, setSelectedAddressData] = useState(null);
    const [selectedPaymentMethodData, setSelectedPaymentMethodData] = useState(null);

    function handleAlert() {
        swal('Gracias por tu compra! ❤', 'Te estaremos enviando un correo con la confirmación.', 'success')
    }

    const userLoggedInId = 1; // Replace with the ID of the logged-in user

    const filteredAddresses = userAddresses.filter(address => address.userId === userLoggedInId);
    const filteredPaymentMethods = userPaymentMethods.filter(paymentMethod => paymentMethod.userId === userLoggedInId);

    const handleAddressSelection = (addressAlias) => {
        const selectedAddress = userAddresses.find(address => address.addressAlias === addressAlias);
        setSelectedAddressData(selectedAddress);
        setSelectedAddress(addressAlias);
    };

    const handlePaymentMethodSelection = (cardAlias) => {
        const selectedPaymentMethod = userPaymentMethods.find(paymentMethod => paymentMethod.cardAlias === cardAlias);
        setSelectedPaymentMethodData(selectedPaymentMethod);
        setSelectedPaymentMethod(cardAlias);
    };

    return (
        <div className='payment-container'>
            <div>
                <h2>Informacion de envío</h2>
                <form className="form">
                    <div className="flex nya">
                        <div className="input_container">
                            <label className='nameEnvio'>
                                <select
                                    required
                                    value={selectedAddress}
                                    onChange={(e) => handleAddressSelection(e.target.value)}
                                    className="input"
                                >
                                    <option value="">Seleccione una dirección</option>
                                    {filteredAddresses.map(address => (
                                        <option key={address.addressAlias} value={address.addressAlias}>{address.addressAlias}</option>
                                    ))}
                                </select>
                            </label>
                            {selectedAddressData && (
                                <div className="pretty-text">
                                    <p>Provincia: {selectedAddressData.province}</p>
                                    <p>Localidad: {selectedAddressData.locality}</p>
                                    <p>Calle: {selectedAddressData.street}</p>
                                    <p>Número: {selectedAddressData.number}</p>
                                    <p>Código Postal: {selectedAddressData.postalCode}</p>
                                    <p>Departamento y Piso: {selectedAddressData.apartmentNumberAndFloor}</p>
                                    <p>Teléfono: {selectedAddressData.cellphoneNumber}</p>
                                </div>
                            )}
                        </div>
                        <div className="input_container">
                            <label className='lastEnvio'>
                                <select
                                    required
                                    value={selectedPaymentMethod}
                                    onChange={(e) => handlePaymentMethodSelection(e.target.value)}
                                    className="input"
                                >
                                    <option value="">Seleccione un método de pago</option>
                                    {filteredPaymentMethods.map(paymentMethod => (
                                        <option key={paymentMethod.cardAlias} value={paymentMethod.cardAlias}>{paymentMethod.cardAlias}</option>
                                    ))}
                                </select>
                            </label>
                            {selectedPaymentMethodData && (
                                <div className="pretty-text">
                                    <p>Titular de la tarjeta: {selectedPaymentMethodData.cardHolderName}</p>
                                    <p>Número de tarjeta: **** **** **** {selectedPaymentMethodData.cardNumber.slice(-4)}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <Link href={'/'} className="purchase--btn" onClick={() => handleAlert()} >Comprar</Link>
                </form>
            </div>
        </div>
    );
}
