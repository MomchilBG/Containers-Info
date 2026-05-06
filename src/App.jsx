import './App.css';
import { useState } from 'react';
import { getItemLocation } from './services/db_services.js';
import SearchResult from './components/SearchResult.jsx';
import MessageBox from './components/MessageBox.jsx';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onInputChange = (input) => {
    setInputValue(input);
  };

  const onSearch = async () => {
    try {
      if (inputValue.trim() && inputValue.trim() !== searchTerm) {
        setLoading(true);
        const location = await getItemLocation(inputValue);
        setLoading(false);
        setSearchTerm(inputValue);
        setResults(location);
        setError(null);
      }
    } catch (error) {
      setResults([]);
      setError(error.message);
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
        <div className="result-container">
          {loading ? (
            <MessageBox message="Loading..." type="info" />
          ) : searchTerm.length > 0 ? (
            !error && results.length === 0 ? (
              <MessageBox
                message={`Item ${searchTerm} not found in containers.`}
                type="info"
              />
            ) : (
              <SearchResult results={results} />
            )
          ) : (
            <MessageBox
              message="Look up the SIS code of an item and see the container it's in."
              type="info"
            />
          )}
          {error && <MessageBox message={error} type="error-message" />}
        </div>
      </div>
      <p id="footer">Made by Momchi :3</p>
    </>
  );
}

export default App;
