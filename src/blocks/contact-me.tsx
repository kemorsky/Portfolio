"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useActionState } from "react"; // ✅ New import
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

      const [state, formAction] = useActionState(
        async (prevState: { success?: boolean; error?: string } | null, formData: FormData) => {
          // ✅ Ensure FormData values match the Zod schema
          const values = {
            firstName: formData.get("firstName")?.toString().trim() || "",
            email: formData.get("email")?.toString().trim() || "",
            message: formData.get("message")?.toString().trim() || "",
          };
      
          console.log("📨 Form submitted:", values);
      
          // ✅ Validate with Zod before sending
          const validation = formSchema.safeParse(values);
          if (!validation.success) {
            console.error("🚨 Validation failed:", validation.error.format());
            return { success: false, error: "Invalid form data. Please check your inputs." };
          }
      
          try {
            await send(validation.data); // ✅ Pass validated data
            return { success: true };
          } catch (error) {
            console.error("🚨 Error sending email:", error);
            return { success: false, error: "Failed to send email" };
          }
        },
        null
      );
      


  return (
    <div className="w-full inline-flex flex-col items-start justify-center gap-3">
      <h1 className="text-3xl text-white">Want to contact me?</h1>
      <h2 className="text-2xl text-gray-100">Send me an email!</h2>

      <Form {...form}>
      <form action={formAction} id="contact-me" className="w-full max-w-[35rem] space-y-4 bg-blue-200 px-4 py-3 rounded-xl mx-auto lg:m-0">
        <div className="w-full inline-flex flex-col sm:flex-row items-start md:items-center justify-center gap-4">
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
            )}
            />
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
                )}
            />
        </div>
        
        <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                        <Textarea className="min-h-[8rem]" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <Button type="submit">Submit</Button>
          {state?.success && <p className="text-green-500">✅ Email sent successfully!</p>}
          {state?.error && <p className="text-red-500">🚨 {state.error}</p>}
      </form>
    </Form>
    </div>
    
  )
}
