import { InputSetters, InputState } from "./types";

const leftArrow = "ArrowLeft";
const rightArrow = "ArrowRight";
const upArrow = "ArrowUp";
const downArrow = "ArrowDown";

export function buildKeyDown(
  inputState: InputState,
  inputSetters: InputSetters
) {
  return (e: KeyboardEvent) => {
    if (e.key === leftArrow && !inputState.leftInput) {
      console.log("setting left");
      inputSetters.setLeftInput(true);
    }
    if (e.key === upArrow && !inputState.upInput) {
      console.log("setting up");
      inputSetters.setUpInput(true);
    }
    if (e.key === rightArrow && !inputState.rightInput) {
      console.log("setting right");
      inputSetters.setRightInput(true);
    }
    if (e.key === downArrow && !inputState.downInput) {
      console.log("setting down");
      inputSetters.setDownInput(true);
    }
  };
}

export function buildKeyUp(inputState: InputState, inputSetters: InputSetters) {
  return (e: KeyboardEvent) => {
    if (e.key === leftArrow) {
      inputSetters.setLeftInput(false);
    }
    if (e.key === upArrow) {
      inputSetters.setUpInput(false);
    }
    if (e.key === rightArrow) {
      inputSetters.setRightInput(false);
    }
    if (e.key === downArrow) {
      inputSetters.setDownInput(false);
    }
  };
}
