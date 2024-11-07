"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import "@/app/Contact.css"

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-heading">Contact us</h1>
        <form className="contact-form">
          <Label htmlFor="name">Name:</Label>
          <Input
            id="name"
            name="name"
            type="name"
            placeholder="Enter your name"
            required
            className="contact-input"
          />

          <Label htmlFor="email" className="label-spacing">Email:</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="contact-input"
          />

          <Label htmlFor="message" className="label-spacing">Message:</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={3}
            required
            className="contact-textarea"
          />

          <Button
            type="submit"
            className="contact-button"
          >
            Send <FaArrowRightLong />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
