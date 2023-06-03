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
        price: 2.99,
        imgUrl: 'https://picsum.photos/400/300?random=1',
      },
      {
        name: 'Bread',
        description: 'Whole wheat bread',
        measurementUnit: 'loaf',
        brand: 'Healthy Harvest',
        supplyingCompany: 'Bakery Inc.',
        category: 'Bakery',
        price: 3.49,
        imgUrl: 'https://picsum.photos/400/300?random=2',
      },
      {
        name: 'Milk',
        description: 'Fresh milk',
        measurementUnit: 'L',
        brand: 'Dairy Delights',
        supplyingCompany: 'Farm Fresh Dairy',
        category: 'Dairy',
        price: 1.99,
        imgUrl: 'https://picsum.photos/400/300?random=3',
      },
      {
        name: 'Eggs',
        description: 'Farm-fresh eggs',
        measurementUnit: 'dozen',
        brand: 'Eggcellent Farms',
        supplyingCompany: 'Egg Farms Inc.',
        category: 'Dairy',
        price: 2.49,
        imgUrl: 'https://picsum.photos/400/300?random=4',
      },
      {
        name: 'Chicken',
        description: 'Boneless chicken breast',
        measurementUnit: 'kg',
        brand: 'Farm-to-Table',
        supplyingCompany: 'Poultry Farms Inc.',
        category: 'Meat',
        price: 7.99,
        imgUrl: 'https://picsum.photos/400/300?random=5',
      },
      {
        name: 'Rice',
        description: 'Long-grain white rice',
        measurementUnit: 'kg',
        brand: 'Golden Harvest',
        supplyingCompany: 'Rice Mills Ltd.',
        category: 'Grains',
        price: 3.99,
        imgUrl: 'https://picsum.photos/400/300?random=6',
      },
      {
        name: 'Tomatoes',
        description: 'Vine-ripened tomatoes',
        measurementUnit: 'kg',
        brand: 'Fresh Farms',
        supplyingCompany: 'Tomato Farms Inc.',
        category: 'Vegetables',
        price: 1.49,
        imgUrl: 'https://picsum.photos/400/300?random=7',
      },
      {
        name: 'Bananas',
        description: 'Ripe bananas',
        measurementUnit: 'bunch',
        brand: 'Tropical Delights',
        supplyingCompany: 'Banana Farms',
        category: 'Fruits',
        price: 0.99,
        imgUrl: 'https://picsum.photos/400/300?random=8',
      },
      {
        name: 'Cheese',
        description: 'Cheddar cheese',
        measurementUnit: 'g',
        brand: 'Cheesy Delights',
        supplyingCompany: 'Dairy Co-op',
        category: 'Dairy',
        price: 4.99,
        imgUrl: 'https://picsum.photos/400/300?random=9',
      },
      {
        name: 'Pasta',
        description: 'Spaghetti pasta',
        measurementUnit: 'pack',
        brand: 'Pasta Paradise',
        supplyingCompany: 'Pasta Co.',
        category: 'Pasta',
        price: 2.49,
        imgUrl: 'https://picsum.photos/400/300?random=10',
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
