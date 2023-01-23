import { useState, useEffect, useRef } from "react";

export default function useDeepMemo<T>(nextState: T, compareFunc: (previousState: T | undefined, nextState: T | undefined) => boolean) {
  const previousStateRef = useRef<T>();

  const previousState = previousStateRef.current;

  const isEqual = compareFunc(previousState, nextState);

  useEffect(() => {
    if (!isEqual) {
      previousStateRef.current = nextState;
    }
  });

  return nextState;
}
