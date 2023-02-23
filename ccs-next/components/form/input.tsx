import React, { useState } from "react";

interface InputProps {
  unitMeasurement: string;
  trailingText: string;
  placeholder: string;
  onInputChange: (str: string) => void;
}

/**
 * TODO:
 * - allow for custom styling via props
 * - only allow specific unit measurements
 * - create a useEffect hook that runs whenever the input state changes: https://react.dev/reference/react/useEffect
 * - expose all input props to this function component
 *
 * @param root0
 * @param root0.unitMeasurement
 * @param root0.trailingText
 * @param root0.placeholder
 * @param root0.onInputChange
 */
const Input: React.FC<InputProps> = function Input({ unitMeasurement, trailingText, placeholder, onInputChange }: InputProps) {
  const [input, setInput] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div style={{ position: "relative", fontFamily: "sans-serif" }}>
      <div style={{ paddingTop: 10, paddingBottom: 10, fontSize: "1.2rem", position: "absolute", top: 0, left: 15 }}>{ unitMeasurement }</div>
      <input
        style={
          {
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 10,
            borderRadius: 8,
            fontSize: "1.2rem",
          }
        }
        placeholder={placeholder}
        value={input}
        onChange={onChange}
      />
      <div style={{ paddingTop: 10, paddingBottom: 10, fontSize: "1.2rem", position: "absolute", top: 0, right: 10 }}>{trailingText}</div>
    </div>
  );
};

export default Input;
