import { object, string, number, date, boolean } from "yup";
//import { Values } from "../../../Interfaces";

export interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
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
  age: 21,
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

const minDate = new Date();
minDate.setDate(minDate.getDate() - 1);
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 90);

export const validationSchema = object().shape({
  firstName: string().required("First name Required"),
  lastName: string().required("Last name Required"),
  email: string().email("Invalid email").required("Email required"),
  age: number()
    .positive("The age has to be postive")
    .integer("The number must be an integer")
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

export const formdef = {
  firstName: {
    width: 2,
  },
  lastName: {
    width: 2,
  },
  email: {
    width: 2,
  },
  phone: {
    width: 2,
  },
  age: {
    width: 2,
  },
  addressLine1: {
    width: 2,
  },
  addressLine2: {
    width: 2,
  },
  city: {
    width: 2,
  },
  state: {
    width: 2,
  },
  country: {
    width: 2,
  },
  arrivalDate: {
    width: 2,
  },
  departureDate: {
    width: 2,
  },
  message: {
    width: 2,
  },
  onOffSwitch: {
    width: 1,
  },
  termsOfService: {
    width: 1,
  },
};
