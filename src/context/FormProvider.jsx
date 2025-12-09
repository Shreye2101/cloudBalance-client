import React,{useState} from 'react'
import {FormContext} from './FormContext'

const FormProvider = ({children}) =>{
      const [formData, setFormData] = useState({
          firstName: "",
          lastName: "",
          email: "",
          role: ""
        });

        return (
            <FormContext.Provider value={{formData,setFormData}}>
                {children}
            </FormContext.Provider>
        )
}

export default FormProvider