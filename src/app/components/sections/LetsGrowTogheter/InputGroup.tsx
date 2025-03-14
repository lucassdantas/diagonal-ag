interface InputGroupProps {
  labelForAndInputName: string;
  labelText: string;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  inputType: string;
  value:string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Nova prop
}

export const InputGroup = ({
  containerClassName = '',
  labelText,
  labelForAndInputName,
  labelClassName = '',
  inputType,
  inputClassName = '',
  value = '',
  onChange, // Recebe a função de mudança
}: InputGroupProps) => {
  return (
    <div className={`flex flex-col w-full ${containerClassName}`}>
      <label htmlFor={labelForAndInputName} className={`text-purple_30 mb-2 lg:text-xl ${labelClassName}`}>
        {labelText}
      </label>
      <input
        name={labelForAndInputName}
        type={inputType}
        value={value}
        className={`bg-transparent border border-purple_40 rounded-lg p-2 ${inputClassName}`}
        onChange={onChange}
        required // Aplica a função onChange no input
      />
    </div>
  );
};
