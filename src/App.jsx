import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});
  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [selected]: (prevVotes[selected] || 0) + 1,
    }));
  };
  console.log("Anécdotas y Votos:", votes);
  const maxVoteIndex = Object.keys(votes).reduce(
    (a, b) => (votes[a] > votes[b] ? a : b),
    0 // Initial value (can be any key or null)
  );

  return (
    <div>
      <button onClick={handleRandomAnecdote}>Mostrar Anécdota</button>
      <button onClick={handleVote}>Votar</button>
      <p>{anecdotes[selected]}</p>
      <p>Votos: {votes[selected] || 0}</p>
      {maxVoteIndex && (
        <p>
          Anécdota con más votos: {anecdotes[maxVoteIndex]} (Votos:{" "}
          {votes[maxVoteIndex]})
        </p>
      )}
    </div>
  );
};

export default App;
