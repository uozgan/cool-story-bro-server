"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "Morning",
          description: "Breakfast and more...",
          backgroundColor: "#EDEDED",
          color: "#123123",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: "Afternoon",
          description: "Lunch and more...",
          backgroundColor: "#333333",
          color: "#FEFEFE",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: "Evening",
          description: "Dinner and more...",
          backgroundColor: "",
          color: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  }
};
