"use server";

import { EmailTemplate } from "@/components/ui/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  console.log("send() function started on the server");
  console.log("Email data received:", emailFormData)

  try {
    const response = await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: "kamil.romanowicz95@gmail.com",
      subject: "New Email through portfolio",
      react: await EmailTemplate({ firstName: emailFormData.firstName, email: emailFormData.email, message: emailFormData.message }),
    });

    console.log("Resend response:", response);

    if (response.error) {
        console.error("Resend Error:", response.error);
        throw response.error;
    }
  } catch (e) {
        console.error("Error sending email:", e);
  }
};