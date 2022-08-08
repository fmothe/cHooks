import React, { ChangeEventHandler, useState } from 'react'

/**
 * Retorna el input change de un form en el submit
 * Se usa el handle input change para linkear el input a nuestro estado del useForm
 * @param {*} initialState 
 * @returns values, handleInputChange
 */

export const useForm = (initialState ={}) => {
   
    const [values, setValues ] = useState(initialState);

    const reset = () =>{
      setValues(initialState)
    }

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        setValues({
          ...values,
          [target.name]: target.value,
        });
      };
    
    return [values, handleInputChange,reset];
}
