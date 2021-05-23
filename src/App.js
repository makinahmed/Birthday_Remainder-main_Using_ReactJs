
import { useState } from 'react';
import data from './Components/Data'
import List from './Components/List'
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
        <button onClick={() => setPeople(
          data
        )}>Restore</button>
      </section>
    </>
  );
}

export default App;
