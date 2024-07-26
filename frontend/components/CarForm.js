import { useState } from 'react';

export default function CarForm({ onSubmit }) {
  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="make"
        placeholder="Make"
        value={form.make}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={form.model}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={form.year}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
        Save
      </button>
    </form>
  );
}
