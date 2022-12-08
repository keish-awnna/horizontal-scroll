import React from "react";
import { useRef } from "react";
import { points } from "../data";
import useOnScreen from "../Hooks/useOnScreen";
import cn from "classnames";
import "./style.scss";

const Gallery = ({ src, index, columnOffset }) => {
  const values = points[index];
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  if (!values) return null;

  const [row, column, spanRow, spanColumn] = values;

  // creating function for scroll speed so that different pictures scroll at different times
  const getScrollIndex = () => {
    if (index === 1 || index === 4) return -1;
    if (index === 0 || index === 3) return 0;
    return 1;
  };

  return (
    <div
      className="gallery-item"
      data-scroll
      data-scroll-speed={getScrollIndex()}
      style={{
        gridArea: `${row} / ${
          column + columnOffset
        } / span ${spanRow} / span ${spanColumn}`,
      }}
      ref={ref}
    >
      <div className={cn("gallery-item-image", { reveal: onScreen })}>
        <div
          className="gallery-item-image-inner"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
};

export default Gallery;
