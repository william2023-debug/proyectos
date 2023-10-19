import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../Components/Step";

const HowWeWork = () => {
  const steps = [
    {
      text: " You tell us your proposal.",
      id: 1,
    },
    {
      text: " Codes and software are designed to suit the client.",
      id: 2,
    },
    {
      text: " What the client needs is developed",
      id: 3,
    },
    {
      text: " We deploy your website.",
      id: 4,
    },
    {
      text: " You enjoy all the benefits of having a website for your company.",
      id: 5,
    },
  ];

  return (
    <div name="HowWeWork" className={styles.howWeWork}>
      <h2 className={styles.title}>How does this work</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} />
      ))}
    </div>
  );
};

export default HowWeWork;
