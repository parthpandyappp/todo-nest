import "./App.css";
import React from "react";
import { Home } from "./pages";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bgColorState } from "./states/bgColorState";

function App() {
  const setBgColor = useSetRecoilState(bgColorState);
  const bgColor = useRecoilValue(bgColorState);
  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
      <Home />
    </div>
  );
}

export default App;
