interface InputGroupProps {
  labelForAndInputName: string;
  labelText: string;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  inputType: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Nova prop
}

export const InputGroup = ({
  containerClassName = '',
  labelText,
  labelForAndInputName,
  labelClassName = '',
  inputType,
  inputClassName = '',
  onChange, // Recebe a função de mudança
}: InputGroupProps) => {
  return (
    <div className={`flex flex-col w-full lg:w-[49%] ${containerClassName}`}>
      <label htmlFor={labelForAndInputName} className={`text-purple_30 ${labelClassName}`}>
        {labelText}
      </label>
      <input
        name={labelForAndInputName}
        type={inputType}
        className={`bg-transparent border border-purple_40 rounded-lg p-2 ${inputClassName}`}
        onChange={onChange} // Aplica a função onChange no input
      />
    </div>
  );
};
