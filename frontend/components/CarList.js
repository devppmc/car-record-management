import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import CarForm from './CarForm';

export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const response = await axios.get('/api/cars');
    setCars(response.data);
  };

  const addCar = async (car) => {
    const response = await axios.post('/api/cars', car);
    setCars((prevCars) => [...prevCars, response.data]);
  };

  return (
    <div>
      <CarForm onSubmit={addCar} />
      <ul className="space-y-4 mt-4">
        {cars.map((car) => (
          <li key={car._id} className="p-4 bg-white rounded shadow">
            <Link href={`/car/${car._id}`}>
              <a>
                {car.year} {car.make} {car.model}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
