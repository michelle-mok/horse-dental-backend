import { resolve } from 'path';
import db from './models/index.mjs';
import initOwnersController from './controllers/owners.mjs';
import initHorsesController from './controllers/horses.mjs';
// import initBillsController from './controllers/bills.mjs';

export default function routes(app) {
  const OwnersController = initOwnersController(db);
  const HorsesController = initHorsesController(db);
//   const BillsController = initBillsController(db);

  app.get('/owners', OwnersController.ownerList);
  app.get('/ownersHorses/:id', HorsesController.horseList);
//   app.get('/horse-details/:id', HorsesController.horseDetails);
//   app.get('/horse-problems', HorsesController.horseProblems);
//   app.post('/add-new-report', HorsesController.addNewReport);
//   app.get('/charges', BillsController.chargeList);
//   app.post('/new-bill', BillsController.addBill);
//   app.get('/behaviours', HorsesController.alerts);
//   app.post('/edit-alerts', HorsesController.editBehaviour);
//   app.post('/add-new-owner', OwnersController.newOwner);
//   app.post('/add-new-horse/:id', HorsesController.newHorse);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
