import { Dispatch, SetStateAction } from "react";

export type Vector2 = {
  x: number;
  y: number;
};

export type InputState = {
  leftInput: boolean;
  upInput: boolean;
  rightInput: boolean;
  downInput: boolean;
};

type BooleanSetter = Dispatch<SetStateAction<boolean>>;

export type InputSetters = {
  setLeftInput: BooleanSetter;
  setUpInput: BooleanSetter;
  setRightInput: BooleanSetter;
  setDownInput: BooleanSetter;
};
