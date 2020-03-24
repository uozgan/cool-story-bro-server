"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Breakfast",
          content: "Grilled halloumi with oliveoiled tomatoes",
          imageUrl:
            "https://iasbh.tmgrup.com.tr/7b4e55/812/467/0/11/430/258?u=http://i.tmgrup.com.tr/sfr/2012/02/09/430x270/487828353145.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 1
        },
        {
          name: "Lunch",
          content: "Tuna fish salad",
          imageUrl:
            "https://i.pinimg.com/originals/0d/64/c1/0d64c162d819643175fd5a8d1ac2c412.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 2
        },
        {
          name: "Dinner",
          content: "Ribeye steak",
          imageUrl:
            "https://static01.nyt.com/images/2018/02/14/dining/14Kitchen1/merlin_133154163_ac1cede9-18ea-4811-a543-0a7fa6855b66-articleLarge.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 3
        },
        {
          name: "Football Night",
          content: "Watch football with friends and hangout",
          imageUrl:
            "https://elements-video-cover-images-0.imgix.net/files/243984242/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=3fa293115a30b69e9b64f9cf86b8f1bf",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 3
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  }
};
