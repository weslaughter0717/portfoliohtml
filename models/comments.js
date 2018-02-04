'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    name: DataTypes.STRING,
    text: DataTypes.TEXT,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comments;
};