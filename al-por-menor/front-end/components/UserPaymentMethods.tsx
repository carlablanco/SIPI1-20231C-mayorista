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
    <div>
      <h3>Agregar Método de Pago:</h3>
      <div>
        <label>Alias de la Tarjeta:</label>
        <input
          type="text"
          value={newPaymentMethod.cardAlias}
          onChange={(e) => setNewPaymentMethod({ ...newPaymentMethod, cardAlias: e.target.value })}
        />
      </div>
      <div>
        <label>Nombre del Titular:</label>
        <input
          type="text"
          value={newPaymentMethod.cardHolderName}
          onChange={(e) => setNewPaymentMethod({ ...newPaymentMethod, cardHolderName: e.target.value })}
        />
      </div>
      <div>
        <label>Número de Tarjeta:</label>
        <input
          type="text"
          value={newPaymentMethod.cardNumber}
          onChange={(e) => setNewPaymentMethod({ ...newPaymentMethod, cardNumber: e.target.value })}
        />
      </div>
      <div>
        <label>Fecha de Vencimiento:</label>
        <input
          type="text"
          value={newPaymentMethod.expirationDate}
          onChange={(e) => setNewPaymentMethod({ ...newPaymentMethod, expirationDate: e.target.value })}
        />
      </div>
      <div>
        <label>CVV:</label>
        <input
          type="text"
          value={newPaymentMethod.CVV}
          onChange={(e) => setNewPaymentMethod({ ...newPaymentMethod, CVV: e.target.value })}
        />
      </div>
      <button onClick={handleAddPaymentMethod}>Agregar Método de Pago</button>

      <h3>Métodos de Pago:</h3>
      <ul>
        {paymentMethods.map((paymentMethod) => (
          <li key={paymentMethod.id}>
            <div>
              <span>Alias de la Tarjeta: {paymentMethod.cardAlias}</span>
              <span>Nombre que figura en la Tarjeta: {paymentMethod.cardHolderName}</span>
              <span>Número de Tarjeta: {paymentMethod.cardNumber}</span>
              <span>Fecha de Vencimiento: {paymentMethod.expirationDate}</span>
              <span>CVV: {paymentMethod.CVV}</span>
            </div>
            <button onClick={() => handleDeletePaymentMethod(paymentMethod.id)}>Eliminar</button>
            <button onClick={() => handleModifyPaymentMethod(paymentMethod.id, paymentMethod)}>Modificar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethodMenu;
