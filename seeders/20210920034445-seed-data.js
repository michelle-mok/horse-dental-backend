const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    const ownerData = [];
    
    for (let i = 0; i < 50; i += 1) {
      const countries = ['Singapore', 'Hong Kong', 'Australia'];
      const randomNumber = Math.floor(Math.random() * 3);

      const singleOwner = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        country: countries[randomNumber],
        phone_number: faker.phone.phoneNumberFormat(),
        gst: faker.datatype.boolean(),
        created_at: new Date(),
        updated_at: new Date(),
      }

      ownerData.push(singleOwner);
    }

    await queryInterface.bulkInsert('owners', ownerData);

    const horseData = [];

    const warnings = ['bites', 'kicks', 'aggressive', 'do not go into box', 'strikes'];
    const problems = ['parrot mouth', 'tooth decay', 'wave mouth', 'sow mouth', 'caps', 'missing teeth', 'abnormal wear'];
    const mraNumber = `${faker.random.alpha()}${faker.datatype.number()}`;

    for (let j = 0; j < 100; j += 1) {
      const randomId = Math.floor((Math.random() * 50) + 1);
      const singleHorse = {
        name: faker.random.words(),
        photo: faker.image.cats(),
        mra_number: mraNumber,
        next_treatment_date: faker.date.future(),
        owner_id: randomId,
        warnings: warnings[Math.floor(Math.random() * warnings.length)],
        problems: problems[Math.floor(Math.random() * problems.length)],
        created_at: new Date(),
        updated_at: new Date(),
      };
      horseData.push(singleHorse);
    }

    await queryInterface.bulkInsert('horses', horseData);

    // const horseOwnerData = [
    //   {
    //     horse_id: horseData[0].id,
    //     owner_id: ownerData[0].id,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //      horse_id: horseData[1].id,
    //     owner_id: ownerData[0].id,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     horse_id: horseData[2].id,
    //     owner_id: ownerData[1].id,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     horse_id: horseData[3].id,
    //     owner_id: ownerData[2].id,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ];

    // await queryInterface.bulkInsert('horse_owners', horseOwnerData);

    // Define cart data, 2 carts
    // const behaviourData = [
    //   {
    //     name: 'head shy',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'kicks',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'aggressive',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'needs sedation',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'overreacts',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'rears',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ];

    // await queryInterface.bulkInsert('behaviours', behaviourData);

    // // Define cart item data, i.e. put items in cart
    // const problemData = [
    //   {
    //     name: 'tooth decay',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'parrot mouth',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'sheer mouth',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'caudal hooks',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'wolf teeth',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ];

    // await queryInterface.bulkInsert('problems', problemData);

    // const reportData = [
    //   {
    //     horse_id: 1,
    //     report: 'rasped teeth, sharp points',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     horse_id: 2,
    //     report: 'rasped teeth, cuts inside mouth',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     horse_id: 3,
    //     report: 'rasped teeth, removed wolf teeth',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     horse_id: 4,
    //     report: 'rasped teeth, good condition',
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ];

    // await queryInterface.bulkInsert('reports', reportData);

    // const horseBehaviourData = [
    //   {
    //     horse_id: 1,
    //     behaviour_id: 2,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     horse_id: 1,
    //     behaviour_id: 5,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     horse_id: 2,
    //     behaviour_id: 3,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     horse_id: 3,
    //     behaviour_id: 6,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     horse_id: 4,
    //     behaviour_id: 1,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ];

    // await queryInterface.bulkInsert('horse_behaviours', horseBehaviourData);

    // const chargeData = [
    //   {
    //     name: 'basic charge',
    //     price: 80,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'removal of wolf teeth',
    //     price: 20,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'removal of caps',
    //     price: 10,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     name: 'reduction of hooks',
    //     price: 20,
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ];

    // await queryInterface.bulkInsert('charges', chargeData);
  },
  down: async (queryInterface) => {
    // Delete rows from tables with foreign key references first
    // await Promise.all([

    //   queryInterface.bulkDelete('horse_behaviours', null, {}),
    //   queryInterface.bulkDelete('reports', null, {}),

    // ]);
    await Promise.all([
      queryInterface.bulkDelete('horses', null, {}),
      queryInterface.bulkDelete('owners', null, {}),
      // queryInterface.bulkDelete('behaviours', null, {}),
      // queryInterface.bulkDelete('problems', null, {}),

    ]);
  },
};
