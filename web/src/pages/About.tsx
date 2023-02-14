import React from "react";
import Title from "../components/Title";

function About() {
  return (
    <div className="flex items-start flex-col space-y-5 mx-10">
      <Title title="about" />
      <div className="flex flex-col-reverse xl:flex-row xl:h-96 items-center bg-blue-600/20 dark:bg-blue-600/10 rounded-lg">
        <div className="p-5 flex flex-col space-y-3 justify-center xl:space-y-2 text-slate-700">
          <p className="aboutText">
            Welcome to <span className="aboutHighlight">CodeWise</span>, the
            ultimate destination for programming and software development
            tutorials.
          </p>
          <p className="aboutText">
            Our <span className="aboutHighlight">mission</span> is to help you
            build your skills and advance your career through our comprehensive
            and <span className="aboutHighlight">easy-to-follow</span> guides.
            From web development and mobile app development to data science and
            artificial intelligence, we cover a wide range of topics to help you
            stay <span className="aboutHighlight">ahead of the curve</span> in
            today's fast-paced technology landscape.
          </p>
          <p className="aboutText">
            Our <span className="aboutHighlight">expert</span> authors and
            contributors are passionate about sharing their knowledge and
            experience with you, and we're{" "}
            <span className="aboutHighlight">dedicated</span> to creating a
            supportive community where you can ask questions, exchange ideas,
            and collaborate on projects.
          </p>
          <p className="aboutText">
            So whether you're a beginner or a seasoned pro, we've got you{" "}
            <span className="aboutHighlight">covered</span>. Join us today and
            let's start exploring the exciting world of programming together!
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
