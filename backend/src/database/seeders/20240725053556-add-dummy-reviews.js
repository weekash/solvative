'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('reviews', [
      {
        id: 'a550e2d2-7c2e-4b44-a22e-9cbb762d0d2d',
        title: 'Fantastic Experience',
        content: 'This was an amazing experience. Highly recommend to everyone!',
      },
      {
        id: 'c3d4eb47-8f72-41e8-947a-4d6d79d01f0b',
        title: 'Good Value for Money',
        content: 'The product offers great value for the price. I am satisfied.',
      },
      {
        id: '5b9a6d7c-3e3d-4c2e-8b0d-7f39b6e5b0ef',
        title: 'Average Quality',
        content: 'The quality is just average. It does the job but doesn’t impress.',
      },
      {
        id: '7a8c7a62-4b34-4c7d-9d29-5e4b4823b9e9',
        title: 'Exceeded Expectations',
        content: 'This product exceeded my expectations in every way. I’m very happy with it.',
      },
      {
        id: 'd1b38a44-71d4-4a1e-a012-17f8d5d0c2d0',
        title: 'Poor Customer Service',
        content: 'The product is fine, but the customer service was lacking and unresponsive.',
      },
      {
        id: 'e2e07df9-3f72-462b-9c88-5e9cfcbf60f7',
        title: 'Excellent Build Quality',
        content: 'The build quality is excellent. It feels durable and well-made.',
      },
      {
        id: 'f92a5e9e-91a4-4f6d-bf37-3a705d70a0e3',
        title: 'Not as Described',
        content: 'The product did not match the description. Very disappointed.',
      },
      {
        id: 'f33b8e0b-5f72-47d4-846a-b0c3a8e7b2d6',
        title: 'Satisfactory Performance',
        content: 'The performance is satisfactory, but there are better options available.',
      },
      {
        id: 'd33c8e5f-36f3-4f1b-8328-4e1d8c3f3e8d',
        title: 'Highly Recommend',
        content: 'I highly recommend this product. It’s been a great addition to my daily routine.',
      },
      {
        id: 'b25d1a09-66d3-4a29-a1dc-18c9df3f2a5e',
        title: 'Will Buy Again',
        content: 'I am very pleased with this product and will definitely buy it again in the future.',
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
