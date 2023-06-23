import "./AboutUs.css";
import About from "../../assets/About.jpg";
import { Footer } from "../../components";
import React from "react";
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <>
      <div className="AboutUsPage">
        <h1>Witaj!</h1>
        <div
          className="AboutUsContainer"
          id="aboutUs">
          <motion.img
            animate={{ opacity: 1, transition: { duration: 2 } }}
            initial={{ opacity: 0 }}
            src={About}
            alt="about"
          />
          <div className="AboutUsText">
            <h2>KIM JESTEŚMY?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo
              urna turpis semper sed a vulputate mi. Diam nisl non in et mattis.
              Sit pulvinar cursus integer lectus sagittis bibendum. Rhoncus cras
              diam tellus convallis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo
              urna turpis semper sed a vulputate mi. Diam nisl non in et mattis.
              Sit pulvinar cursus integer lectus sagittis bibendum. Rhoncus cras
              diam tellus convallis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo
              urna turpis semper sed a vulputate mi.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
