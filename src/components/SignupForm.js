import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    desigination: "student",
  });

  const [showcreatePassword, setShowcreatePassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  const [accountType, setaccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log("printing account data ");
    console.log(accountData);

    navigate("/dashboard");
  }

  return (
    <div>
      {/* student-Instructor tab */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          name="desigination"
          value="student"
          onClick={(event) => {
            setaccountType("student");
            setFormData((prevData) => ({
              ...prevData,
              [event.target.name]: event.target.value,
            }));
          }}
          className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" :
           "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200 `}
        >
          Student
        </button>
        <button
          name="desigination"
          value="instructor"
          onClick={(event) => {
            setaccountType("instructor");
            setFormData((prevData) => ({
              ...prevData,
              [event.target.name]: event.target.value,
            }));
          }}
          className={`${accountType !== "student" ? "bg-richblack-900 text-richblack-5" :
            "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and lastName */}
        <div className="flex gap-x-4 mt-4">
          <label className="w-full">
            <p
              className="text-[0.875rem] text-richblack-5 
                        mb-1 leading-[1.375rem]"
            >
              First Name<sup className="text-pink-200 ">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="text-richblack-5 rounded-[0.5rem] bg-richblack-800 
                            w-full p-[12px] border-b-[1px] border-richblack-200"
            />
          </label>

          <label className="w-full">
            <p
              className="text-[0.875rem] text-richblack-5 
                        mb-1 leading-[1.375rem]"
            >
              Last Name<sup className="text-pink-200 ">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="text-richblack-5 rounded-[0.5rem] bg-richblack-800 
                            w-full p-[12px] border-b-[1px] border-richblack-200"
            />
          </label>
        </div>

        <div className="mt-4">
          {/* email Add */}
          <label className="w-full mt-4">
            <p
              className="text-[0.875rem] text-richblack-5 
                        mb-1 leading-[1.375rem]"
            >
              Email Address<sup className="text-pink-200 ">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address "
              value={formData.email}
              className="text-richblack-5 rounded-[0.5rem] bg-richblack-800 
                            w-full p-[12px] border-b-[1px] border-richblack-200"
            />
          </label>
        </div>

        {/* createPassword and Confirm Password */}
        <div className="flex gap-x-4 mt-4">
          <label className="relative w-full">
            <p
              className="text-[0.875rem] text-richblack-5 
                        mb-1 leading-[1.375rem]"
            >
              Create Password<sup className="text-pink-200 ">*</sup>
            </p>
            <input
              required
              type={showcreatePassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="text-richblack-5 rounded-[0.5rem] bg-richblack-800 
                            w-full p-[12px] border-b-[1px] border-richblack-200"
            />
            <span
              onClick={() => setShowcreatePassword((prev) => !prev)}
              className="absolute right-3 top-9 cursor-pointer "
            >
              {showcreatePassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative w-full">
            <p
              className="text-[0.875rem] text-richblack-5 
                        mb-1 leading-[1.375rem]"
            >
              Confirm Password<sup className="text-pink-200 ">*</sup>
            </p>
            <input
              required
              type={showconfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="text-richblack-5 rounded-[0.5rem] bg-richblack-800 
                            w-full p-[12px] border-b-[1px] border-richblack-200"
            />
            <span
              onClick={() => setShowconfirmPassword((prev) => !prev)}
              className="absolute right-3 top-9 cursor-pointer "
            >
              {showconfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900
        px-[12px] py-[8px] mt-8 w-full"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
