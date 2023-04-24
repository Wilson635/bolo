import React from "react"

interface InputProps {
  id: string
  type?: string
  placeholder: string
  value: string
  onChange: any
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-md block w-full border-b-2 px-2 py-2
                 invalid:border-pink-500 invalid:text-pink-600
                 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
    </div>
  )
}

export default Input
