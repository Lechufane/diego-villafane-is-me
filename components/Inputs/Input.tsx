interface Props {
  type?: string;
  placeholder?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  errorMessage?: string;
}

const Input: React.FC<Props> = ({
  type = "text",
  placeholder = "Placeholder",
  value,
  handleChange,
  className = "",
  disabled = false,
  errorMessage,
  ...props
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      <p className="text-red-600">{errorMessage}</p>
    </div>
  );
};

export default Input;
