import React, { useState } from 'react';

// Interface for a payment method
interface PaymentMethod {
  id: number;
  userId: number;
  cardAlias: string;
  cardHolderName: string;
  cardNumber: string;
  expirationDate: string;
  CVV: string;
  createdAt: string;
  updatedAt: string;
}

// Mock payment methods
const mockPaymentMethods: PaymentMethod[] = [
  {
    id: 1,
    userId: 1,
    cardAlias: 'Tarjeta 1',
    cardHolderName: 'Juan Pérez',
    cardNumber: '**** **** **** 1234',
    expirationDate: '12/25',
    CVV: '123',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
  },
  {
    id: 2,
    userId: 1,
    cardAlias: 'Tarjeta 2',
    cardHolderName: 'Juan Pérez',
    cardNumber: '**** **** **** 5678',
    expirationDate: '06/24',
    CVV: '456',
    createdAt: '2022-01-02',
    updatedAt: '2022-01-02',
  },
  // Add more payment methods as needed
];

const PaymentMethodMenu = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(mockPaymentMethods);
  const [newPaymentMethod, setNewPaymentMethod] = useState<PaymentMethod>({
    id: 0,
    userId: 0,
    cardAlias: '',
    cardHolderName: '',
    cardNumber: '',
    expirationDate: '',
    CVV: '',
    createdAt: '',
    updatedAt: '',
  });

  const handleAddPaymentMethod = () => {
    // Generate a new ID for the payment method
    const newId = paymentMethods.length + 1;

    // Create a new payment method object with the generated ID
    const paymentMethodToAdd: PaymentMethod = {
      ...newPaymentMethod,
      id: newId,
    };

    // Add the new payment method to the paymentMethods array
    const updatedPaymentMethods = [...paymentMethods, paymentMethodToAdd];

    // Update the paymentMethods state with the updated array
    setPaymentMethods(updatedPaymentMethods);

    // Clear the new payment method form
    setNewPaymentMethod({
      id: 0,
      userId: 0,
      cardAlias: '',
      cardHolderName: '',
      cardNumber: '',
      expirationDate: '',
      CVV: '',
      createdAt: '',
      updatedAt: '',
    });
  };

  const handleDeletePaymentMethod = (paymentMethodId: number) => {
    // Filter out the payment method with the specified ID from the paymentMethods array
    const updatedPaymentMethods = paymentMethods.filter((paymentMethod) => paymentMethod.id !== paymentMethodId);

    // Update the paymentMethods state with the updated array
    setPaymentMethods(updatedPaymentMethods);
  };

  const handleModifyPaymentMethod = (paymentMethodId: number, updatedPaymentMethod: PaymentMethod) => {
    // Find the index of the payment method with the specified ID in the paymentMethods array
    const paymentMethodIndex = paymentMethods.findIndex((paymentMethod) => paymentMethod.id === paymentMethodId);

    // If the payment method with the specified ID exists
    if (paymentMethodIndex !== -1) {
      // Create a copy of the paymentMethods array
      const updatedPaymentMethods = [...paymentMethods];

      // Update the payment method at the specified index with the updated payment method
      updatedPaymentMethods[paymentMethodIndex] = updatedPaymentMethod;

      // Update the paymentMethods state with the updated array
      setPaymentMethods(updatedPaymentMethods);
    }
  };

  return (
    <div className='MetodosDePagos-Container'>
      <h3 className="titulo">Agregar Método de Pago: </h3>
      <div className='alias-tarjeta'>
        <label>Alias de la Tarjeta:</label>
        <div>
          <input
            type="text"
            value={newPaymentMethod.cardAlias}
            onChange={(e) => setNewPaymentMethod({ ...newPaymentMethod, cardAlias: e.target.value })}
            placeholder="Alias"
          />
        </div>
      </div>
      <div className='nombre-titular'>
        <label>Nombre del Titular:</label>
        <div>
          <input
            type="text"
            value={newPaymentMethod.cardHolderName}
            onChange={(e) => setNewPaymentMethod({ ...newPaymentMethod, cardHolderName: e.target.value })}
            placeholder="Nombre del titular"
          />
        </div>
      </div>
      <div className='numero-tarjeta'>
        <label>Número de Tarjeta:</label>
        <div>
          <input
            type="text"
            value={newPaymentMethod.cardNumber}
            onChange={(e) => setNewPaymentMethod({ ...newPaymentMethod, cardNumber: e.target.value })}
            placeholder="0000 0000 0000 0000"
          />
        </div>
      </div>
      <div className='fecha-vencimiento'>
        <label>Fecha de Vencimiento:</label>
        <div>
          <input
            type="text"
            value={newPaymentMethod.expirationDate}
            onChange={(e) => setNewPaymentMethod({ ...newPaymentMethod, expirationDate: e.target.value })}
            placeholder="01/29"
          />
        </div>
      </div>
      <div className='cvv'>
        <label>CVV:</label>
        <div>
          <input
            type="text"
            value={newPaymentMethod.CVV}
            onChange={(e) => setNewPaymentMethod({ ...newPaymentMethod, CVV: e.target.value })}
            placeholder="000"
          />
          <button className='agregar-Tarjeta' onClick={handleAddPaymentMethod}>Agregar Método de Pago</button>
        </div>
      </div>
  
      {paymentMethods.map((paymentMethod) => (
        <div key={paymentMethod.id} className='Metodo-de-Pago'>
          <div className="payment-info">
          <h3>Métodos de Pago:</h3>
            <div>
              <span>Alias de la Tarjeta: </span>
              <span>{paymentMethod.cardAlias}</span>
            </div>
            <div>
              <span>Nombre que figura en la Tarjeta: </span>
              <span>{paymentMethod.cardHolderName}</span>
            </div>
            <div>
              <span>Número de Tarjeta: </span>
              <span>{paymentMethod.cardNumber}</span>
            </div>
            <div>
              <span>Fecha de Vencimiento: </span>
              <span>{paymentMethod.expirationDate}</span>
            </div>
            <div>
              <span>CVV: </span>
              <span>{paymentMethod.CVV}</span>
            </div>
          </div>
          <div className="payment-actions">
            <button className='Eliminar-Pago' onClick={() => handleDeletePaymentMethod(paymentMethod.id)}>Eliminar</button>
            <button className='modificar-Pago' onClick={() => handleModifyPaymentMethod(paymentMethod.id, paymentMethod)}>Modificar</button>
          </div>
        </div>
      ))}
    </div>
  );  
}

export default PaymentMethodMenu;
