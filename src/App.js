import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <h1>Random Color Generator</h1>
      <button
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>
      <div
        style={{
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
}
