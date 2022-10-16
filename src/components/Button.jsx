import React from 'react'

const Button = ({ color, bgColor, text, borderRadius, size, width }) => {
  return (
    <div
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} w-[100px] hover:drop-shadow-xl`}
    >
      {text}
    </div>
  )
}

export default Button
