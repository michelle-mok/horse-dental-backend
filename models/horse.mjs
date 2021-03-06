export default function initHorseModel(sequelize, DataTypes) {
  return sequelize.define(
    'horse',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      photo: {
        type: DataTypes.STRING,
      },
      mraNumber: {
        type: DataTypes.STRING,
      },
      location: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ownerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'owners',
          key: 'id',
        },
      },
      warnings: {
        type: DataTypes.STRING,
      },
      problems: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}