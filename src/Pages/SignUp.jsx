import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import SubscriptionNews from "../component/HomePage/SubscriptionNews";
import Checkbox from "@mui/material/Checkbox";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Form Validation Schema
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email address")
    .min(5, "Username or email must be at least 5 characters")
    .required("Username or email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
  confirmpassword: Yup.string().min(4, "Password must be at least 4 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  checkbox: Yup.bool().oneOf([true], "Please accept the terms and conditions"),
});

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilitys = () => {
    setShowPasswords(!showPasswords);
  };

  // Formik Form Setup
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmpassword: "",
      checkbox: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <>
      <div>
        {/* Header Description */}
        <section className="p-2 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10 text-[#999999] leading-6 text-[14px] font-normal mt-4 md:mt-0">
          <div className="flex items-center space-x-2 h-[70px] ">
            <div className="hover:text-[#00B207]">
              <GoHome size={20} />
            </div>
            <IoIosArrowForward />
            <p className="">Sign Up</p>
            <IoIosArrowForward />
            <p className=" text-[#00B207]">Create Account</p>
          </div>
        </section>

        <section className="lg:p-10 p-4 lg:container lg:mx-auto lg:px-28 md:container md:mx-auto md:px-10">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-center items-center ">
              <div className="flex flex-col shadow-lg lg:w-1/3 md:w-1/2 p-4 rounded-md w-full">
                <p className="text-center text-[32px] leading-[38.4px] text-[#1A1A1A] font-semibold">
                  Create Account
                </p>
                <input
                  type="text"
                  placeholder="Email / Username"
                  {...formik.getFieldProps("username")}
                  className="text-[16px] leading-[20.8px] text-[#999999] mt-5 rounded-md border border-[#E6E6E6] px-[16px] py-[14px]"
                />
                {formik.touched.username && formik.errors.username && (
                  <small>{formik.errors.username}</small>
                )}

                <div className="flex items-center relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                    className="w-full text-[16px] leading-[20.8px] text-[#999999] mt-3 rounded-md border border-[#E6E6E6] px-[16px] py-[14px]"
                  />
                  <div className="">
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute top-8 right-3"
                    >
                      {showPassword ? (
                        <FaEyeSlash fill="#999999" />
                      ) : (
                        <FaEye fill="#999999" />
                      )}
                    </span>
                  </div>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <small>{formik.errors.password}</small>
                )}

                <div className="flex items-center relative">
                  <input
                    type={showPasswords ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...formik.getFieldProps("confirmpassword")}
                    className="w-full text-[16px] leading-[20.8px] text-[#999999] mt-3 rounded-md border border-[#E6E6E6] px-[16px] py-[14px]"
                  />
                  <span
                    onClick={togglePasswordVisibilitys}
                    className="absolute top-8 right-3"
                  >
                    {showPasswords ? (
                      <FaEyeSlash fill="#999999" />
                    ) : (
                      <FaEye fill="#999999" />
                    )}
                  </span>
                </div>
                {formik.touched.confirmpassword &&
                  formik.errors.confirmpassword && (
                    <small>{formik.errors.confirmpassword}</small>
                  )}

                <div className="flex items-center mt-3">
                  <div>
                    <div className="flex items-center ">
                      <Checkbox
                        {...formik.getFieldProps("checkbox")}
                        {...label}
                        className=""
                        id="checkbox"
                        name="checkbox"
                      />
                      <p className="text-[14px] leading-[21px] text-[#666666]">
                        Accept all terms & Conditions
                      </p>
                    </div>
                    {formik.touched.checkbox && formik.errors.checkbox}
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="bg-primary text-primary rounded-full py-3 px-8 text-center font-semibold transition-colors duration-150 hover:bg-[#2C742F] hover:text-white w-full"
                  >
                    <div className="flex items-center space-x-2 justify-center">
                      <span className="text-white md:text-base text-sm">
                        Create Account
                      </span>
                    </div>
                  </button>
                </div>
                <p className="text-center mt-3 text-[14px] leading-[21px] text-[#666666] mb-3">
                  Already have an account?{" "}
                  <NavLink
                    className="text-[#1A1A1A] font-medium cursor-pointer"
                    to="/signin"
                  >
                    Login
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

export default SignUp;
