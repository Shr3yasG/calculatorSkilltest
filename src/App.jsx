import React, { useState, useEffect } from 'react';
import Button from './components/Button';

const App = () => {
  const [input, setInput] = useState('');
  const [pressedKey, setPressedKey] = useState(null);

  const handleClick = (value) => {
    if (/[\+\-\*\/]$/.test(input) && /[\+\-\*\/]/.test(value)) {
      return;
    }
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEquals = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    if (/\d/.test(key)) {
      handleClick(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
      handleClick(key);
    } else if (key === 'Enter') {
      handleEquals();
    } else if (key === 'Backspace') {
      setInput(input.slice(0, -1));
    } else if (key === 'Escape') {
      handleClear();
    }

    setPressedKey(key);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', () => setPressedKey(null));

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', () => setPressedKey(null));
    };
  }, [input]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm">
        <input
          type="text"
          className="w-full bg-black text-white text-3xl p-4 rounded-lg mb-4 text-right"
          value={input}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9'].map((char) => (
            <Button
              key={char}
              value={char}
              onClick={handleClick}
              isPressed={pressedKey === char}
            />
          ))}
          <Button
            value="/"
            onClick={handleClick}
            isPressed={pressedKey === '/'}
            className="bg-orange-500 hover:bg-orange-400"
          />
          {['4', '5', '6'].map((char) => (
            <Button
              key={char}
              value={char}
              onClick={handleClick}
              isPressed={pressedKey === char}
            />
          ))}
          <Button
            value="*"
            onClick={handleClick}
            isPressed={pressedKey === '*'}
            className="bg-orange-500 hover:bg-orange-400"
          />
          {['1', '2', '3'].map((char) => (
            <Button
              key={char}
              value={char}
              onClick={handleClick}
              isPressed={pressedKey === char}
            />
          ))}
          <Button
            value="-"
            onClick={handleClick}
            isPressed={pressedKey === '-'}
            className="bg-orange-500 hover:bg-orange-400"
          />
          <Button
            value="0"
            onClick={handleClick}
            isPressed={pressedKey === '0'}
          />
          <Button
            value="."
            onClick={handleClick}
            isPressed={pressedKey === '.'}
          />
          <Button
            value="+"
            onClick={handleClick}
            isPressed={pressedKey === '+'}
            className="bg-orange-500 hover:bg-orange-400"
          />
          <Button
            value="="
            onClick={handleEquals}
            isPressed={pressedKey === 'Enter'}
            className="bg-orange-500 hover:bg-orange-400"
          />
          <Button
            value="AC"
            onClick={handleClear}
            className="col-span-2 bg-gray-500 hover:bg-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
