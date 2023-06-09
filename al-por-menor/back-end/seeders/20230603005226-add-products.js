'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const foodGroceries = [
      {
        name: 'Manzanas',
        description: 'Manzanas frescas y jugosas',
        measurementUnit: 'Kg',
        brand: 'Farm Fresh',
        supplyingCompany: 'Apple Farms',
        category: 'Frutas',
        promotionStartDate: '2023-06-01',
        promotionEndDate: '2023-07-01',
        priceList: '{"10":1999,"50": 1799, "100": 1650}',
        imgUrl: 'https://parade.com/.image/t_share/MTkwNTgxNDY1MzcxMTkxMTY0/different-types-of-apples-jpg.jpg',
      },
      {
        name: 'Pan',
        description: 'Pan integral de trigo',
        measurementUnit: 'Unidad',
        brand: 'Healthy Harvest',
        supplyingCompany: 'Bakery Inc.',
        category: 'Panaderia',
        promotionStartDate: '2023-06-01',
        promotionEndDate: '2023-07-01',
        priceList: '{"10": 1799, "50": 1599, "100": 1450}',
        imgUrl: 'https://i.imgur.com/KUuRtTc.jpeg',
      },
      {
        name: 'Leche',
        description: 'Leche fresca',
        measurementUnit: 'Unidad',
        brand: 'Dairy Delights',
        supplyingCompany: 'Farm Fresh Dairy',
        category: 'Lacteos',
        promotionStartDate: '2023-06-01',
        promotionEndDate: '2023-07-01',
        priceList: '{"10": 2199, "50": 1999, "100": 1850}',
        imgUrl: 'https://t3.ftcdn.net/jpg/04/91/38/72/360_F_491387258_NDctlpVMBvUNazcVsj8d0xAFe5uP2Idy.jpg',
      },
      {
        name: 'Maple 12 huevos',
        description: 'Huevos frescos blancos',
        measurementUnit: 'Unidad',
        brand: 'Eggcellent Farms',
        supplyingCompany: 'Egg Farms Inc.',
        category: 'Lacteos',
        promotionStartDate: '2023-06-01',
        promotionEndDate: '2023-07-01',
        priceList: '{"10": 2799, "50": 2499, "100": 2350}',
        imgUrl: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-eggs-1296x728-feature.jpg',
      },
      {
        name: 'Pollo',
        description: 'Pechuga de pollo',
        measurementUnit: 'Kg',
        brand: 'Farm-to-Table',
        supplyingCompany: 'Poultry Farms Inc.',
        category: 'Carnes',
        promotionStartDate: '2023-06-01',
        promotionEndDate: '2023-07-01',
        priceList: '{"10": 1699, "50": 1499, "100": 1350}',
        imgUrl: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/10/Roast-Chicken-main.jpg',
      },
      {
        name: 'Arroz',
        description: 'Arroz blanco',
        measurementUnit: 'Unidad',
        brand: 'Golden Harvest',
        supplyingCompany: 'Rice Mills Ltd.',
        category: 'Granos',
        promotionStartDate: '2023-06-01',
        promotionEndDate: '2023-07-01',
        priceList: '{"10": 1499, "50": 1299, "100": 1150}',
        imgUrl: 'https://www.onceuponachef.com/images/2014/10/jasmine-rice-1.jpg',
      },
      {
        name: 'Tomates',
        description: 'Tomates rojos frescos de huerta orgánica',
        measurementUnit: 'Kg',
        brand: 'Fresh Farms',
        supplyingCompany: 'Tomato Farms Inc.',
        category: 'Vegetales',
        promotionStartDate: '2023-06-01',
        promotionEndDate: '2023-07-01',
        priceList: '{"10": 2499, "50": 2299, "100": 2150}',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg',
      },
      {
        name: 'Bananas',
        description: 'Bananas del ecuador',
        measurementUnit: 'Kg',
        brand: 'Tropical Delights',
        supplyingCompany: 'Banana Farms',
        category: 'Frutas',
        promotionStartDate: '2023-06-01',
        promotionEndDate: '2023-07-01',
        priceList: '{"10": 1899, "50": 1699, "100": 1550}',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg',
      },
      {
        name: 'Queso cheddar',
        description: 'Queso cheddar en barra',
        measurementUnit: 'Kg',
        brand: 'Cheesy Delights',
        supplyingCompany: 'Dairy Co-op',
        category: 'Lacteos',
        promotionStartDate: '2023-06-01',
        promotionEndDate: '2023-07-01',
        priceList: '{"10": 3299, "50": 2999, "100": 2850}',
        imgUrl: 'https://www.tasteofhome.com/wp-content/uploads/2022/09/GettyImages-470340853.jpg',
      },
      {
        name: 'Spaghettis',
        description: 'Pasta spaghetti al bronce',
        measurementUnit: 'Unidad',
        brand: 'Pasta Paradise',
        supplyingCompany: 'Pasta Co.',
        category: 'Pasta',
        promotionStartDate: '2023-06-01',
        promotionEndDate: '2023-07-01',
        priceList: '{"10": 799, "50": 599, "100": 450}',
        imgUrl: 'https://www.lemonblossoms.com/wp-content/uploads/2022/03/Butter-Noodles-S5-500x375.jpg',
      },
    ];

    await queryInterface.bulkInsert('Products', foodGroceries.map(grocery => ({
      ...grocery,
      createdAt: new Date(),
      updatedAt: new Date(),
    })));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
