import { useState } from "react";

// eslint-disable-next-line react/prop-types
const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <p>
        {text}: {value}
      </p>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const badPoints = -bad;
  const sum = good + badPoints;
  const average = sum / all;
  const positive = good / all;

  if (all === 0) {
    return (
      <div>
        <p>No se ha proporcionado ningún comentario</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Estadísticas</h1>
      {/* Usa el componente StatisticLine */}
      <StatisticLine text="Bueno" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Malo" value={bad} />
      <StatisticLine text="Total" value={all} />
      <StatisticLine text="Promedio" value={average.toFixed(2)} />
      <StatisticLine
        text="Comentarios positivos"
        value={(positive * 100).toFixed(2) + "%"}
      />
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
