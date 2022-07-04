import React from 'react';
import '../designops.css';
import './index.css';
const sizes = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
];
const properties = {
  xs: { font: 12, line: 16 },
  sm: { font: 14, line: 20 },
  base: { font: 16, line: 24 },
  lg: { font: 18, line: 28 },
  xl: { font: 20, line: 28 },
  '2xl': { font: 24, line: 32 },
  '3xl': { font: 30, line: 36 },
  '4xl': { font: 36, line: 40 },
  '5xl': { font: 48, line: 48 },
  '6xl': { font: 60, line: 60 },
  '7xl': { font: 72, line: 72 },
  '8xl': { font: 96, line: 96 },
  '9xl': { font: 128, line: 128 },
};
const FontSizeDemo = () => {
  return (
    <div className="fontsizes">
      <table>
        <thead>
          <tr>
            <th className="bg-gray-700 text-white">Font Classes</th>
            <th className="bg-gray-700 text-white">Font Examples</th>
            <th className="bg-gray-700 text-white">Font Size</th>
            <th className="bg-gray-700 text-white">Line Height</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((item) => (
            <tr>
              <td className="width15">{`.text-${item}`}</td>
              <td>
                <div className={`text-${item} ellipses`}>
                  Lorem Ipsum is simply dummy text.
                </div>
              </td>
              <td className="width12">{properties[item].font}px</td>
              <td className="width12">{properties[item].line}px</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FontSizeDemo;
