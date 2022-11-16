type type_formdef_member = {
  width: number;
  muiComponent: "Switch" | "TextField" | "Masked";
};
export type type_formdef = {
  [key: string]: type_formdef_member;
};
