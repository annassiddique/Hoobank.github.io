import React from 'react'

const Button = ({ styles }) => (
  <button type='button'
    className={`py-4 px-6 t bg-gradient-to-r from-dimWhite to-blue font-poppins 
    hover:from-pink-500 hover:to-yellow-500
    font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>Get Started</button>
)


export default Button;