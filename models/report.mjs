export default function initReportModel(sequelize, DataTypes) {
  return sequelize.define(
    'horse',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      report: {
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
      horseId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'horses',
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