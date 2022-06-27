import React, { useState } from "react";
import Styles from "./RangeInput.module.scss";

export default function RangeInput({ ranges,onChange }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  return (
    <div className="pb-2 pt-2">
      <div className={`${Styles.inputSlider}`}>
        <span className={Styles.railSlider}></span>
        <span
          className={Styles.trackSlider}
          style={{ width: `${(100 / (ranges.length - 1)) * activeItemIndex}%` }}
        ></span>
        {ranges.map((item, index) => (
          <span
            key={`item-${item}`}
            data-label={`${item}%`}
            className={`${Styles.itemSlider}
              ${activeItemIndex === index && Styles.activeItem}
              ${activeItemIndex > index && Styles.beforeActiveItem}`}
            style={{ right: `${(100 / (ranges.length - 1)) * index}%` }}
            onClick={() => {
              setActiveItemIndex(index);
              onChange(item);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
  