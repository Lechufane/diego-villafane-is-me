import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

interface Props {
  mapMessage: string;
}

const MapChart: React.FC<Props> = ({ mapMessage }: Props): JSX.Element => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [50.0, 10, -10],
        center: [-5, -3],
        scale: 450,
      }}
      style={{
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
    >
      <Geographies
        geography="/features/features.json"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-68.822, -32.889]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {mapMessage}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
