"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form"
import { Input } from "@/shared/components/ui/input"
import { Button } from "@/shared/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { login } from "../../api/auth.api"
import { LoginData } from "../../api/auth.types"
import parsePhoneNumberFromString from "libphonenumber-js"

const FormSchema = z.object({
  fname: z.string().min(1, { message: "First Name is required." }),
  lname: z.string().min(1, { message: "Last Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone_number: z
    .string()
    .regex(/^\+\d+$/, { message: "Phone number must start with '+' and contain only digits." })
    .refine((value) => parsePhoneNumberFromString(value)?.isValid(), {
      message: "Invalid phone number. Ensure it includes the correct country code.",
    }),
  role: z.enum(["Student", "Teacher", "Professional", "Other"], {
    message: "Please select a valid role.",
  }),
  communication_preference: z.enum(["Email", "Phone", "SMS"], {
    message: "Please select a valid communication preference.",
  }),
})

const LoginForm = () => {
  const form = useForm<LoginData>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = (data: LoginData) => {
    login(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-5 pb-4 md:px-4 lg:px-12 lg:pb-8">
        <div className="grid grid-cols-2 gap-6">
          {[
            { id: "fname", label: "First Name", placeholder: "Enter First Name", type: "string" },
            { id: "lname", label: "Last Name", placeholder: "Enter Last Name", type: "string" },
            { id: "email", label: "Email", placeholder: "Enter Email", type: "email" },
            { id: "phone_number", label: "Mobile Number", placeholder: "Enter Mobile Number", type: "tel" },
          ].map((input) => (
            <FormField
              key={input.id}
              control={form.control}
              name={input.id as keyof LoginData}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{input.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={input.placeholder} type={input.type} onChange={field.onChange} />
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
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                <FormLabel>Which Option Best Describes Your Role?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Teacher">Teacher</SelectItem>
                    <SelectItem value="Professional">Professional</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full justify-end pt-8">
          <Button type="submit" className="bg-lime" variant={"custom"}>
            Get Resources
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm
