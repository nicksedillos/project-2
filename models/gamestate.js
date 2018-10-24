module.exports = function(sequelize, DataTypes) {
  var GameState = sequelize.define("GameState", {
    position: {
      human: {
        numberX: DataTypes.INTEGER,
        numberY: DataTypes.INTEGER
      },
      zombie: {
        numberX: DataTypes.INTEGER,
        numberY: DataTypes.INTEGER
      }
    },
    facing: {
      human: {
        facing: DataTypes.STRING
      },
      zombie: {
        facing: DataTypes.STRING
      }
    },
    status: {
      human: {
        status: DataTypes.STRING
      },
      zombie: {
        status: DataTypes.STRING
      }
    }

  });
  return GameState;
};
