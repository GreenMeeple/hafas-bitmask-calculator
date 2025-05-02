// src/modes.js

export const modes_DB = {
  1: "🚄<br />ICE/ECE",
  2: "🚄<br />IC/EC",
  4: "🚉<br />FLX/IRE",
  8: "🚆<br />RE/RB",
  16: "🚈<br />S-Bahn",
  32: "🚍<br />Buses",
  64: "⛴️<br />Ferries",
  128: "🚇<br />U-Bahn",
  256: "🚋<br />Trams",
  512: "🚖<br />Taxi",
  1024: "🚶<br />Walking",
};

export const modes_saarVV = {
  1: "🚄<br />ICE/ECE",
  2: "🚄<br />IC/EC",
  4: "🚉<br />IR/L40",
  8: "🚆<br />RE/RB",
  16: "🚈<br />S-Bahn",
  32: "❓<br />Empty",
  64: "🚋<br />Saarbahn",
  128: "🚍<br />Buses",
  256: "🚶<br />Walking",
  512: "🚖<br />Taxi",
  1024: "🚌<br />Schulbus",
};

export const modes_lux = {
  1: "🚄<br />TGV",
  2: "🚄<br />IC",
  4: "🚆<br />RE/RB",
  8: "❓<br />Empty",
  16: "❓<br />Empty",
  32: "🚍<br />Buses",
  64: "❓<br />Empty",
  128: "❓<br />Empty",
  256: "🚋<br />Trams",
  512: "❓<br />Empty",
  1024: "❓<br />Empty",
};

export const modes_hafas = {
  1: "🚄<br />High Speed Trains",
  2: "🚄<br />Intercity- and Eurocitytrains",
  4: "🚆<br />Regional and other trains",
  8: "🚍<br />Buses",
  16: "⛴️<br />Watercraft",
  32: "🚖<br />Taxi",
  64: "🚠<br />Gondola",
  128: "✈️<br />Aircraft",
  256: "🚗<br />Car",
  512: "🚲<br />Bicycle",
  1024: "🚶<br />Walking",
};

export const modes_VSN = {
  1: "🚄<br />ICE/ECE",
  2: "🚄<br />IC/EC",
  4: "🚉<br />IR/L40",
  8: "🚆<br />RE/RB",
  16: "🚈<br />S-Bahn",
  32: "🚍<br />Buses",
  64: "⛴️<br />Ferries",
  128: "🚇<br />U-Bahn",
  256: "🚋<br />Trams",
  512: "🚖<br />Taxi",
  1024: "🚶<br />Walking",
};

export const modeSets = {
  saarVV: modes_saarVV,
  Luxembourg: modes_lux,
  hafas_client: modes_hafas,
  DB: modes_DB,
  VSN: modes_VSN,
};
