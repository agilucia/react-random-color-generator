// import chalk from 'chalk';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
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
          backgroundColor:
            hue || luminosity
              ? randomColor({ hue: hue, luminosity: luminosity })
              : color,
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
}
