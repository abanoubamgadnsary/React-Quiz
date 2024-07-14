function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const precentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (precentage >= 100) emoji = "🥇";
  else if (precentage >= 80 && precentage < 100) emoji = "🥈";
  else if (precentage >= 60 && precentage < 80) emoji = "🥉";
  else if (precentage < 60) emoji = "😭";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(precentage)}% )
      </p>
      <p className="highscore">(highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset the Quiz
      </button>
    </>
  );
}

export default FinishScreen;
