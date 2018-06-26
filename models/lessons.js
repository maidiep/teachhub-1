module.exports = function(sequelize, DataTypes) {
    var Lessons = sequelize.define("Lessons", {     
      name: DataTypes.STRING,
      subject: Datatypes.STRING,
      gradeLevel: Datatypes.INTEGER,     
      description: Datatypes.TEXT,
      materials: Datatypes.TEXT,      
      avgRating: Datatypes.FLOAT,
      ratingQuantity: Datatypes.INTEGER,
      id: {
        primaryKey: true
      }
    });
     
Lessons.associate = function(models) {    
    Lessons.belongsTo(models.Teacher, {
      foreignKey: "teacherId"
    });
};

    return Lessons;
  };


