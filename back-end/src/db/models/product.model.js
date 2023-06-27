const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreingKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: 'idCategory', as: 'category'
    })
  }

  return Product
}

module.exports = ProductModel