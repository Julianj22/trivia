import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let qnum = 0;

  function clickForAnswe() {
    return <div>{data[qnum].question.choices[3]}</div>;
  }

  //
  return (
    <div className="app">
      <p>Trivia!!!!</p>

      <Question question={data[qnum].question} />
      <Answer question={data[qnum].question.choices[0]} />
      <Answer question={data[qnum].question.choices[1]} />
      <Answer question={data[qnum].question.choices[2]} />
      <Answer question={data[qnum].question.choices[3]} />

      <button onClick="reveal()"> Click for the Correct Answer</button>

      <NextQuestion />
    </div>
  );
}
if reveal.click) {
}

function Question(props) {
  return <div>{props.question.text}</div>;
}

function Answer(props) {
  return <div>{props.question}</div>;
}

function NextQuestion(props) {
  let [isAnswered, setIsAnswered] = useState(false);
  return (
    <div>
      <button onClick={() => setIsAnswered(true)}>Next</button>
    </div>
  );
}

// /* // onClick={ ()=> setIsAnswered(true)}

// if(isAnswered === true){
// return {data[qnum].question.choices[correct_choice_index]}}; */}

export default App;

//
