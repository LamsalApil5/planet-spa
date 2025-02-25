"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
const treatments = [
  {
    name: "Shirodhara Treatment",
    key: "shirodharaTreatment",
    options: [
      { value: "60min", label: "60 min. Rs.6000/-" },
      { value: "90min", label: "90 min. Rs.8000/-" },
      { value: "120min", label: "120 min. Rs.9000/-" },
    ],
  },
  {
    name: "Hot Stone Massage",
    key: "hotStoneMassage",
    options: [
      { value: "60min", label: "60 min. Rs.5000/-" },
      { value: "90min", label: "90 min. Rs.7000/-" },
      { value: "120min", label: "120 min. Rs.8000/-" },
    ],
  },
  {
    name: "Thai Massage",
    key: "thaiMassage",
    options: [
      { value: "60min", label: "60 min. Rs.5000/-" },
      { value: "90min", label: "90 min. Rs.7000/-" },
      { value: "120min", label: "120 min. Rs.8000/-" },
    ],
  },
  {
    name: "Shiatsu Massage",
    key: "shiatsuMassage",
    options: [
      { value: "60min", label: "60 min. Rs.4000/-" },
      { value: "90min", label: "90 min. Rs.6000/-" },
      { value: "120min", label: "120 min. Rs.7500/-" },
    ],
  },
  {
    name: "Deep Tissue Massage",
    key: "deepTissueMassage",
    options: [
      { value: "60min", label: "60 min. Rs.4000/-" },
      { value: "90min", label: "90 min. Rs.6000/-" },
      { value: "120min", label: "120 min. Rs.7500/-" },
    ],
  },
  {
    name: "Aroma Massage",
    key: "aromaMassage",
    options: [
      { value: "60min", label: "60 min. Rs.4000/-" },
      { value: "90min", label: "90 min. Rs.6000/-" },
      { value: "120min", label: "120 min. Rs.7500/-" },
    ],
  },
  {
    name: "Ayurvedic Massage",
    key: "ayurvedicMassage",
    options: [
      { value: "60min", label: "60 min. Rs.3500/-" },
      { value: "90min", label: "90 min. Rs.5200/-" },
      { value: "120min", label: "120 min. Rs.6500/-" },
    ],
  },
  {
    name: "Foot Massage",
    key: "footMassage",
    options: [
      { value: "30min", label: "30 min. Rs.1800/-" },
      { value: "45min", label: "45 min. Rs.2600/-" },
      { value: "60min", label: "60 min. Rs.3500/-" },
    ],
  },
  {
    name: "Body Scrub",
    key: "bodyScrub",
    options: [
      { value: "45min", label: "45 min. Rs.3000/-" },
      { value: "60min", label: "60 min. Rs.4000/-" },
    ],
  },
  {
    name: "Head, Neck & Shoulder",
    key: "headNeckShoulder",
    options: [
      { value: "30min", label: "30 min. Rs.1800/-" },
      { value: "45min", label: "45 min. Rs.2600/-" },
      { value: "60min", label: "60 min. Rs.3500/-" },
    ],
  },
  {
    name: "Spinal Back Massage",
    key: "spinalBackMassage",
    options: [
      { value: "30min", label: "30 min. Rs.1800/-" },
      { value: "45min", label: "45 min. Rs.2600/-" },
      { value: "60min", label: "60 min. Rs.3500/-" },
    ],
  },
  {
    name: "Facial",
    key: "facial",
    options: [
      { value: "cleansing", label: "Face Cleansing Rs.1000/-" },
      { value: "fruitGlow", label: "Fruit Glow Facial - Rs. 2000/-" },
      { value: "golden", label: "Glorious Golden Facial - Rs. 2500/-" },
      { value: "diamondGlow", label: "Diamond Glow Facial - Rs. 3000/-" },
    ],
  },
  {
    name: "Manicure/Pedicure",
    key: "manicurePedicure",
    options: [
      { value: "manicure", label: "Manicure Rs.2200/-" },
      { value: "pedicure", label: "Pedicure Rs.2500/-" },
      { value: "nailPolish", label: "Nail Polish Rs.500/-" },
    ],
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
  spaPackage: string;
  saunaSteam: boolean;
  treatments: { [key: string]: string };
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
    spaPackage: "",
    saunaSteam: false,
    treatments: treatments.reduce((acc, treatment) => {
      acc[treatment.key] = "";
      return acc;
    }, {} as { [key: string]: string }),
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTreatmentChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      treatments: {
        ...prev.treatments,
        [key]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
  };

  return (
    <div className="bg-[#E5D5CC] p-4 md:p-8">
      <Card className="mx-auto shadow-none rounded-none border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Booking Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Choose Date *</Label>
                <Input
                  id="date"
                  name="date"
                  placeholder="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Choose Time *</Label>
                <Input
                  id="time"
                  name="time"
                  placeholder="time"
                  type="time"
                  required
                  value={formData.time}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="message"
                value={formData.message}
                onChange={handleInputChange}
                className="min-h-[100px] bg-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 flex items-end">
                <Checkbox
                  checked={formData.saunaSteam}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      saunaSteam: checked as boolean,
                    }))
                  }
                />
                <Label className="ml-3"> Sauna / Steam Rs. 1000/-</Label>
              </div>

              <div className="space-y-2">
                <Label>Spa Package</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, spaPackage: value })
                  }
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="basic">Basic Package</SelectItem>
                    <SelectItem value="premium">Premium Package</SelectItem>
                    <SelectItem value="luxury">Luxury Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Treatment Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatments.map(({ name, key, options }) => (
                <div key={key} className="space-y-2">
                  <Label>{name}</Label>
                  <RadioGroup
                    onValueChange={(value) => handleTreatmentChange(value, key)}
                  >
                    {options.map(({ value, label }) => (
                      <div key={value} className="flex items-center space-x-2">
                        <RadioGroupItem value={value} id={`${key}-${value}`} />
                        <Label htmlFor={`${key}-${value}`}>{label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#496F5D] hover:bg-[#3A5849]"
            >
              Submit Booking
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
