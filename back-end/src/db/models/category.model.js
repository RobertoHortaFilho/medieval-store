const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
  }, {
    timestamps: false,
    tableName: 'categories'
  });

  Category.associate = (models) => {
    Category.hasMany(models.Product,
     { foreignKey: 'idCategory', as: 'productList' });
  };

  return Category
}

module.exports = CategoryModel;