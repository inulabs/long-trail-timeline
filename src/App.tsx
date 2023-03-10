import React from 'react';
import './App.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {LatLngExpression} from "leaflet";

function App() {

    const position = [44.130838, -72.672734] as LatLngExpression

    return (
        <div className={"map-container"}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
              <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
          </Marker>
      </MapContainer>
        </div>

  );
}

export default App;
