import Button from "../Button";

const StartingSite = ({ action }) => {
  return (
    <section id="starting-site">
      <div id="text-wrapper">
        <h1>Javascript Quiz</h1>
      </div>

      <Button action={action} text={"Rozpocznij Quiz"}></Button>
    </section>
  );
};

export default StartingSite;
