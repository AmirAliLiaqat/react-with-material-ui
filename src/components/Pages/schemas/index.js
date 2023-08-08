import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    fullname: Yup.string().min(2).max(25).required("Please enter your name"),
    number: Yup.number().required("Please enter your phone number"),
    email: Yup.string().email().required("Please enter your email"),
    message: Yup.string().required("Please enter your the message you want to type"),
});