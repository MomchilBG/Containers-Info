import './App.css';
import { useState } from 'react';
import { getItemLocation } from './services/db_services.js';

function App() {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (input) => {
    setInputValue(input);
  };

  const onSearch = async () => {
    try {
      const location = await getItemLocation(inputValue);
      console.log(inputValue, typeof inputValue);
      console.log(location);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        id="search-bar"
        placeholder="Search by SIS code..."
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default App;
