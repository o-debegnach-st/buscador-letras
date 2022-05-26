import { useState } from "react";


const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const resetValues = () => {
        setValues(initialState);
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }


    return [values, handleChange, resetValues];
}

export default useForm