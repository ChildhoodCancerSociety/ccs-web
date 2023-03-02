import { forwardRef } from "react";
import React from 'react';
interface ButtonOptions {}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

  const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
    const { type = "button", children, ...rest } = props;
    return (
      <button
        ref={ref}
        className="bg-ccs-primary hover:bg-primary-200 text-white font-bold py-2 px-4 rounded"
        {...rest}
      >
        {children}
      </button>
    );
  });
  
  export default Button;