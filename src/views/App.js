import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBox from "../components/SearchBox";

const App = () => {
  const [username, setUsername] = useState(null);

  const handleSearch = (value) => {
    setUsername(value);
  };

  useEffect(() => {
    if (username) console.log(username);
  }, [username]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBox
          placeholder="What's on your mind"
          handleSearch={handleSearch}
        />
      </header>
    </div>
  );
};

export default App;
