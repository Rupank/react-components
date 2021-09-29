import { useState } from 'react';
import DropDown from "./components/DropDown";

function App() {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <DropDown setSelected={setSelected} selected={selected} />

      {selected.length > 0 && selected.map(item => <p>{item}</p>)}
    </div>
  );
}

export default App;
