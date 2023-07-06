import React from 'react';
import './App.css';
import "leaflet/dist/leaflet.css";
import {LatLngExpression} from "leaflet";
import GMCMap from "./components/GMCMap";
function App() {

    const position = [44.130838, -72.672734] as LatLngExpression

    return (
        <div className={"map-container"}>
            <GMCMap/>
        </div>

  );
}

export default App;
