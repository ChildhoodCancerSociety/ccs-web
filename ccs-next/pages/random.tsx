import { useRef } from "react";
import Input from "components/form/input";

const Random: React.FC = function () {
  const randomInput = useRef<string>();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%", backgroundColor: "black" }}>
      <Input
        unitMeasurement="$"
        trailingText="USD/mo"
        placeholder="Amount"
        onInputChange={(str) => { randomInput.current = str; }}
      />
    </div>
  );
};

export default Random;
