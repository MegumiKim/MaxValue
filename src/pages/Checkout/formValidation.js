import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
  name: yup.string().required("Full Name is required"),
  email: yup.string().email().required("Email is required"),
  address: yup
    .string()
    .min(4)
    .required("Address has to be minimum 4 characters"),
  cc: yup
    .number("Please input numbers")
    .integer("Please input numbers")
    .required("Credit Card Number is required"),
});
