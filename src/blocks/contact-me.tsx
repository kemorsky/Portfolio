"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { send } from "@/lib/email"
import { formSchema } from "@/lib/schema"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: "",
          email: "",
          message: "",
        },
      })

      const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const validation = formSchema.safeParse(data);
        if (!validation.success) {
          console.error("🚨 Validation failed:", validation.error.format());
          return;
        }
        try {
          await send(validation.data);
          alert("✅ Email sent successfully!"); // Inform the user upon success
        } catch (error) {
            // console.error("🚨 Error sending email:", error);
            alert("🚨 Failed to send email");
        }
      };

  return (
    <div className="w-full bg-Customs-Card inline-flex flex-col items-start justify-center gap-6 px-4 py-3 rounded-xl mx-auto lg:m-0">
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="text-[1.5rem] font-bold text-white">Get in touch with me!</h1>
        <h2 className="text-[0.875rem] text-white/80">Job opportunities, design ideas, or general questions? Ask away! I'll always get back to you as soon as I can.</h2>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} id="contact-me" className="w-full inline-flex flex-col">
        <Form {...form}>
          <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                          <Input {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}/>
          <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                          <Input {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}/>
          <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                          <Textarea className="min-h-[5rem]" placeholder="Your message here..." {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}/>
        </Form>
        <Button type="submit" variant="submit" size="submit" className="self-end mt-4">Submit</Button>
      </form>
    </div>
    
  )
}
