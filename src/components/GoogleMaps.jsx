import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 56.955778,
  lng: 23.990742,
};

const locations = [
  { lat: 56.96220491443849, lng: 23.709832663851714, title: "Daina" },
  { lat: 56.94646490352656, lng: 24.113962185869767, title: "Wellton Riga" },
];

const customIcon = {
  url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
  scaledSize: { width: 40, height: 40 },
  labelOrigin: { x: 20, y: -10 },
};
const apiKey = "AIzaSyAKqxQnUrxto1FFkJkZ0c11QqplsjGA6Ao";

export const GoogleMaps = () => {
  const [map, setMap] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const handleMarkerClick = (lat, lng) => {
    if (map) {
      map.panTo({ lat, lng });
      map.setZoom(15);
    }
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "330px" }}
        center={center}
        onLoad={onLoad}
        zoom={10}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.title}
            label={{
              text: location.title,
              color: "#000000",
              fontWeight: "bold",
              fontSize: "14px",
              fontFamily: "Poppins, sans-serif",
            }}
            onClick={() => handleMarkerClick(location.lat, location.lng)}
            icon={customIcon}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};
