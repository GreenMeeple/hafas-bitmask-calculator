import { useState } from "react";
import { modeSets } from "./modes";
import saarVV from "./assets/saarVV.png";
import lux from "./assets/lux.png";
import "./App.css";

function App() {
  const [bitmask, setBitmask] = useState(0);
  const [warning, setWarning] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedSet, setSelectedSet] = useState("saarVV"); // default

  const handleBitmaskChange = (e) => {
    const raw = e.target.value;
    const num = parseInt(raw, 10);

    if (!isNaN(num)) {
      const capped = Math.min(num, 2047);
      setWarning(num > 2047);
      setBitmask(capped);
      setInputValue(capped.toString());
    } else {
      setWarning(false);
      setBitmask(0);
      setInputValue("");
    }
  };

  const toggleBit = (bit) => {
    const toggled = bitmask ^ bit;
    setBitmask(toggled);
    setInputValue(toggled.toString());
    setWarning(toggled > 2047);
  };

  const currentModes = modeSets[selectedSet];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>HAFAS Bitmask Calculator</h1>

      <p style={{ marginBottom: "1rem", fontSize: "1rem", color: "#D3D3D3" }}>
        This tool helps you <strong>decode</strong> a binary bitmask into included transport modes by simply typing the corresponding 
        decimal numbers, or <strong>encode</strong> the transport modes into a binary bitmask by clicking the corresponding icon below.
      </p>
      {warning && (
        <p style={{ color: "red", marginTop: "0.5rem" }}>
          ⚠️ Max bitmask is 2047 — capped your input.
        </p>
      )}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          marginBottom: "1rem",
          flexWrap: "wrap", // allow wrapping on small screens
        }}
      >
        {/* Mode Set Selector */}
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          Choose Mode Set:
          <select
            value={selectedSet}
            onChange={(e) => setSelectedSet(e.target.value)}
            style={{ padding: "0.5rem", fontSize: "1rem" }}
          >
            {Object.keys(modeSets).map((setName) => (
              <option key={setName} value={setName}>
                {setName}
              </option>
            ))}
          </select>
        </label>

        {/* Bitmask Input */}
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Enter a bitmask (0–2047)"
          value={inputValue}
          onChange={handleBitmaskChange}
          style={{
            flexGrow: 1,
            padding: "0.5rem",
            fontSize: "1.2rem",
            minWidth: "200px",
          }}
        />
      </div>
      <h2>{bitmask} in binary is: {bitmask.toString(2).padStart(11, "0")}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(11, 1fr)",
          gap: "0.5rem",
          marginBottom: "1rem",
          cursor: "pointer",
        }}
      >
        {Object.entries(currentModes)
          .sort((a, b) => b[0] - a[0])
          .map(([bit, label]) => {
            const isOn = (bitmask & bit) > 0;

            return (
              <div
                key={bit}
                onClick={() => toggleBit(parseInt(bit))}
                style={{
                  backgroundColor: isOn ? "#FFA756" : "#2d2d2d",
                  color: isOn ? "#000000" : "#aaa",
                  border: "1px solid #444",
                  borderRadius: "6px",
                  padding: "0.25rem",
                  textAlign: "center",
                  fontSize: "0.68rem",
                  fontWeight: isOn ? "bold" : "normal",
                  minWidth: 0,
                  userSelect: "none",
                }}
              >
                <div style={{ fontSize: "0.8rem", opacity: 0.9, color: isOn ? "#666666" : "#aaa" }}>{bit}</div>
                <div style={{ fontSize: "1.5rem" }}>{isOn ? "1" : "0"}</div>
                <div
                  dangerouslySetInnerHTML={{ __html: label }}
                  style={{ lineHeight: "1.5", marginTop: "0.25rem" }}
                ></div>
              </div>
            );
          })}
      </div>
      <p style={{ marginBottom: "1rem", fontSize: "1rem", color: "#D3D3D3" }}>
        <a href="https://de.wikipedia.org/wiki/HAFAS" target="_blank" rel="noopener noreferrer"> HAFAS (HaCon Fahrplan-Auskunfts-System) </a> 
        is a timetable information software developed by
        <a href="https://www.hacon.de/en" target="_blank" rel="noopener noreferrer"> HaCon (Hannover Consulting)</a>.
        HAFAS is a widely used system for journey planning 
        in public transport networks, such as 
        <a href="https://www.bahn.com/en" target="_blank" rel="noopener noreferrer"> Deutsche Bahn (DB) </a> 
        and many regional authorities like 
        <a href="https://saarvv.de/" target="_blank" rel="noopener noreferrer"> SaarVV</a>.  
        In HAFAS APIs, transport modes (like ICE trains, S-Bahn, buses, ferries) are often encoded using a 
        <strong> bitmask</strong> — a number where each bit represents a transport type. 
        <br /><br />
        For more technical background, see the 
        <a href="https://github.com/public-transport/hafas-client/tree/main" target="_blank" rel="noopener noreferrer"> hafas-client </a>
        by <a href="https://transport.rest/" target="_blank" rel="noopener noreferrer"> transport.rest transit APIs</a>.
      </p>
      <h3>Bitmask use-case examples:</h3>
      <img src={saarVV} alt="saarvv_eg" style={{ height: "400px", padding: "15px" }} />
      <img src={lux} alt="lux_eg" style={{ height: "400px", padding: "15px" }} />
      <footer>
        <div style={{ alignItems: "center", paddingTop: "15px" }}>
          <p style={{ margin: 0 }}>
            <a href="https://greenmeeple.github.io/">
              <img
                src="https://greenmeeple.github.io/img/logo.png"
                alt="GreenMeeple"
                height="32"
                style={{ verticalAlign: "middle" }}
              />
            </a>
            <span style={{ marginLeft: "0.5rem" }}>© 2025 Alex Li</span>
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
