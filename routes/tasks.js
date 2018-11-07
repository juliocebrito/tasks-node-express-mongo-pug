const express = require('express');
const router = express.Router();

const taskCtrl = require('../controllers/tasks');

router.get('/list', taskCtrl.taskList);
router.post('/create', taskCtrl.taskCreate);
router.get('/detail/:id', taskCtrl.taskDetail);
router.post('/update/:id', taskCtrl.taskUpdate);
router.get('/delete/:id', taskCtrl.taskDelete);

module.exports = router;