import React, { Component } from "react";

const AppContext = React.createContext({
  folders: [],
  notes: [],
  getData: () => {},
});

export default AppContext;
