import { addDays } from "@/app/helpers/date.helper";

// userMockData.js
export const users = [
    {
      id: 1,
      name: 'admin',
      lastName: '',
      email: 'admin@example.com',
      password: '123',
      optCode: 1234,
      optExpiration: '2023-06-30',
      isAdmin: true,
    },
    {
      id:2,
      name: 'María',
      lastName: 'González',
      email: 'maria@example.com',
      password: 'secreto456',
      optCode: 5678,
      optExpiration: '2023-06-30',
      isAdmin: false,
    },
    {
      id:3,
      name: 'Juan',
      lastName: 'Pérez',
      email: 'juan@example.com',
      password: 'contraseña123',
      optCode: 9128,
      optExpiration: '2023-06-30',
      isAdmin: false,
    },

    // Add more user objects as needed
  ];
  
  export const products =  [
    {
        productId: '1',
      name: 'Manzanas',
      description: 'Manzanas frescas y jugosas',
      measurementUnit: 'Kg',
      brand: 'Farm Fresh',
      supplyingCompany: 'Apple Farms',
      category: 'Frutas',
      promotionStartDate: new Date(),
      promotionEndDate: addDays(1),
      unitsSold: 10,
      priceList: [
        { price: 500, unitsNeeded: 10 },
        { price: 400, unitsNeeded: 50 },
        { price: 350, unitsNeeded: 100 },
      ],
      imgUrl: 'https://parade.com/.image/t_share/MTkwNTgxNDY1MzcxMTkxMTY0/different-types-of-apples-jpg.jpg',
    },
    {
        productId: '2',
      name: 'Pan',
      description: 'Pan integral de trigo',
      measurementUnit: 'Unidad',
      brand: 'Healthy Harvest',
      supplyingCompany: 'Bakery Inc.',
      category: 'Panaderia',
      promotionStartDate: new Date(),
      promotionEndDate: addDays(1),
      unitsSold: 20,
      priceList: [
        { price: 1000, unitsNeeded: 10 },
        { price: 900, unitsNeeded: 50 },
        { price: 750, unitsNeeded: 100 },
      ],
      imgUrl: 'https://i.imgur.com/KUuRtTc.jpeg',
    },
    {
        productId: '3',
      name: 'Leche',
      description: 'Leche fresca',
      measurementUnit: 'Unidad',
      brand: 'Dairy Delights',
      supplyingCompany: 'Farm Fresh Dairy',
      category: 'Lacteos',
      promotionStartDate: new Date(),
      promotionEndDate: addDays(1),
      unitsSold: 110,
      priceList: [
        { price: 500, unitsNeeded: 10 },
        { price: 400, unitsNeeded: 50 },
        { price: 350, unitsNeeded: 100 },
      ],
      imgUrl: 'https://t3.ftcdn.net/jpg/04/91/38/72/360_F_491387258_NDctlpVMBvUNazcVsj8d0xAFe5uP2Idy.jpg',
    },
    {
        productId: '4',
      name: 'Maple 12 huevos',
      description: 'Huevos frescos blancos',
      measurementUnit: 'Unidad',
      brand: 'Eggcellent Farms',
      supplyingCompany: 'Egg Farms Inc.',
      category: 'Lacteos',
      promotionStartDate: new Date(),
      promotionEndDate: addDays(1),
      unitsSold: 50,
      priceList: [
        { price: 800, unitsNeeded: 10 },
        { price: 700, unitsNeeded: 50 },
        { price: 550, unitsNeeded: 100 },
      ],
      imgUrl: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-eggs-1296x728-feature.jpg',
    },
    {
        productId: '5',
      name: 'Pollo',
      description: 'Pechuga de pollo',
      measurementUnit: 'Kg',
      brand: 'Farm-to-Table',
      supplyingCompany: 'Poultry Farms Inc.',
      category: 'Carnes',
      promotionStartDate: new Date(),
      promotionEndDate: addDays(1),
      unitsSold: 7,
      priceList: [
        { price: 1200, unitsNeeded: 10 },
        { price: 900, unitsNeeded: 50 },
        { price: 750, unitsNeeded: 100 },
      ],
      imgUrl: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/10/Roast-Chicken-main.jpg',
    },
    {
        productId: '6',
      name: 'Arroz',
      description: 'Arroz blanco',
      measurementUnit: 'Unidad',
      brand: 'Golden Harvest',
      supplyingCompany: 'Rice Mills Ltd.',
      category: 'Granos',
      promotionStartDate: new Date(),
      promotionEndDate: addDays(1),
      unitsSold: 20,
      priceList: [
        { price: 500, unitsNeeded: 10 },
        { price: 400, unitsNeeded: 50 },
        { price: 350, unitsNeeded: 100 },
      ],
      imgUrl: 'https://www.onceuponachef.com/images/2014/10/jasmine-rice-1.jpg',
    },
    {
        productId: '7',
      name: 'Tomates',
      description: 'Tomates rojos frescos de huerta orgánica',
      measurementUnit: 'Kg',
      brand: 'Fresh Farms',
      supplyingCompany: 'Tomato Farms Inc.',
      category: 'Vegetales',
      promotionStartDate: new Date(),
      promotionEndDate: addDays(1),
      unitsSold: 9,
      priceList: [
        { price: 200, unitsNeeded: 10 },
        { price: 150, unitsNeeded: 50 },
        { price: 50, unitsNeeded: 100 },
      ],
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg',
    },
    {
        productId: '8',
      name: 'Bananas',
      description: 'Bananas del ecuador',
      measurementUnit: 'Kg',
      brand: 'Tropical Delights',
      supplyingCompany: 'Banana Farms',
      category: 'Frutas',
      promotionStartDate: new Date(),
      promotionEndDate: addDays(1),
      unitsSold: 10,
      priceList: [
        { price: 700, unitsNeeded: 10 },
        { price: 500, unitsNeeded: 50 },
        { price: 350, unitsNeeded: 100 },
      ],
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg',
    },
    {
        productId: '9',
      name: 'Queso cheddar',
      description: 'Queso cheddar en barra',
      measurementUnit: 'Kg',
      brand: 'Cheesy Delights',
      supplyingCompany: 'Dairy Co-op',
      category: 'Lacteos',
      promotionStartDate: new Date(),
      promotionEndDate: addDays(1),
      unitsSold: 25,
      priceList: [
        { price: 1200, unitsNeeded: 10 },
        { price: 900, unitsNeeded: 50 },
        { price: 750, unitsNeeded: 100 },
      ],
      imgUrl: 'https://www.tasteofhome.com/wp-content/uploads/2022/09/GettyImages-470340853.jpg',
    },
    {
        productId: '10',
      name: 'Spaghettis',
      description: 'Pasta spaghetti al bronce',
      measurementUnit: 'Unidad',
      brand: 'Pasta Paradise',
      supplyingCompany: 'Pasta Co.',
      category: 'Pasta',
      promotionStartDate: new Date(),
      promotionEndDate: addDays(1),
      unitsSold: 49,
      priceList: [
        { price: 500, unitsNeeded: 10 },
        { price: 300, unitsNeeded: 50 },
        { price: 250, unitsNeeded: 100 },
      ],
      imgUrl: 'https://www.lemonblossoms.com/wp-content/uploads/2022/03/Butter-Noodles-S5-500x375.jpg',
    },
  ];


  // productMockData.js
 
  [
    {
      productId: '1',
      name: 'Yerba Mate Taragüi',
      description: 'El sabor característico de Yerba Mate Taragüi. ',
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
  