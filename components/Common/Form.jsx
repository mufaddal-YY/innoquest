"use client";
import React from "react";
import { Button } from "../ui/button";

const ContactForm = () => {
  function onSubmit() {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="rounded-full text-white text-xs font-light w-full p-3 bg-transparent border border-[#E36C0A] placeholder:text-sm placeholder:font-light placeholder:px-2 placeholder:text-gray-300"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          name="name"
          placeholder="Phone Number"
          className="rounded-full text-white text-xs font-light w-full p-3 bg-transparent border border-[#E36C0A] placeholder:text-sm placeholder:font-light placeholder:px-2 placeholder:text-gray-300"
        />
      </div>
      <div className="w-full">
        <input
          type="textarea"
          name="name"
          placeholder="Email"
          className="rounded-full text-white text-xs font-light w-full p-3 bg-transparent border border-[#E36C0A] placeholder:text-sm placeholder:font-light placeholder:px-2 placeholder:text-gray-300"
        />
      </div>
      <div className="w-full">
        <textarea
          type="textarea"
          name="name"
          placeholder="Message..."
          className="rounded-[20px] h-[100px] text-white text-xs font-light w-full p-3 bg-transparent border border-[#E36C0A] placeholder:text-sm placeholder:font-light placeholder:px-2 placeholder:text-gray-300"
        />
      </div>

      <div>
        <Button type="submit" className="bg-[#E36C0A] rounded-full px-4 hover:border hover:border-[#E36C0A]">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
