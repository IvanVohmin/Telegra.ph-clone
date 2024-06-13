import React from 'react';
import Draft from './components/Draft/Draft';
import Controllers from "./components/Controllers/Controllers.jsx";

const App = () => {

  return (
      <div className={"app"}>
          <div className="container">
              <Draft/>
              <Controllers/>
          </div>
      </div>
  );
}

export default App;
