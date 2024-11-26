"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { redirect } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HeroSection from "@/components/HeroSection";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store";
import { useEffect } from "react";
import Image from "next/image";

const padding = "px-4 md:px-4 lg:px-12";

const inputs = [
  {
    label: "First Name",
    placeholder: "Enter First Name",
    type: "string",
    id: "fname",
  },
  {
    label: "Last Name",
    placeholder: "Enter Last Name",
    type: "string",
    id: "lname",
  },
  { label: "Email", placeholder: "Enter Email", type: "email", id: "email" },
  {
    label: "Mobile Number",
    placeholder: "Enter Mobile Number",
    type: "tel",
    id: "phone_number",
  },
];

const FormSchema = z.object({
  fname: z.string().min(1, {
    message: "First Name is required.",
  }),
  lname: z.string().min(1, {
    message: "Last Name is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  role: z.enum(["Student", "Teacher", "Professional", "Other"], {
    message: "Please select a valid role.",
  }),
  communication_preference: z.enum(["Email", "Phone", "SMS"], {
    message: "Please select a valid communication preference.",
  }),
  phone_number: z
    .string()
    .min(10, { message: "Mobile Number must be at least 10 digits." })
    .regex(/^\d+$/, { message: "Mobile Number must contain only numbers." }),
});

const Page = () => {
  const { isLoggedIn, setIsLoggedIn } = useUserStore(state => state);
  useEffect(() => {
    console.log("Isloggedin : ", isLoggedIn);
  }, [isLoggedIn]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setIsLoggedIn(true);
    document.cookie = "isLoggedIn=true; path=/; max-age=86400";
    redirect("/categories");
  }
  return (
    <>
      <HeroSection />
      <div className="flex-1 ">
        <Dialog open={true}>
          <DialogContent
            showCloseButton={false}
            className="w-full max-w-screen-sm lg:max-w-4xl xl:max-w-5xl p-0 pb-4 lg:pb-12"
          >
            <DialogHeader
              className={`flex gap-2 w-full bg-lime ${padding} sm:py-8 lg:py-4 flex-row sm:rounded-t-lg py-4 text-left relative gap-0`} // Make parent container relative
            >
              <div className={`flex flex-col`}>
                <DialogTitle className="hidden" />
                <h2 className="text-[2.25rem]">
                  Log in to access free resources
                </h2>
                <p className="font-poppinsExtraBold w-full lg:w-[95%]">
                  No need to create a password! Simply tell us more about
                  yourself so that we can show you the resources you need most.
                </p>
              </div>
              <div className="w-0 lg:min-w-[230px]"></div>
              <div className="absolute hidden lg:flex gap-[-12px]  items-end right-0 bottom-0">
                <Image
                  src="/Meerkat_3.png"
                  width={100}
                  height={200}
                  alt="Meerkat"
                />

                <div className="relative right-6 flex items-end">
                  <Image
                    src="/Meerkat_2.png"
                    width={95}
                    height={150}
                    alt="Meerkat"
                  />
                  <Image
                    src="/Meerkat_1.png"
                    width={70}
                    height={100}
                    alt="Meerkat"
                    className="relative right-4"
                  />
                </div>
              </div>
              <DialogDescription />
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div
                  className={`grid grid-cols-2 lg:grid-cols-2 gap-4 ${padding} pb-4 lg:pb-8`}
                >
                  {inputs.map(input => (
                    <FormField
                      key={input.id}
                      control={form.control}
                      name={
                        input.id as "fname" | "lname" | "email" | "phone_number"
                      }
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{input.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={input.placeholder}
                              type={input.type}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}

                  <FormField
                    control={form.control}
                    name="communication_preference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Communication Preference</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Please Select one" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Email">Email</SelectItem>
                            <SelectItem value="Phone">Phone</SelectItem>
                            <SelectItem value="SMS">SMS</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Which Option Best Describes Your Role?
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Please Select one" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Student">Student</SelectItem>
                            <SelectItem value="Teacher">Teacher</SelectItem>
                            <SelectItem value="Professional">
                              Professional
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className={`flex justify-end ${padding}`}>
                  <Button type="submit" variant="custom" className="bg-lime">
                    Get Resources
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Page;
