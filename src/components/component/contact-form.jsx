import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to an API
  };

  return (
    <div className="rtl w-full md:w-2/4 px-6 space-y-6 font-Tajawal text-[#35506F] ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label className="text-right" htmlFor="name">
            الإسم و اللقب:
          </Label>
          <Input
            id="name"
            placeholder="أدخل اسمك و لقبك"
            className="outline-none"
            {...register("name", { required: "هذا الحقل مطلوب" })}
          />
          {errors.name && <p className="text-red-500 text-right">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label className="text-right" htmlFor="email">
            البريد الالكتروني:
          </Label>
          <Input
            id="email"
            placeholder="أدخل بريدك الإلكتروني"
            type="email"
            className="outline-none"
            {...register("email", {
              required: "هذا الحقل مطلوب",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "البريد الإلكتروني غير صحيح"
              }
            })}
          />
          {errors.email && <p className="text-red-500 text-right">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label className="text-right" htmlFor="message">
            الرسالة:
          </Label>
          <Textarea
            className="min-h-[100px] outline-none"
            id="message"
            placeholder="أدخل رسالتك"
            {...register("message", { required: "هذا الحقل مطلوب" })}
          />
          {errors.message && <p className="text-red-500 text-right">{errors.message.message}</p>}
        </div>
        <Button className="w-full bg-[#50C3B1] hover:bg-[#50C3B1] md:hover:bg-[#5fd5c3]" type="submit">
          أرسل
        </Button>
      </form>
    </div>
  );
}
