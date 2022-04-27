import { proxy } from "valtio";

export const shoeState = proxy({
  current: null,
  items: {
    laces: "#ff0000",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
});
