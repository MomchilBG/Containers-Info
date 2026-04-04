import './App.css';
import { useState } from 'react';
import { getItemLocation } from './services/db_services.js';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const onInputChange = (input) => {
    setInputValue(input);
  };

  const onSearch = async () => {
    try {
      const location = await getItemLocation(inputValue);
      setResults(location);
    } catch (error) {
      console.log(error.message);
      setResults([]);
    }
  };

  return (
    <>
      <div className="app-container">
        <h1>Container Search</h1>
        <div className="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="Search by SIS code..."
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
          />
          <button onClick={onSearch}>Search</button>
        </div>
        {results.length > 0 && (
          <div className="table-container">
            <table className="results-table">
              <thead>
                <tr>
                  <th>SIS Code</th>
                  <th>Container</th>
                </tr>
              </thead>
              <tbody>
                {results.map((item, index) => (
                  <tr key={index}>
                    <td>{item.items?.sis_code || 'N/A'}</td>
                    <td>{item.container_id_fk || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <p id="footer">Made by Momchi</p>
    </>
  );
}

export default App;
