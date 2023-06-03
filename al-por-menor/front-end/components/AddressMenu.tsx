import React, { useState } from 'react';

// Interface for an address
interface Address {
  id: number;
  addressAlias: string;
  province: string;
  locality: string;
  street: string;
  number: string;
  postalCode: string;
  apartmentNumberAndFloor: string;
  cellphoneNumber: string;
}

// Mock addresses
const mockAddresses: Address[] = [
  {
    id: 1,
    addressAlias: 'Casa',
    province: 'Buenos Aires',
    locality: 'CABA',
    street: 'Avenida de Mayo',
    number: '123',
    postalCode: 'C1084ABC',
    apartmentNumberAndFloor: '4A',
    cellphoneNumber: '+54 9 11 1234-5678',
  },
  {
    id: 2,
    addressAlias: 'Trabajo',
    province: 'Buenos Aires',
    locality: 'La Plata',
    street: 'Calle 7',
    number: '456',
    postalCode: 'B1900DEF',
    apartmentNumberAndFloor: '2B',
    cellphoneNumber: '+54 9 11 9876-5432',
  },
  // Add more addresses as needed
];

const AddressMenu = () => {
  const [addresses, setAddresses] = useState<Address[]>(mockAddresses);
  const [newAddress, setNewAddress] = useState<Address>({
    id: 0,
    addressAlias: '',
    province: '',
    locality: '',
    street: '',
    number: '',
    postalCode: '',
    apartmentNumberAndFloor: '',
    cellphoneNumber: '',
  });

  const handleAddAddress = () => {
    // Generate a new ID for the address
    const newId = addresses.length + 1;
    
    // Create a new address object with the generated ID
    const addressToAdd: Address = {
      ...newAddress,
      id: newId,
    };

    // Add the new address to the addresses array
    const updatedAddresses = [...addresses, addressToAdd];

    // Update the addresses state with the updated array
    setAddresses(updatedAddresses);

    // Clear the new address form
    setNewAddress({
      id: 0,
      addressAlias: '',
      province: '',
      locality: '',
      street: '',
      number: '',
      postalCode: '',
      apartmentNumberAndFloor: '',
      cellphoneNumber: '',
    });
  };

  const handleDeleteAddress = (addressId: number) => {
    // Filter out the address with the specified ID from the addresses array
    const updatedAddresses = addresses.filter((address) => address.id !== addressId);

    // Update the addresses state with the updated array
    setAddresses(updatedAddresses);
  };

  const handleModifyAddress = (addressId: number, updatedAddress: Address) => {
    // Find the index of the address with the specified ID in the addresses array
    const addressIndex = addresses.findIndex((address) => address.id === addressId);

    // If the address with the specified ID exists
    if (addressIndex !== -1) {
      // Create a copy of the addresses array
      const updatedAddresses = [...addresses];

      // Update the address at the specified index with the updated address
      updatedAddresses[addressIndex] = updatedAddress;

      // Update the addresses state with the updated array
      setAddresses(updatedAddresses);
    }
  };

  return (
    <div>
      <h3>Agregar Dirección:</h3>
      <div>
        <label>Alias de Dirección:</label>
        <input
          type="text"
          value={newAddress.addressAlias}
          onChange={(e) => setNewAddress({ ...newAddress, addressAlias: e.target.value })}
        />
      </div>
      <div>
        <label>Provincia:</label>
        <input
          type="text"
          value={newAddress.province}
          onChange={(e) => setNewAddress({ ...newAddress, province: e.target.value })}
        />
      </div>
      <div>
        <label>Localidad:</label>
        <input
          type="text"
          value={newAddress.locality}
          onChange={(e) => setNewAddress({ ...newAddress, locality: e.target.value })}
        />
      </div>
      <div>
        <label>Calle:</label>
        <input
          type="text"
          value={newAddress.street}
          onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
        />
      </div>
      <div>
        <label>Número:</label>
        <input
          type="text"
          value={newAddress.number}
          onChange={(e) => setNewAddress({ ...newAddress, number: e.target.value })}
        />
      </div>
      <div>
        <label>Código Postal:</label>
        <input
          type="text"
          value={newAddress.postalCode}
          onChange={(e) => setNewAddress({ ...newAddress, postalCode: e.target.value })}
        />
      </div>
      <div>
        <label>Número y Piso del Departamento:</label>
        <input
          type="text"
          value={newAddress.apartmentNumberAndFloor}
          onChange={(e) => setNewAddress({ ...newAddress, apartmentNumberAndFloor: e.target.value })}
        />
      </div>
      <div>
        <label>Número de Celular:</label>
        <input
          type="text"
          value={newAddress.cellphoneNumber}
          onChange={(e) => setNewAddress({ ...newAddress, cellphoneNumber: e.target.value })}
        />
      </div>
      <button onClick={handleAddAddress}>Agregar Dirección</button>

      <h3>Direcciones:</h3>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            <div>
              <span>Alias de Dirección: {address.addressAlias}</span>
              <span>Provincia: {address.province}</span>
              <span>Localidad: {address.locality}</span>
              <span>Calle: {address.street}</span>
              <span>Número: {address.number}</span>
              <span>Código Postal: {address.postalCode}</span>
              <span>Número y Piso del Departamento: {address.apartmentNumberAndFloor}</span>
              <span>Número de Celular: {address.cellphoneNumber}</span>
            </div>
            <button onClick={() => handleDeleteAddress(address.id)}>Eliminar</button>
            <button onClick={() => handleModifyAddress(address.id, address)}>Modificar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressMenu;
