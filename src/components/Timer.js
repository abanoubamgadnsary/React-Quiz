import { useEffect } from "react";
import { useQuiz } from "../Context/AppContext";

function Timer() {
  const { dispatch, secondRemaining } = useQuiz();

  const min = Math.floor(secondRemaining / 60);
  const sec = secondRemaining % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "timeOut" });
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);
  return (
    <div className="timer">{`${min < 10 ? "0" : ""}${min}:${
      sec < 10 ? "0" : ""
    }${sec}`}</div>
  );
}

export default Timer;
