import React from "react";
import "./AnswerColUI.scss";

const AnswerColUI = ({ data }) => {
  return (
    <div className="answer-col">
      {data.map(col => (
        <span>{col.title}</span>
      ))}
    </div>
  );
};

export default AnswerColUI;
