import React from "react";
import "../gallery/GalleryItem.scss";
import { points } from "../../data";
const GalleryItem = ({ src, index, columnOffset }) => {
  const values = points[index];
  if (!values) return null;
  const [row, column, spanRow, spanColumn] = values;
  return (
    <div
      className="gallery-item"
      style={{
        gridArea: `${row} / ${
          column + columnOffset
        } / span ${spanRow} / span ${spanColumn}`,
      }}
    >
      <div className="gallery-item-image">
        <div
          className="gallery-item-imginner"
          stlye={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
};

export default GalleryItem;
