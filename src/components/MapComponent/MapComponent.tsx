import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import populationData from "../../data/populationData";
import { useDispatch } from "react-redux";
import { selectOblast } from "../../store/store";

const MapComponent = () => {
  const [geoData, setGeoData] = useState(null);
  const [roadData, setRoadData] = useState(null); 
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/data/geoBoundaries-UKR-ADM1.geojson")
      .then((response) => response.json())
      .then((data) => setGeoData(data));
  }, []);

  useEffect(() => {
    fetch("/data/roads.json")
      .then((response) => response.json())
      .then((data) => setRoadData(data)); 
  }, []);

  const oblastStyle = {
    color: "#ff7800",
    weight: 2,
    opacity: 1,
    fillColor: "#ffd27f",
    fillOpacity: 0.5,
  };

  const onEachOblast = (feature: any, layer: any) => {
    const oblastName = feature.properties.shapeName;
    const oblastData = populationData.find(
      (oblast) => oblast.name === oblastName
    );

    const popupContent = oblastData
      ? `<strong>${oblastName}</strong><br/>Population: ${oblastData.population.toLocaleString()}`
      : `<strong>${oblastName}</strong><br/>Population: Data not available`;

    layer.bindPopup(popupContent);

    layer.on({
      click: () => {
        dispatch(selectOblast(oblastName));
        layer.openPopup();
      },
      mouseover: (e: any) => {
        e.target.setStyle({
          weight: 3,
          color: "#666",
          fillOpacity: 0.7,
        });
      },
      mouseout: (e: any) => {
        e.target.setStyle({
          weight: 2,
          color: "#ff7800",
          fillOpacity: 0.5,
        });
      },
    });
  };

  return (
    <MapContainer
      center={[48.3794, 31.1656]}
      zoom={6}
      wheelPxPerZoomLevel={100} 
      zoomAnimation={true} 
      zoomAnimationThreshold={2}
      zoomDelta={0.5} 
      zoomSnap={0.5}                  
      style={{ height: '100vh', width: '100%' }}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Humanitarian Map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
        </LayersControl.BaseLayer>

        <LayersControl.Overlay name="Main Roads">
          {roadData && (
            <GeoJSON
              data={roadData}  
              style={{
                color: '#090919',  
                weight: 2,
                opacity: 1,
              }}
            />
          )}
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Oblast Boundaries">
          {geoData && (
            <GeoJSON
              data={geoData}
              style={oblastStyle}
              onEachFeature={onEachOblast}
            />
          )}
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default MapComponent;
