import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import SubscriptionNews from "../component/HomePage/SubscriptionNews";
import Checkbox from "@mui/material/Checkbox";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useFormik, Formik, Form, Field } from "formik";
import { object, string } from "yup";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

//Form Validation
const initialValues = {
  username: "",
  password: "",
};

const validationSchema = object({
  username: string()
    .email()
    .min(5)
    .required("Please Enter the Username or Email"),
  password: string().min(4).required("Enter your Password"),
});

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //Form Validation Using Formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, resetForm) => {
      console.log(values);
      resetForm.resetForm();
    },
  });

  return (
    <>
      <div>
        {/* Header Description */}
        <section className="p-2 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10 text-[#999999] leading-6 text-[14px] font-normal bg-cover mt-4 lg:mt-0 md:mt-[-10px]">
          <div className="flex items-center space-x-2 h-[70px] ">
            <div className="hover:text-[#00B207]">
              <GoHome size={20} />
            </div>
            <IoIosArrowForward />
            <p className="">Account</p>
            <IoIosArrowForward />
            <p className=" text-[#00B207]">Login</p>
          </div>
        </section>

        <section className="lg:p-10 p-4 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="flex justify-center items-center ">
              <div className="flex flex-col shadow-lg lg:w-1/3 md:w-1/2 p-4 rounded-md w-full">
                <p className="text-center text-[32px] leading-[38.4px] text-[#1A1A1A] font-semibold">
                  Sign In
                </p>
                <input
                  type="text"
                  placeholder="Username / Email"
                  name="username"
                  className="text-[16px] leading-[20.8px] text-[#999999] mt-5 rounded-md border border-[#E6E6E6] px-[16px] py-[14px]"
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <small>
                  {formik.touched.username && formik.errors.username}
                </small>
                <div className="flex items-center relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className=" w-full text-[16px] leading-[20.8px] text-[#999999] mt-3 rounded-md border border-[#E6E6E6] px-[16px] py-[14px]"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="password"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute top-0 right-0 mt-7 mr-3"
                  >
                    {showPassword ? (
                      <FaEyeSlash fill="#999999" />
                    ) : (
                      <FaEye fill="#999999" />
                    )}
                  </span>
                </div>
                <small>
                  {formik.touched.password && formik.errors.password}
                </small>

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <div className="flex items-center ">
                      <Checkbox {...label} className="" />
                      <p className="text-[14px] leading-[21px] text-[#666666]">
                        Remember Me
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[21px] text-[#666666]">
                      Forget Password ?
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className=" bg-primary text-primary rounded-full py-3 px-8
                       text-center font-semibold transition-colors duration-150  hover:bg-[#2C742F] hover:text-white w-full"
                  >
                    <div className="">
                      <div className="flex items-center space-x-2 justify-center">
                        <span className="text-white md:text-base text-sm">
                          Login
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
                <p className="text-center mt-3 text-[14px] leading-[21px] text-[#666666] mb-3">
                  Don't have account?{" "}
                  <NavLink className="text-[#1A1A1A] font-medium" to="/signup">
                    Register
                  </NavLink>
                </p>
              </div>
            </div>
          </form>
        </section>

        {/* Subscribe and Newsletter */}
        <SubscriptionNews />
      </div>
    </>
  );
}

export default SignIn;
