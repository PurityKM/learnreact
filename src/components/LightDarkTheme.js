import React, { useState } from 'react';


const themes = {
  light: {
    backgroundColor: 'white',
    color: 'black'
  },
  dark: {
    backgroundColor: 'black',
    color: 'white'
  }
};

const ThemeContext = React.createContext();

function LightDarkTheme() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ padding: 20 }}>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

function Content() {
  const { theme } = React.useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.color }}>
      <h1>This is some content</h1>
      <p>It will be displayed in the selected theme</p>
    </div>
  );
}

export default LightDarkTheme;