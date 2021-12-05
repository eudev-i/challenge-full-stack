module.exports = (conection, DataTypes) =>  {
  const Feedback = conection.define("Feedback", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(200)
    },
    email: {
      type: DataTypes.STRING(200)
    },
    message: {
      type: DataTypes.STRING(3000)
    },
    create_at:{
      type: DataTypes.DATE
    }
  },{
    tableName: "feedbacks",
    timestamps: false
  }
  )
  return Feedback;
}