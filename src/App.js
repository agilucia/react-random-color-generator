import randomColor from 'randomcolor';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const buttonStyles = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <h1 css={buttonStyles()}>Random Color Generator</h1>
      <div css={buttonStyles()}>
        <button
          onClick={() => {
            setColor(randomColor());
          }}
        >
          Generate
        </button>
      </div>
      <div
        style={{
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
}
