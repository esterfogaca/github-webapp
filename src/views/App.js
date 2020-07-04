import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBox from "../components/SearchBox";

const App = () => {
  const [username, setUsername] = useState(null);
  const [result, setResult] = useState(null);

  const handleSearch = (value) => {
    setUsername(value);
  };

  useEffect(() => {
    if (username) {
      const fetchData = async () => {
        const res = await fetch(
          `https://api.github.com/search/users?q=${username}`
        );
        const data = await res.json();
        setResult(data);
      };

      fetchData();
    }
  }, [username]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBox
          placeholder="What's on your mind"
          handleSearch={handleSearch}
        />
        {result && (
          <code>
            {result.items[0] && result.items[0].repos_url && (
              <a href={JSON.stringify(result.items[0].repos_url)}>
                {JSON.stringify(result.items[0].repos_url)}
              </a>
            )}
            {!result.items[0] && "User not found."}
          </code>
        )}
      </header>
    </div>
  );
};

export default App;
