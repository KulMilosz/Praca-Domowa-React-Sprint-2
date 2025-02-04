import Button from "../Button";
import answersList from "../../answers";
import { QUESTIONS } from "../../quizQuestions";
import Result from "../Result";

const EndSection = ({ action }) => {
  return (
    <>
      <Result></Result>
      <div id="end-section">
        {answersList.map((answerObj, index) => (
          <div key={index}>
            <h4 style={{ color: "blue" }}>
              Pytanie {QUESTIONS.indexOf(QUESTIONS[index]) + 1}
              {": "}
              {QUESTIONS[index].text}
            </h4>
            <div>
              <p
                style={{
                  color: answerObj.answer.isCorrect ? "green" : "red",
                }}
              >
                <b style={{ color: "black" }}>Twoja odpowiedź: </b>
                {answerObj.answer.text}
              </p>
            </div>
          </div>
        ))}
        <div id="button-wrapper">
          <Button action={action} text={"Powrót do startu"}></Button>
        </div>
      </div>
    </>
  );
};

export default EndSection;
