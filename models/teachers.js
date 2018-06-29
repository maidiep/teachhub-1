module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define("Teacher", {     
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      avgRating: DataTypes.FLOAT,
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    });
     
    return Teacher;
  };