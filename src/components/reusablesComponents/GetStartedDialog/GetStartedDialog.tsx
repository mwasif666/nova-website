"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReactCountryFlag from "react-country-flag";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useDialogStore } from "@/store/useDialogStore";

export default function GetStartedDialog() {
  const { isOpen, close } = useDialogStore();

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [countryCode, setCountryCode] = useState("+971");

  // ✅ Your EmailJS credentials
  const SERVICE_ID = "service_8c2k7ti";
  const TEMPLATE_ID = "template_h7xuibk";
  const PUBLIC_KEY = "3YG6dE-agOKbLPnZ1";

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // ✅ Grab values from form
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    if (selectedServices.length < 1) {
      toast.error("Please select at least one service.");
      return;
    }

    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: `${countryCode} ${phone}`,
      user_services: selectedServices.join(", "),
      user_message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        form.reset();
        setSelectedServices([]);
        close();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Try again later.");
      });
  };

  const countryOptions = [
    { iso: "AE", code: "+971" },
    { iso: "US", code: "+1" },
    { iso: "GB", code: "+44" },
    { iso: "AU", code: "+61" },
    { iso: "PK", code: "+92" },
    { iso: "IN", code: "+91" },
    { iso: "SG", code: "+65" },
    { iso: "MY", code: "+60" },
    { iso: "JP", code: "+81" },
    { iso: "DE", code: "+49" },
  ];

  const services = [
    "Crypto Trading",
    "Coin Transactions",
    "NFTs",
    "WEB3 Social Media",
    "Decentralized Finance",
    "Consultancy in WEB3",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className=" sm:max-w-md rounded-2xl shadow-lg p-6 max-h-[85vh] md:max-h-[90vh] overflow-y-auto mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">
            Get Started
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Fill out the form below and our team will reach out to you soon.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Full Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required placeholder="Your Name" />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <div className="flex gap-2 w-full">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent>
                  {countryOptions.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode={c.iso}
                          svg
                          style={{
                            width: "1.25em",
                            height: "1.25em",
                            borderRadius: "2px",
                          }}
                        />
                        {c.code}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="123 456 789"
                className="flex-1"
                required
              />
            </div>
          </div>

          {/* Services */}
          <div className="grid gap-3">
            <Label className="text-sm font-medium">Select Services</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={selectedServices.includes(service)}
                    onCheckedChange={() => handleServiceChange(service)}
                  />
                  <Label
                    htmlFor={service}
                    className="text-sm text-muted-foreground"
                  >
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Your message..."
              rows={4}
            />
          </div>

          {/* Marketing Checkbox */}
          <div className="flex items-start space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing" className="text-sm text-muted-foreground">
              I agree to receive updates and marketing emails.
            </Label>
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="secondary" className="w-full">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
