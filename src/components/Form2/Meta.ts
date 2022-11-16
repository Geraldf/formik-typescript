import { ReactElement } from "react";
import { object, string, number, date, boolean } from "yup";
import { type_formdef } from "./types";

export interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  arrivalDate: string;
  departureDate: string;
  message: string;
  onOffSwitch: boolean;
  termsOfService: boolean;
}
export const initialFormState: Values = {
  firstName: "Vorname",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  message: "",
  onOffSwitch: true,
  termsOfService: false,
};

// validationSchema
// Only used in Native, not in New-MUI -->
// No min/max needed in validationSchema either
const minDate = new Date();
minDate.setDate(minDate.getDate() - 1);
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 90);

export const validationSchema = object().shape({
  firstName: string().required("First name Required"),
  lastName: string().required("Last name Required"),
  email: string().email("Invalid email").required("Email required"),
  age: string()
    .matches(
      /^(?:(?!_).)*$/,
      "Field must be filled completly (no '_' must be left"
    )
    .required("Phone number required"),

  phone: number()
    .positive("The number must be positive")
    .integer("The number must be an integer")
    .typeError("Please enter a valid phone number")
    .required("Phone number required"),
  addressLine1: string().required("Address required"),
  addressLine2: string(),
  city: string().required("City required"),
  state: string().required("State required"),
  country: string().required("Country required"),
  arrivalDate: date()
    .required("Date of arrival required")
    .max(maxDate, "Reservation must be within 90 days")
    .min(minDate, "Cannot use past days"),
  departureDate: date()
    .required("Date of departure required")
    .max(maxDate, "Reservation must be within 90 days")
    .min(minDate, "Cannot use past days"),
  message: string(),
  onOffSwitch: boolean(),
  termsOfService: boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

export const formdef: type_formdef = {
  firstName: {
    width: 1,
    muiComponent: "TextField",
  },
  lastName: {
    width: 1,
    muiComponent: "TextField",
  },
  email: {
    width: 1,
    muiComponent: "TextField",
  },
  phone: {
    width: 1,
    muiComponent: "TextField",
  },
  age: {
    width: 2,
    muiComponent: "Masked",
  },
  addressLine1: {
    width: 2,
    muiComponent: "TextField",
  },
  addressLine2: {
    width: 2,
    muiComponent: "TextField",
  },
  city: {
    width: 2,
    muiComponent: "TextField",
  },
  state: {
    width: 2,
    muiComponent: "TextField",
  },
  country: {
    width: 2,
    muiComponent: "TextField",
  },
  arrivalDate: {
    width: 2,
    muiComponent: "TextField",
  },
  departureDate: {
    width: 2,
    muiComponent: "TextField",
  },
  message: {
    width: 2,
    muiComponent: "TextField",
  },
  onOffSwitch: {
    width: 3,
    muiComponent: "Switch",
  },
  termsOfService: {
    width: 3,
    muiComponent: "Switch",
  },
};
