module.exports = function(sequelize, DataTypes) {
    var Lesson = sequelize.define("Lesson", {     
      name: {
        type: DataTypes.STRING
      },
      subject: DataTypes.STRING,
      gradeLevel: DataTypes.INTEGER,     
      description: DataTypes.TEXT,
      materials: DataTypes.TEXT,      
      avgRating: DataTypes.INTEGER,
      ratingQuantity: DataTypes.INTEGER,
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    });
     
Lesson.associate = function(models) {    
    Lesson.belongsTo(models.Teacher, {
      foreignKey: "teacherId"
    });
};

    return Lesson;
  };


