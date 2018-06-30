module.exports = function(sequelize, DataTypes) {
    var Rating = sequelize.define("Rating", {     
      stars: DataTypes.INTEGER,
      comments: DataTypes.TEXT,
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
    });
     
Rating.associate = function(models) {    
    Rating.belongsTo(models.Teacher, {
      foreignKey: "teacherId"
    });
    Rating.belongsTo(models.Lesson, {
        foreingKey: "lessonId"
    });
};

    return Rating;
  };