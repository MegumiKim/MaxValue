import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ContactForm() {
  // Form Validation
  const contactSchema = yup.object().shape({
    name: yup.string().required(),
    subject: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().min(4).max(100).required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name" {...register("name")} />
      <p className="error">{errors.name?.message}</p>
      <input type="text" placeholder="Subject" {...register("subject")} />
      <p>{errors.subject?.message}</p>
      <input type="email" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="text" placeholder="Message" {...register("message")} />
      <p>{errors.message?.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
