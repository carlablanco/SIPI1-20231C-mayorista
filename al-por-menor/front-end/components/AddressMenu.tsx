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
    <div className='direccion-container'>
      <h3 className='dire-titulo'>Agregar Dirección:</h3>
      <div className="alias-direccion">
        <h3 className='campos'>Alias de Dirección: </h3>
        <input
          type="text"
          value={newAddress.addressAlias}
          onChange={(e) => setNewAddress({ ...newAddress, addressAlias: e.target.value })}
          placeholder="Alias"
        />
      </div>
      <div className="provincia">
        <h3 className='campos'>Provincia: </h3>
        <input
          type="text"
          value={newAddress.province}
          onChange={(e) => setNewAddress({ ...newAddress, province: e.target.value })}
          placeholder="Provincia"
        />
      </div>
      <div className="localidad">
        <h3 className='campos'>Localidad: </h3>
        <input
          type="text"
          value={newAddress.locality}
          onChange={(e) => setNewAddress({ ...newAddress, locality: e.target.value })}
          placeholder="Localidad"
        />
      </div>
      <div className="calle">
        <h3 className='campos'>Calle: </h3>
        <input
          type="text"
          value={newAddress.street}
          onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
          placeholder="Calle"
        />
      </div>
      <div className="numero">
        <h3 className='campos'>Número: </h3>
        <input
          type="text"
          value={newAddress.number}
          onChange={(e) => setNewAddress({ ...newAddress, number: e.target.value })}
          placeholder="Número"
        />
      </div>
      <div className="codigo-postal">
        <h3 className='campos'>Código Postal: </h3>
        <input
          type="text"
          value={newAddress.postalCode}
          onChange={(e) => setNewAddress({ ...newAddress, postalCode: e.target.value })}
          placeholder="CP"
        />
      </div>
      <div className="numero-piso">
        <h3 className='campos'>Número y Piso del Departamento: </h3>
        <input
          type="text"
          value={newAddress.apartmentNumberAndFloor}
          onChange={(e) => setNewAddress({ ...newAddress, apartmentNumberAndFloor: e.target.value })}
          placeholder="N y Piso "
        />
      </div>
      <div className="numero-celular">
        <h3 className='campos'>Número de Celular: </h3>
        <input
          type="text"
          value={newAddress.cellphoneNumber}
          onChange={(e) => setNewAddress({ ...newAddress, cellphoneNumber: e.target.value })}
          placeholder="Celular"
        />
      </div>
      <button className="agregar-direccion" onClick={handleAddAddress}>Agregar Dirección</button>
      <ul >
      <h3 className='dir-titulo'>Direcciones:</h3>
        <div className='direc-list-container'>
        {addresses.map((address) => (
          <li key={address.id}>
            <div className='direc-list'>
              <span className="Alias-dir">Alias de Dirección: {address.addressAlias}</span>
              <span className="prov">Provincia: {address.province}</span>
              <span className="Local">Localidad: {address.locality}</span>
              <span className="Calle1">Calle: {address.street}</span>
              <span className="numero1">Número: {address.number}</span>
              <span className="CP">Código Postal: {address.postalCode}</span>
              <span className="depto">N y Piso Depto: {address.apartmentNumberAndFloor}</span>
              <span className="celular">Número de Celular: {address.cellphoneNumber}</span>
            </div>
            <button className="eliminar-direccion" onClick={() => handleDeleteAddress(address.id)}>Eliminar</button>
            <button className="modificar-direccion" onClick={() => handleModifyAddress(address.id, address)}>Modificar</button>
          </li>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default AddressMenu;
