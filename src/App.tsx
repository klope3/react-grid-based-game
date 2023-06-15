import "./App.css";
import { GameView } from "./components/GameView/GameView";
import { useState, useEffect } from "react";
import { InputSetters, InputState } from "./types";
import { buildKeyDown, buildKeyUp } from "./inputEvents";

function App() {
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [leftInputState, setLeftInputState] = useState(false);
  const [upInputState, setUpInputState] = useState(false);
  const [rightInputState, setRightInputState] = useState(false);
  const [downInputState, setDownInputState] = useState(false);

  useEffect(() => {
    const inputState: InputState = {
      leftInput: leftInputState,
      upInput: upInputState,
      rightInput: rightInputState,
      downInput: downInputState,
    };
    const inputSetters: InputSetters = {
      setLeftInput: setLeftInputState,
      setUpInput: setUpInputState,
      setRightInput: setRightInputState,
      setDownInput: setDownInputState,
    };
    const keyDown = buildKeyDown(inputState, inputSetters);
    const keyUp = buildKeyUp(inputState, inputSetters);

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [leftInputState, upInputState, rightInputState, downInputState]);
  return (
    <>
      <GameView playerPos={playerPos} />
    </>
  );
}

export default App;
