import React from "react";
import classes from "./Button.module.css";
import cn from "@/utils/className";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  label?: string;
}

const SubmitButton: React.FC<Props> = ({
  loading,
  disabled,
  children,
  label,
  ...props
}: Props) => {
  return (
    <button
      className={disabled ? classes.btnDisabled : classes.btn}
      disabled={disabled}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <div className={cn(classes.spinner, "text-center")}></div>
        </div>
      ) : (
        label || children
      )}
    </button>
  );
};

export default SubmitButton;
