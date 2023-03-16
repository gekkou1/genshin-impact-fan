import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000",
});

// Endpoints constatns

export const ARTIFACTS      = "artifacts";
export const BOSS           = "boss";
export const CHARACATERS    = "characters";
export const CONSUMABLES    = "consumables";
export const DOMAINS        = "domains";
export const ELEMENTS       = "elements";
export const ENEMIES        = "enemies";
export const MATERIALS      = "materials";
export const NATIONS        = "nations";
export const WEAPONS        =  "weapons";
