import { useEffect, useState } from "react";

export const useForm = (formInitial, formValidation) => {

    const [form, setForm] = useState(formInitial);
    const [errors, setErrors] = useState({});
    const [factor, setFactor] = useState()
    const [kcal, setKcal] = useState(0)

    useEffect(()=>{

        if(form.Metric == 'Decimal'){
            const pesoImperial = form.Peso * 2.20462;
            if (pesoImperial < 165) {
                setFactor(1.6);
            }else if(pesoImperial >= 165 && pesoImperial <= 200){
                setFactor(1.4);
            }else if(pesoImperial >= 201 && pesoImperial <= 220){
                setFactor(1.2);
            }else if(pesoImperial > 220){
                setFactor(1);
            }   
        }else if(form.Metric == 'Imperial'){
            if (form.Peso < 165) {
                setFactor(1.6);
            }else if(form.Peso >= 165 && form.Peso <= 200){
                setFactor(1.4);
            }else if(form.Peso >= 201 && form.Peso <= 220){
                setFactor(1.2);
            }else if(form.Peso > 220){
                setFactor(1);
            }   
        }

        setErrors(formValidation(form))
    }, [form.Peso, form.Altura, form.Edad, form.Metric])

    const changeValue = (e) =>{
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]:value,
        })

        setErrors(formValidation(form))
        if(Object.keys(errors).length === 0){
            return Kcalculator()
        }else{
            return;
        }
        
        
    };
    
    const Kcalculator = () => {
        if (form.Metric == "Decimal") {
            const pesoImperial = form.Peso * 2.20462;
            const alturaImperial = form.Altura  * 0.393701;
            const calculator = (10 * pesoImperial) + (6.25 * alturaImperial) - (10 * form.Edad) + 5;
            const Result = calculator * factor;
            setKcal(Result);
        }else if (form.Metric == "Imperial") {
            const calculator = (10 * form.Peso) + (6.25 * form.Altura) - (10 * form.Edad) + 5;
            const Result = calculator * factor;
            setKcal(Result);
        }    
    };
    

    return {
        form, errors, kcal, changeValue,
    }

}