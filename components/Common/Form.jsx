"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { sendEmail } from "@/lib/resend";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {  Form,  FormControl,  FormField,  FormItem,  FormMessage} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(50),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {

    setIsLoading(true);
    try {
      await sendEmail(data);
      toast.success("Email Sent Successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to send email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Name"
                      {...field}
                      className="rounded-full text-white text-xs font-light w-full p-2 bg-transparent border border-[#E36C0A] placeholder:text-xs placeholder:font-light  placeholder:text-gray-300"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full">
                    <input
                      {...field}
                      type="text"
                      placeholder="Phone Number"
                      className="rounded-full text-white text-xs font-light w-full p-2 bg-transparent border border-[#E36C0A] placeholder:text-xs placeholder:font-light  placeholder:text-gray-300"
                    />
                  </div>
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
                <FormControl>
                  <div className="w-full">
                    <input
                      {...field}
                      type="text"
                      placeholder="Email"
                      className="rounded-full text-white text-xs font-light w-full p-2 bg-transparent border border-[#E36C0A] placeholder:text-xs placeholder:font-light  placeholder:text-gray-300"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full">
                    <textarea
                      {...field}
                      type="textarea"
                      placeholder="Message..."
                      className="rounded-[20px] h-[80px] text-white text-xs font-light w-full p-2 bg-transparent border border-[#E36C0A] placeholder:text-xs placeholder:font-light placeholder:text-gray-300"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading}
            className={`bg-[#E36C0A] rounded-full px-4 border border-[#E36C0A] ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
