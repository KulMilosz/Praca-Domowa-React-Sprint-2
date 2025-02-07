import answersList from "../answers";
import { QUESTIONS } from "../quizQuestions";

const Result = () => {
  const allAnswers = QUESTIONS.length;

  const correct = answersList.filter(
    (answer) => answer.answer.isCorrect === true
  );

  const percentage = (correct.length / allAnswers) * 100;
  const percentageColor = percentage >= 80 ? "green" : "red";

  console.log("precentage", percentage);

  return (
    <>
      {percentage >= 80 ? (
        <h1 style={{ color: "darkGreen" }}>Gratulacje, Quiz zaliczony!</h1>
      ) : (
        <h1 style={{ color: "darkRed" }}>Niestety, Quiz niezaliczony</h1>
      )}
      <h2>
        {`Twój wynik to: `}
        <span style={{ color: percentageColor }}>{percentage}%</span>
        {` (${correct.length} z ${allAnswers} poprawnych odpowiedzi)`}
      </h2>
    </>
  );
};

export default Result;
