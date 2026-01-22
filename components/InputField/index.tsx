import React from "react";
import { IinputComp } from "@/interfaces/componentsInterfaces";

export default function InputField(
  props: IinputComp<React.ChangeEvent<HTMLInputElement>>,
) {
  const {
    label,
    name,
    id,
    error,
    onChange,
    value,
    placeholder,
    className,
    type,
    min,
    max,
    required,
  } = props;

  return (
    <div className="flex flex-col w-full">
      <label className="text-sm capitalize mt-3">
        {label}
        {required && <span className="text-red-600 text-lg">*</span>}
      </label>
      <input
        required={required}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        value={value}
        className={`px-1 border-2 py-1.5 duration-700 rounded-md focus:outline-0! border-bcolor bg-primary ${className}`}
        name={name}
        min={min}
        max={max}
      />
      {error && <span className="text-red-700 text-sm mt-1">{error}</span>}
    </div>
  );
}
