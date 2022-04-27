import { proxy } from "valtio";

export const carState = proxy({
  current: null,
  items: {
    "280z_Brake_lamp": "#ff0000",
    "280z_CarPaint": "#ff0000",
    "280z_Reverse_lamp": "#ffffff",
    "280z_Carbon": "#ffffff",
    "280z_Windows": "#ffffff",
    "280z_Plastic": "#ffffff",
    "280z_Lens": "#ffffff",
    "280z_Chrome": "#ffffff",
    "280z_Headlight_lamp": "#ffffff",
    "280z_Turnsignal_lamp": "#ffffff",
    "280z_Blackout": "#ffffff",
    "280z_Brakes": "#ffffff",
    SSR_Rim: "#ff0000",
    SSR_Tire: "#ff0000",
    "280z_Textures": "#ffffff",
  },
});
