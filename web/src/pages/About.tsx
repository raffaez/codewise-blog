import React from "react";
import Title from "../components/Title";

function About() {
  return (
    <div className="flex items-start flex-col space-y-5 mx-10">
      <Title title="about" />
      <div className="flex flex-col-reverse lg:flex-row lg:h-96 items-center bg-blue-600/20 dark:bg-blue-600/10 rounded-lg">
        <div className="p-5 flex flex-col space-y-3 justify-center xl:space-y-5">
          <p className="aboutText">
            Welcome to <span className="aboutHighlight">CodeWise</span>, your
            one-stop-shop for programming tutorials. Our tutorials are designed
            to help you learn programming in a simple and practical way, with
            step-by-step guides on a variety of programming languages, tools,
            and techniques.
          </p>
          <p className="aboutText">
            At <span className="aboutHighlight">CodeWise</span>, we believe that
            anyone can learn to code, no matter their background or experience.
            Our aim is to make programming accessible to everyone, from
            beginners to seasoned developers, by providing easy-to-follow
            tutorials that help you build real-world applications.
          </p>
          <p className="aboutText">
            Join our community of learners today and start your journey towards
            becoming a skilled programmer. Our team of expert developers is here
            to guide you through every step of the way. So, come and explore the
            world of programming with us!
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt=""
          className="w-[640px] md:w-full md:h-96 object-cover rounded-md"
        />
      </div>
    </div>
    // <div className="mx-10 flex flex-col space-y-5">
    // </div>
  );
}

export default About;
