import { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard_NewWidget from './components/Dashboard_NewWidget';
import Dashboard_Right from './components/Dashboard_Right';
import Dashboard_TopRight from './components/Dashboard_TopRight';
import Dashboard_BottomLeft from './components/Dashboard_BottomLeft';
import Dashboard_BottomMiddle from './components/Dashboard_BottomMiddle.jsx';

function App() {
  const [user, setUser] = useState({
    name: 'David',
    surname: 'Divad',
    age: 50,
  });
  return (
    <>
      <Navigation />
      <div className="grid-container">
        <Dashboard_NewWidget user={user} />
        <Dashboard_BottomLeft />
        <Dashboard_BottomMiddle />
        <Dashboard_TopRight />
        <Dashboard_Right />
      </div>
    </>
  );
}

export default App;
