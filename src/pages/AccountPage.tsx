import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

const AccountPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="py-[50px] pl-[40px] pr-[80px] h-[calc(100vh-98px)] overflow-y-auto">
      <div className="pb-[20px]">
        <h2 className="font-Poppins font-[600] text-[22px] text-[#454D4A] tracking-[0.24px] leading-[normal]">
          Account
        </h2>
      </div>
      <div className="shadow-boxdropshadow py-[47px] px-[50px] rounded-[10px] max-w-[720px] w-full">
        <div className="flex items-center gap-[15px]">
          <div className="w-[50%]">
            <Label
              htmlFor="FirstName"
              className="font-Poppins font-[400] text-[12px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              First Name *
            </Label>
            <Input
              type="text"
              id="FirstName"
              placeholder="First Name"
              className="focus-visible:ring-offset-[none] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
            />
          </div>
          <div className="w-[50%]">
            <Label
              htmlFor="LastName"
              className="font-Poppins font-[400] text-[12px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Last Name *
            </Label>
            <Input
              type="text"
              id="LastName"
              placeholder="Last Name"
              className="focus-visible:ring-offset-[none] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
            />
          </div>
        </div>
        <div className="pt-[15px]">
          <Label
            htmlFor="EmailAddress"
            className="font-Poppins font-[400] text-[12px] text-[#666] leading-[17px] pb-[5px] inline-block"
          >
            Email Address *
          </Label>
          <Input
            type="email"
            id="EmailAddress"
            placeholder="Email Address"
            className="focus-visible:ring-offset-[none] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
          />
        </div>
        <div className="pt-[15px]">
          <Label
            htmlFor="PhoneNumber"
            className="font-Poppins font-[400] text-[12px] text-[#666] leading-[17px] pb-[5px] inline-block"
          >
            Phone Number
          </Label>
          <Input
            type="number"
            id="PhoneNumber"
            placeholder="Phone Number"
            className="focus-visible:ring-offset-[none] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
          />
        </div>
        <div className="pt-[15px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="font-Poppins font-[400] text-[12px] text-[#666] leading-[17px] pb-[5px] inline-block">
                      Date of birth
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "max-w-[241px] w-full border-[#00000066] pl-3 !m-0 text-left font-normal ",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span className="text-[14px] font-Poppins text-[#a2a2a2] font-[400]">
                                Birthday Date
                              </span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <div className="pt-[15px]">
          <Label
            htmlFor="Gender"
            className="font-Poppins font-[400] text-[12px] text-[#666] leading-[17px] pb-[5px] inline-block"
          >
            Gender
          </Label>
          <Select>
            <SelectTrigger id="Gender">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              className="!focus-visible:ring-offset-[none] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
            >
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="pt-[15px] flex gap-[15px]">
          <div className="w-[50%]">
            <Label
              htmlFor="Language"
              className="font-Poppins font-[400] text-[12px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Language
            </Label>
            <Select>
              <SelectTrigger id="Language">
                <SelectValue placeholder="First Languge" />
              </SelectTrigger>
              <SelectContent
                position="popper"
                className="!focus-visible:ring-offset-[none] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] !border-[#00000066]"
              >
                <SelectItem value="male">English</SelectItem>
                <SelectItem value="female">Hindi</SelectItem>
                <SelectItem value="other">Gujrati</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-[50%]">
            <Label
              htmlFor="Currency"
              className="font-Poppins font-[400] text-[12px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Currency
            </Label>
            <Select>
              <SelectTrigger id="Currency">
                <SelectValue placeholder="Last Currency" />
              </SelectTrigger>
              <SelectContent
                position="popper"
                className="!focus-visible:ring-offset-[none] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] !border-[#00000066]"
              >
                <SelectItem value="male">First Currency</SelectItem>
                <SelectItem value="female">second Currency</SelectItem>
                <SelectItem value="other">threed Currency</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-[30px]">
          <Button className="py-[7px] w-full rounded-[5px] h-auto font-Poppins font-[600] text-[18px] leading-[normal] tracking-[0.27px]">
            Update profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
