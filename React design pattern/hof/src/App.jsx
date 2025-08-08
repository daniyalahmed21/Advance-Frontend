// App.jsx
import React, { useState, useEffect } from 'react';
import UserProfile from './components/UserProfile';

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setUserData({ name: 'John Doe', email: 'john.doe@example.com' });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <UserProfile isLoading={isLoading} {...userData} />
    </div>
  );
}

export default App