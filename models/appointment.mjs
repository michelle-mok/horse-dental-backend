export default function initAppointmentModel(sequelize, DataTypes) {
  return sequelize.define(
    'appointment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      horseId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'horses',
          key: 'id',
        },
      },
      date: {
        type: DataTypes.DATE,
      },
      appointment_made: {
        type: DataTypes.BOOLEAN,
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