import { useEffect } from "react";
// import {
//   MapContainer,
//   MapConsumer,
//   TileLayer,
//   Popup,
//   Marker,
// } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as ReactLeaflet from "react-leaflet";

import styles from "./Map.module.scss";

import iconMarker2x from "leaflet/dist/images/marker-icon-2x.png";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconMarkerShadow from "leaflet/dist/images/marker-shadow.png";

const { MapContainer, MapConsumer } = ReactLeaflet;

const Map = ({ children, className, ...rest }) => {
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  // Used so that the Leaflet marker images work on page, without this fix the marker images don't load
  // This way we manually import some marker images
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconMarker2x.src,
      iconUrl: iconMarker.src,
      shadowUrl: iconMarkerShadow.src,
    });
  }, []);

  // Use the consumer so that we can dynamically render all of our store locations
  return (
    <MapContainer className={mapClassName} {...rest}>
      <MapConsumer>{(map) => children(ReactLeaflet, map)}</MapConsumer>
    </MapContainer>
  );
};

export default Map;
