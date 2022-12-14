import { ReactElement } from "react";
import { object, string, number, date, boolean } from "yup";


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
  onOffSwitch: false,
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


