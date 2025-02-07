import { QUESTIONS } from "../../quizQuestions";
import Button from "../Button";

const QuizSection = ({ index, action }) => {
  const handleAnswer = (answer) => {
    action(answer);
  };

  return (
    <div id="quiz-section">
      <h3 style={{ color: "blue" }}>
        Pytanie {QUESTIONS.indexOf(QUESTIONS[index]) + 1}
        {": "}
        {QUESTIONS[index].text}
      </h3>
      {QUESTIONS[index].answers.map((answer, answerIndex) => (
        <Button
          action={() => handleAnswer(answer)}
          key={answerIndex}
          text={answer.text}
        ></Button>
      ))}
    </div>
  );
};

export default QuizSection;
