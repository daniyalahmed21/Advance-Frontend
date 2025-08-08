import { useEffect } from "react";
import { useState } from "react";

export default function useDebounceState(initialValue, delay) {
  const [state, setState] = useState(initialValue);
  const [DebouncedState, setDebouncedState] = useState();

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return ()=>{
        clearTimeout(id);
    }
  }, [state, delay]);

  return [DebouncedState, setState];
}
