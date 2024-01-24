import React from "react";
import { useForm } from "../Hooks/useForm";

const formInitial = {
  Metric: '',
  Edad:'',
  Peso:'',
  Altura:'',
}

const formValidation = (form) => {
  var onlyPositive = /^\d*\.?\d+$/;
  let errors = {};

  if(form.Metric == ""){
    errors.Metric = "Sistema Metrico requerido"
  }else if(!form.Edad.trim()){
    errors.Edad = "Edad requerida"
  }else if (!onlyPositive.test(form.Edad.trim())) {
    errors.Edad = "Solo se aceptan numeros positivos"
  }else if (form.Edad < 16 || form.Edad > 105) {
    errors.Edad = "Solo se aceptan numeros entre 16 años y 105 años"
  }else if(!form.Peso.trim()){
    errors.Peso = "Peso requerido"
  }else if (!onlyPositive.test(form.Peso.trim())) {
    errors.Peso = "Solo se aceptan numeros positivos"
  }else if(form.Metric == "Decimal"){
    if (form.Peso < 40.50 || form.Peso > 300) {
      errors.Peso = "Solo se aceptan numeros entre 40.50 kg y 300 kg"
    }else if (form.Altura < 140 || form.Altura > 225) {
      errors.Altura = "Solo se aceptan numeros entre 140cm y 225cm"
    }
  }else if(form.Metric == "Imperial"){
    if (form.Peso < 89.28722 || form.Peso > 661.387) {
      errors.Peso = "Solo se aceptan numeros entre 89.29 lb y 661.39 lb"
    }else if (form.Altura < 55.1181 || form.Altura > 88.58) {
      errors.Altura = "Solo se aceptan numeros entre 55.12 y 88.58 pulgadas"
    }
  }else if(!form.Altura.trim()){
    errors.Altura = "Altura requerido"
  }else if (!onlyPositive.test(form.Altura.trim())) {
    errors.Altura = "Solo se aceptan numeros positivos"
  }

  return errors;
}

export default function CaloriesCalculator() {

    const {form, errors, kcal, changeValue} = useForm(formInitial, formValidation)

  return (
    <div>
        <form>
          <h3 style={{margin: "0px",}}>Sistema Metrico</h3>
          <select name='Metric' value={form.Metric} onBlur={changeValue} onChange={changeValue} required>
            <option value="">Escoge un sistema metrico</option>
            <option key="1" value="Imperial">Imperial ( Libras y Pulgadas )</option>
            <option key="2" value="Decimal">Decimal ( Kilogramos y Metros )</option>
          </select><br/>
          { errors.Metric && <p >{errors.Metric}</p>}
          <input type='number' name="Edad" placeholder='Edad' value={form.Edad} onBlur={changeValue} onChange={changeValue} required></input><br/>
          { errors.Edad && <p >{errors.Edad}</p>}
          <input type='number' name="Peso" placeholder='Peso' value={form.Peso} onBlur={changeValue} onChange={changeValue} required></input>{/*libras*/}<br/>
          { errors.Peso && <p >{errors.Peso}</p>}
          <input type='number' name="Altura" placeholder='Altura' value={form.Altura} onBlur={changeValue} onChange={changeValue} required></input>{/*Pulgadas */}<br/>
          { errors.Altura && <p >{errors.Altura}</p>}
        </form>
        <h1>Calorias a Consumir: {kcal != 0 ? kcal : 0}</h1>
    </div>
  );
}
