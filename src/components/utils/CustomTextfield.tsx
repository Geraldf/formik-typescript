import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// export const validationSchema = yup.object({
//   email: yup
//     .string()
//     .email("Enter a valid email")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });

export const CustomTextfield = styled(TextField)({
  // your custom styles go here
  padding: "5px",
}) as typeof TextField;
