import React from 'react';

const Input = ({attribute, handleChange, param}) => {
  return (
    <div className='input_container'>
        <input
        id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        type={attribute.type}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className={param ? 'input_error' : 'regular_input_style'}
        />
    </div>
  )
}

export default Input