const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();

router.get('/', async (req, res) => {
  // const users = await prisma.user.findMany();
  // res.json(users);

  res.send('empty');
});

module.exports = router;
