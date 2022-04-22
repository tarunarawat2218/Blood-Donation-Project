const path = require('path');
const express = require('express');

const groupController = require('../controller/group');

const router = express.Router();

router.use(express.static(path.join(__dirname, '/public')));

router.get("/", groupController.getSearchGroups);

router.post('/groups',groupController.postSearchGroups);


module.exports =router;
