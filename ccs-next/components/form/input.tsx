import React, { useState } from "react";

interface InputProps {
  unitMeasurement: string;
  trailingText: string;
  placeholder: string;
  onInputChange: (str: string) => void;
}

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
