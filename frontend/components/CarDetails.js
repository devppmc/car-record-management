import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CarDetails({ id }) {
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetchCar();
  }, [id]);

  const fetchCar = async () => {
    const response = await axios.get(`/api/cars/${id}`);
    setCar(response.data);
  };

  if (!car) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl">{car.year} {car.make} {car.model}</h2>
      <div>
        <h3 className="text-xl mt-4">Maintenance Records</h3>
        <ul className="list-disc ml-4">
          {car.maintenanceRecords.map((record, index) => (
            <li key={index}>{record.date}: {record.description} - ${record.cost}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl mt-4">Buy/Sell History</h3>
        <ul className="list-disc ml-4">
          {car.buySellHistory.map((event, index) => (
            <li key={index}>{event.date}: {event.event} - ${event.price}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl mt-4">Photos</h3>
        <div className="grid grid-cols-2 gap-4">
          {car.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto" />
          ))}
        </div>
      </div>
    </div>
  );
}
