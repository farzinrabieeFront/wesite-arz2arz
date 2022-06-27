import * as Yup from "yup";
const requiredMessage = (name) => `وارد کردن ${name} الزامی است .`;

export const contactUsFormSchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage("نام و نام خانوادگی")),
  phone: Yup.string()
    .required(requiredMessage("شماره تماس"))
    .matches(/^09\d/, "شماره موبایل را با صفر ابتدا وارد کنید.")
    .matches(/^09\d{9}$/, " شماره موبایل نادرست است."),
  subject: Yup.string().required(requiredMessage("عنوان")),
  message: Yup.string()
    .required(requiredMessage("پیام"))
    .min(50, "پیام شما باید حداقل 50 کاراکتر باشد"),
});
