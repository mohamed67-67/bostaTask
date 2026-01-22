import { ISelectComp } from "@/interfaces/componentsInterfaces";

export default function SelectComp(props: ISelectComp) {
  const {
    label,
    name,
    id,
    error,
    onChange,
    value,
    options,
    placeholder,
    className,
    required,
    defaultValue,
  } = props;

  return (
    <div className="flex flex-col w-full cursor-pointer">
      <label className="text-sm capitalize mt-3">
        {label}
        {required && <span className="text-red-600 text-lg">*</span>}
      </label>
      <select
        required={required}
        id={id}
        onChange={(e) => onChange(e)}
        value={value}
        defaultValue={defaultValue}
        className={`px-1 border-2 py-1.5 duration-700 cursor-pointer rounded-md border-bcolor focus:outline-0! bg-primary ${className}`}
        name={name}>
        {placeholder && (
          <option className="" hidden value={undefined}>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option className="cursor-pointer!" key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-700 text-sm mt-1">{error}</span>}
    </div>
  );
}
