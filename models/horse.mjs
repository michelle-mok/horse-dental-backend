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
      mra_number: {
        type: DataTypes.STRING,
      },
      trainer: {
        type: DataTypes.STRING,
      },
      next_treatment_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      owner_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'owners',
          key: 'id',
        },
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