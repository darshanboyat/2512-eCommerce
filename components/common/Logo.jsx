import * as React from "react";
const Logo = (props) => (
  <svg
    width={100}
    height={50}
    viewBox="0 0 342 382"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={342} height={382} fill="#F5F5F5" />
    <rect width={342} height={382} fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_0_1"
          transform="matrix(0.00292398 0 0 0.0026178 -1.07602 -0.913613)"
        />
      </pattern>
      <image
        id="image0_0_1"
        width={1080}
        height={1080}
        xlinkHref="data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgkwABk8WsAIVVTmgAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);
export default Logo;
