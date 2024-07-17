import React from "react";
import imgdata from "./ImageData";
import "./Home.css";
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function signupHandler(event) {
    event.preventDefault();
    navigate("/signup");
  }

  function discoverHandler(event) {
    event.preventDefault();
    navigate("/about");
  }

  return (
    <div className="flex flex-col items-center mb-5 mt-12">
      <div className="w-11/12 max-w-[900px] text-center mx-auto">
        <h1 className="font-bold text-5xl">
          Empower Your Learning Experience
          <br />
          With StudyNotion
        </h1>
        <p className="font-normal text-lg max-w-[70%] mx-auto mt-8 opacity-60">
          Embark on a journey of discovery and education by becoming a part of
          our platform where a wealth of knowledge and interactive learning
          tools await you.
        </p>

        <div className="lg:w-1/2 w-full mx-auto flex gap-9 mt-7 justify-center items-center">
          <button className="cssbuttons-io-button" onClick={signupHandler}>
            Sign Up Now
            <div className="icon">
              <CiLocationArrow1 className="text-black" />
            </div>
          </button>

          <button
            onClick={discoverHandler}
            className="relative border hover:border-sky-600 duration-500 group 
          cursor-pointer text-sky-50  overflow-hidden h-[52px] w-48 rounded-2xl bg-sky-800
           p-2 flex justify-center items-center font-extrabold"
          >
            <div
              className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150
             transition-all  duration-500 ease-in-out bg-sky-900 delay-150 
             group-hover:delay-75"
            ></div>
            <div
              className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150
             transition-all  duration-500 ease-in-out bg-sky-800 delay-150 
             group-hover:delay-100"
            ></div>
            <div
              className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150
             transition-all  duration-500 ease-in-out bg-sky-700 delay-150 
             group-hover:delay-150"
            ></div>
            <div
              className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150
             transition-all  duration-500 ease-in-out bg-sky-600 delay-150 
             group-hover:delay-200"
            ></div>
            <div
              className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150
             transition-all  duration-500 ease-in-out bg-sky-500 delay-150 
             group-hover:delay-300"
            ></div>
            <p className="z-10">Discover More</p>
          </button>
        </div>

        <div className="flex justify-between  mt-20">
          <div className="card ">
            <img src={imgdata[0].image} alt="" />

            <div className="card__content overflow-x-hidden overflow-y-scroll">
              <p className="card__title">Hello !!!</p>
              <p className="card__description">
                "Welcome to StudyNotion, your premier platform for mastering
                Data Structures, Algorithms, and the MERN stack. Enhance your
                coding skills and build robust web applications with our
                comprehensive resources and expert guidance."
              </p>
            </div>
          </div>

          <div className="flex relative flex-col gap-3 justify-evenly -mt-3 pl-5 -pt-5 max-w-md">
            <div className="h-[80px] w-[2px] absolute top-2 left-4 bg-white"></div>
            <h2 className="font-semibold text-4xl font-stix">
              Interacting Tools
            </h2>
            <p className="font-normal text-base opacity-60">
              Engage tutors with interactive tools for better learning
              experience
            </p>
            <h2 className="font-semibold text-4xl font-stix">Rich Content</h2>
            <p className="font-normal text-base opacity-60">
              Numerous number of content with varity
            </p>
            <h2 className="font-semibold text-4xl font-stix">
              Personalized Learning
            </h2>
            <p className="font-normal text-base opacity-60">
              Customized content and tutor of your choice
            </p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
