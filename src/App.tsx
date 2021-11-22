import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
interface IThemeProps {
  [key: string]: { color: string; background: string };
}

const themes: IThemeProps = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#222",
  },
};

export const ThemeContext = React.createContext(themes.light);

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  return <div className="App"></div>;
};

export default App;
