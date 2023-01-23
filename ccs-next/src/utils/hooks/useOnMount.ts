import { useEffect } from "react";

export default function useOnMount(func: Function) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => func(), []);
}
