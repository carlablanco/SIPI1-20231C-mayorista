'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const foodGroceries = [
      {
        name: 'Apples',
        description: 'Fresh and juicy apples',
        measurementUnit: 'kg',
        brand: 'Farm Fresh',
        supplyingCompany: 'Apple Farms',
        category: 'Fruits',
        price: 2199.99,
        imgUrl: 'https://parade.com/.image/t_share/MTkwNTgxNDY1MzcxMTkxMTY0/different-types-of-apples-jpg.jpg',
      },
      {
        name: 'Bread',
        description: 'Whole wheat bread',
        measurementUnit: 'loaf',
        brand: 'Healthy Harvest',
        supplyingCompany: 'Bakery Inc.',
        category: 'Bakery',
        price: 350.49,
        imgUrl: 'https://i.imgur.com/KUuRtTc.jpeg',
      },
      {
        name: 'Milk',
        description: 'Fresh milk',
        measurementUnit: 'L',
        brand: 'Dairy Delights',
        supplyingCompany: 'Farm Fresh Dairy',
        category: 'Dairy',
        price: 999.99,
        imgUrl: 'https://t3.ftcdn.net/jpg/04/91/38/72/360_F_491387258_NDctlpVMBvUNazcVsj8d0xAFe5uP2Idy.jpg',
      },
      {
        name: 'Eggs',
        description: 'Farm-fresh eggs',
        measurementUnit: 'dozen',
        brand: 'Eggcellent Farms',
        supplyingCompany: 'Egg Farms Inc.',
        category: 'Dairy',
        price: 229.49,
        imgUrl: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-eggs-1296x728-feature.jpg',
      },
      {
        name: 'Chicken',
        description: 'Boneless chicken breast',
        measurementUnit: 'kg',
        brand: 'Farm-to-Table',
        supplyingCompany: 'Poultry Farms Inc.',
        category: 'Meat',
        price: 709.99,
        imgUrl: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/10/Roast-Chicken-main.jpg',
      },
      {
        name: 'Rice',
        description: 'Long-grain white rice',
        measurementUnit: 'kg',
        brand: 'Golden Harvest',
        supplyingCompany: 'Rice Mills Ltd.',
        category: 'Grains',
        price: 394.99,
        imgUrl: 'https://www.onceuponachef.com/images/2014/10/jasmine-rice-1.jpg',
      },
      {
        name: 'Tomatoes',
        description: 'Vine-ripened tomatoes',
        measurementUnit: 'kg',
        brand: 'Fresh Farms',
        supplyingCompany: 'Tomato Farms Inc.',
        category: 'Vegetables',
        price: 108.49,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg',
      },
      {
        name: 'Bananas',
        description: 'Ripe bananas',
        measurementUnit: 'bunch',
        brand: 'Tropical Delights',
        supplyingCompany: 'Banana Farms',
        category: 'Fruits',
        price: 543.99,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg',
      },
      {
        name: 'Cheese',
        description: 'Cheddar cheese',
        measurementUnit: 'g',
        brand: 'Cheesy Delights',
        supplyingCompany: 'Dairy Co-op',
        category: 'Dairy',
        price: 391.99,
        imgUrl: 'https://www.tasteofhome.com/wp-content/uploads/2022/09/GettyImages-470340853.jpg',
      },
      {
        name: 'Pasta',
        description: 'Spaghetti pasta',
        measurementUnit: 'pack',
        brand: 'Pasta Paradise',
        supplyingCompany: 'Pasta Co.',
        category: 'Pasta',
        price: 212.49,
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
