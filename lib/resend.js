"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const { name, phone, email, message } = formData;
  const htmlContent = `
    <h2>New Enquiry Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  await resend.emails.send({
    to: "contact@innoquest.in",
    from: "New Enquiry <onboarding@resend.dev>",
    subject: "New Enquiry",
    html: htmlContent,
  });
};
