module.exports = function(sequelize, DataTypes) {
    var Ratings = sequelize.define("Ratings", {     
      stars: Datatypes.INTEGER,
      comments: Datatypes.TEXT,
      id: {
        primaryKey: true
      }
    });
     
Lessons.associate = function(models) {    
    Ratings.belongsTo(models.Teacher, {
      foreignKey: "teacherId"
    });
    Ratings.belongsTo(models.Lessons, {
        foreingKey: "lessonId"
    });
};

    return Ratings;
  };