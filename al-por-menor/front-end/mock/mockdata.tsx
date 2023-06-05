const addDays = (days: any) => {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return new Date(date);
  }

// userMockData.js
export const users = [
    {
        id: 1,
      name: 'Juan',
      lastName: 'Pérez',
      email: 'juan@example.com',
      password: 'contraseña123',
      optCode: 1234,
      optExpiration: '2023-06-30',
      isAdmin: false,
    },
    {
        id:2,
      name: 'María',
      lastName: 'González',
      email: 'maria@example.com',
      password: 'secreto456',
      optCode: 5678,
      optExpiration: '2023-06-30',
      isAdmin: true,
    },
    // Add more user objects as needed
  ];
  
  // productMockData.js
  export const products = [
    {
      productId: '1',
      name: 'Yerba Mate Taragüi',
      description: 'Deliciosa yerba mate Taragüi de Argentina.',
      category: 'Alacena',
      priceList: [
        { price: 1200, unitsNeeded: 10 },
        { price: 900, unitsNeeded: 50 },
        { price: 750, unitsNeeded: 100 },
      ],
      brand: 'Taragüi',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Espanol-Yerba-Mate-Taragui-Con-Palo-250g-L.png',
      measurementUnit: 'unidad',
      supplier: 'Aguantadora S.A.',
      publishDate: new Date(),
      endDate: addDays(1),
      unitsSold: 50,
    },
    {
      productId: '2',
      name: 'Dulce de Leche La Serenísima',
      description: 'Exquisito dulce de leche argentino de la marca La Serenísima. El producto ideal para rellenos de tortas, tartas, muffins, alfajores, piononos y muchos más. También podes usarlo para decorar tus recetas dulces.',
      category: 'Lácteos',
      priceList: [
        { price: 350, unitsNeeded: 10 },
        { price: 310, unitsNeeded: 50 },
      ],
      brand: 'La Serenísima',
      imgUrl: 'https://www.laserenisima.com.ar/images/productos/grandddlreposterp.png',
      measurementUnit: 'unidad',
      supplier: 'Mastellone Hnos. S.A.',
      publishDate: new Date(),
      endDate: addDays( 1),
      unitsSold: 55,
    },
    // Agrega más productos aquí...
  ];
  
  // commitmentMockData.js
  export const commitments = [
    {
      userId: 1,
      productId: 1,
      finished: false,
    },
    {
      userId: 2,
      productId: 2,
      finished: true,
    },
    // Add more commitment objects as needed
  ];
  
  // userAddressMockData.js
  export const userAddresses = [
    {
      userId: 1,
      addressAlias: 'Casa',
      province: 'Buenos Aires',
      locality: 'La Plata',
      street: 'Calle Falsa',
      number: '123',
      postalCode: '1900',
      apartmentNumberAndFloor: '2A',
      cellphoneNumber: '011-12345678',
    },
    {
      userId: 2,
      addressAlias: 'Oficina',
      province: 'Córdoba',
      locality: 'Córdoba Capital',
      street: 'Avenida Principal',
      number: '456',
      postalCode: '5000',
      apartmentNumberAndFloor: '',
      cellphoneNumber: '0351-98765432',
    },
    // Add more user address objects as needed
  ];
  
  // userPaymentMethodMockData.js
  export const userPaymentMethods = [
    {
      userId: 1,
      cardAlias: 'Visa',
      cardHolderName: 'Juan Pérez',
      cardNumber: '4111111111111111',
      expirationDate: '12/25',
      CVV: '123',
    },
    {
      userId: 2,
      cardAlias: 'Mastercard',
      cardHolderName: 'María González',
      cardNumber: '5555555555554444',
      expirationDate: '06/24',
      CVV: '789',
    },
    // Add more user payment method objects as needed
  ];
  