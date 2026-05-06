import './SearchResult.css';

function SearchResult({ results }) {
  return (
    <div className="search-result">
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
  );
}

export default SearchResult;
