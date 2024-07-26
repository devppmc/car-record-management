const express = require('express');
const router = express.Router();
const Car = require('../models/car');

router.get('/', async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

router.post('/', async (req, res) => {
  const newCar = new Car(req.body);
  await newCar.save();
  res.json(newCar);
});

router.get('/:id', async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.json(car);
});

router.put('/:id', async (req, res) => {
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCar);
});

router.delete('/:id', async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: 'Car deleted' });
});

module.exports = router;
