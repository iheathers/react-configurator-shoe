// import { useSnapshot } from "valtio";
// import { HexColorPicker } from "react-colorful";

// import "../css/Picker.css";

// import { shoeState } from "../states/shoe-global-state";
// export const Picker = () => {
//   const snap = useSnapshot(shoeState);

//   console.log("picker", snap);

//   return (
//     <div className="picker">
//       <HexColorPicker
//         color={snap.items[snap.current]}
//         onChange={(color) => {
//           shoeState.items[snap.current] = color;
//         }}
//       />
//       <h1>{snap.current}</h1>
//     </div>
//   );
// };

import { useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";

import "../css/Picker.css";

// import { state } from "./shoe-global-state";
import { carState } from "../states/car-global-state";

export const Picker = () => {
  const snap = useSnapshot(carState);

  console.log("picker", snap);

  console.log({ carState });

  return (
    <div className="picker">
      <HexColorPicker
        color={snap.items[snap.current]}
        onChange={(color) => {
          carState.items[snap.current] = color;
        }}
      />
      <h1>{snap.current}</h1>
    </div>
  );
};
