import randomColor from 'randomcolor';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const divStyles = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const buttonStyles = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <h1 css={divStyles}>Random Color Generator</h1>
      <button
        css={buttonStyles}
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>
      <div css={divStyles()} style={{ backgroundColor: color }}>
        Generated Color: {color}
      </div>
    </div>
  );
}
