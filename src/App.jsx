import { useState } from "react";
import StartingSite from "./assets/Components/Pages/StartingSite";
import QuizSection from "./assets/Components/Pages/QuizSection";
import { QUESTIONS } from "./assets/quizQuestions";
import EndSection from "./assets/Components/Pages/EndSection";
import answersList from "./assets/answers";

function App() {
  const [activeSection, setActiveSection] = useState("StartSite");
  const [currentQuestions, setCurrentQuestions] = useState(0);

  const goToNextQuestions = () => {
    setCurrentQuestions(currentQuestions + 1);
  };

  const handleAnswer = (answer) => {
    answersList.push({ answer });
    goToNextQuestions();

    if (currentQuestions + 1 === QUESTIONS.length) {
      setActiveSection("End");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestions(0);
    answersList.length = 0;
    setActiveSection("StartSite");
  };

  return (
    <div id="wrapper">
      {activeSection === "StartSite" && (
        <StartingSite action={() => setActiveSection("Quiz")}></StartingSite>
      )}

      {activeSection === "Quiz" && (
        <QuizSection
          index={currentQuestions}
          action={handleAnswer}
        ></QuizSection>
      )}

      {activeSection === "End" && (
        <EndSection action={() => resetQuiz()}></EndSection>
      )}
    </div>
  );
}

export default App;
