module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define("Teacher", {     
      name: DataTypes.STRING,
      email: Datatypes.STRING,
      avgRating: Datatypes.FLOAT,
      id: {
        primaryKey: true
      }
    });
     
    return Teacher;
  };