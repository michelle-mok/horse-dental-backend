module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('owners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gst: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('horses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      photo: {
        type: Sequelize.STRING,
      },
      mra_number: {
        type: Sequelize.STRING,
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      owner_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'owners',
          key: 'id',
        },
      },
      warnings: {
        type: Sequelize.STRING,
      },
      problems: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      report: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      owner_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'owners',
        key: 'id',
        },
      },
      horse_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'horses',
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      horse_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'horses',
          key: 'id',
        },
      },
      date: {
        type: Sequelize.DATE,
      },
      appointment_made: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    
    // await queryInterface.createTable('behaviours', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   name: {
    //     allowNull: false,
    //     type: Sequelize.STRING,
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    // });

    // await queryInterface.createTable('charges', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   name: {
    //     allowNull: false,
    //     type: Sequelize.STRING,
    //   },
    //   price: {
    //     allowNull: false,
    //     type: Sequelize.DECIMAL,
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    // });

    // await queryInterface.createTable('bills', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   horse_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'horses',
    //       key: 'id',
    //     },
    //   },
    //   owner_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'owners',
    //       key: 'id',
    //     },
    //   },
    //   total: {
    //     allowNull: false,
    //     type: Sequelize.DECIMAL,
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    // });

    // await queryInterface.createTable('reports', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   horse_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'horses',
    //       key: 'id',
    //     },
    //   },
    //   // owner_id: {
    //   //   allowNull: false,
    //   //   type: Sequelize.INTEGER,
    //   //   references: {
    //   //     model: 'owners',
    //   //     key: 'id',
    //   //   },
    //   // },
    //   report: {
    //     allowNull: false,
    //     type: Sequelize.STRING,
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    // });

    // await queryInterface.createTable('problems', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   name: {
    //     allowNull: false,
    //     type: Sequelize.STRING,
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    // });

    // await queryInterface.createTable('bill_charges', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   charge_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'charges',
    //       key: 'id',
    //     },
    //   },
    //   quantity: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //   },
    //   bill_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'bills',
    //       key: 'id',
    //     },
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    // });

    // await queryInterface.createTable('horse_problem_reports', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   name: {
    //     allowNull: false,
    //     type: Sequelize.STRING,
    //   },
    //   horse_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'horses',
    //       key: 'id',
    //     },
    //   },
    //   problem_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'problems',
    //       key: 'id',
    //     },
    //   },
    //   report_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'reports',
    //       key: 'id',
    //     },
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    // });

    // await queryInterface.createTable('horse_behaviours', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   horse_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'horses',
    //       key: 'id',
    //     },
    //   },
    //   behaviour_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'behaviours',
    //       key: 'id',
    //     },
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    // });

    // await queryInterface.createTable('horse_owners', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   horse_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'horses',
    //       key: 'id',
    //     },
    //   },
    //   owner_id: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'owners',
    //       key: 'id',
    //     },
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //   },

    // });
  },

  down: async (queryInterface) => {
    // await queryInterface.dropTable('horse_owners', null, {});
    // await queryInterface.dropTable('horse_behaviours', null, {});
    // await queryInterface.dropTable('horse_problems_reports', null, {});
    // await queryInterface.dropTable('bill_charges', null, {});
    // await queryInterface.dropTable('bills', null, {});
    // await queryInterface.dropTable('charges', null, {});
    // await queryInterface.dropTable('reports', null, {});
    // await queryInterface.dropTable('behaviours', null, {});
    // await queryInterface.dropTable('problems', null, {});
    await queryInterface.dropTable('horses', null, {});
    await queryInterface.dropTable('owners', null, {});
  },
};
