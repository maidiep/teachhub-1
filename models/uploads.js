module.exports = function(sequelize, DataTypes) {
  var Upload = sequelize.define("Upload", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userName: DataTypes.STRING,
    lessonID: DataTypes.INTEGER
  });

  return Upload;
};
