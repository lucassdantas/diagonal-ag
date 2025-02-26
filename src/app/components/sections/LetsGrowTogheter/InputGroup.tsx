interface InputGroupProps {
  labelForAndInputName:string,
  labelText:string,
  labelClassName?:string,
  inputClassName?:string,
  containerClassName?:string,
  inputType:string
}

export const InputGroup = ({containerClassName='', labelText, labelForAndInputName, labelClassName='', inputType, inputClassName=''}:InputGroupProps) => {
  return(
    <div className={`flex flex-col w-full ${containerClassName}`}>
      <label htmlFor={labelForAndInputName} className={`text-purple_30 ${labelClassName}`}>{labelText}</label>
      <input name={labelForAndInputName} type={inputType} className={`bg-transparent border border-purple_40 rounded-lg p-2 ${inputClassName}`}/>
    </div>
  )
}