import Personal from "./personal";
import { useState } from "react";

import "./App.scss";

function App() {
  const [vscode, setVscode] = useState(true);
  console.log(vscode);
  const handleCloseVsCode = () => {
    setVscode(false);
  };
  const handleOpenVscode = () => {
    setVscode(true);
  };
  return (
    <div className="app" style={{ backgroundImage: "url(/desktop.jpg)" }}>
      <button className="app_btn_vscode" onClick={handleOpenVscode}>
        <img className="app_vscode_icon" src="vscode.png" alt="vscode-logo" />
        <p>VS code</p>
      </button>
      <Personal handleCloseVsCode={handleCloseVsCode} vscode={vscode} />
    </div>
  );
}

export default App;
