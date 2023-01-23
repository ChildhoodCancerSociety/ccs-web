import { useCallback, useState } from "react";

export default function useToggle(initial = false) {
  const [toggleState, setToggleState] = useState(initial);

  const toggle = useCallback(() => setToggleState((state) => !state), []);

  return { isToggled: toggleState, toggle };
}
