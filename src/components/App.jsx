import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let [qnum, setqnum] = useState(0);
  console.log(data[qnum]);
  // function clickForAnswer() {
  //   return <div>{data[qnum].question.choices[3]}</div>;
  // }

  //
  return (
    <div className="app">
      <p>Trivia!!!!</p>

      <Question question={data[qnum].question} />
      <Answer question={data[qnum].question.choices[0]} />
      <Answer question={data[qnum].question.choices[1]} />
      <Answer question={data[qnum].question.choices[2]} />
      <Answer question={data[qnum].question.choices[3]} />

      {/* <button onClick={() => Reveal(props)}>
        {" "}
        Click for the Correct Answer
      </button> */}
      {/* <Reveal question={data[qnum].question.correct_choice_index} /> */}
      {/* <NextQuestion q={setqnum(qnum + 1)} /> */}

      <NextQuestion q={() => setqnum(qnum + 1)} />
      {/* setqnum(qnum+1) */}
      <Reveal
        answer={
          data[qnum].question.choices[data[qnum].question.correct_choice_index]
        }
      />
    </div>
  );
}
// if reveal.click) {
// }

// function Reveal(props) {
//   return <div>{props.question.correct_choice_index}</div>;
// }

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
      <button onClick={() => props.q()}>Next</button>
    </div>
  );
}

function Reveal(props) {
  let [isReveal, setIsReveal] = useState(false);
  return (
    <div>
      <button onClick={() => setIsReveal(true)}>
        Click for correct answer
      </button>
      <p>{isReveal ? "The correct answer is: " + props.answer + "" : ""}</p>
    </div>
  );
}

// onClick={ ()=> setIsAnswered(true)}

// if(isAnswered === true){
// return {data[qnum].question.choices[correct_choice_index]}}; */}

export default App;

//

{
  /* <p>
{isReveal
  ? "The Answer is " + data[qnum].question.correct_choice_index
  : ""}
</p> */
}
