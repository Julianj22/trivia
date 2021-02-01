import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let qnum = 0;
  return (
    <div className="app">
      <p>Trivia!!!!</p>

      <Question question={data[qnum].question} />
      <Answer question={data[qnum].question.choices[0]} />
      <Answer question={data[qnum].question.choices[1]} />
      <Answer question={data[qnum].question.choices[2]} />
      <Answer question={data[qnum].question.choices[3]} />

      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return <div>{props.question.text}</div>;
}

function Answer(props) {
  return <div>{props.question}</div>;
}

function NextQuestion(props) {
  return (
    <div>
      <button>Next</button>
    </div>
  );
}

export default App;
