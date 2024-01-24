import logo from './logo.svg';
import CaloriesCalculator from './Components/CaloriesCalculator'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CaloriesCalculator/>
      </header>
    </div>
  );
}

export default App;


/*Reto lógico:

Se desea presentar un formulario que dados ciertos datos calcule la cantidad
de calorías (kcal) que se deberían de consumir en un día por una persona.

La solución debe desarrollarse usando:
-	React JS (versión estable)

No se proporcioena ningún mock para la solución visual, recordemos que en este 
reto solo se evaluará la lógica y estructura de la solución. Visualmente solo es 
necesario tener los componentes para obtner los datos de entrada y 
mostrar las calorías a consumir.

Datos de entrada:

•	Edad
•	Peso (libras o kilogramos)
•	Altura (pulgadas o centímetros)

Formula:
calorías = (10 x Peso + 6.25 x Altura - 10 x Edad + 5) x Factor
El factor es una constante que depende del peso de la persona.
Si la persona pesa menos de 165 libras el factor es de 1.6, entre 165lb y 
200lb es de 1.4, de 201 a 220 es 1.2 y más de 220 es 1.
Los valores ingresados en la formula deben estar en el sistema métrico 
imperial (libras y pulgadas)

Consideraciones generales

En el formulario se debe poder seleccionar en que sistema métrico se van 
a ingresar los datos (decimal o imperial).

En el formulario se debe validar lo siguiente:
1-	Permitir seleccionar el tipo de sistema métrico (decimal o imperial)
 en el cual se capturará la data.

2-	Los campos donde se ingresan los datos deben permitir
 solo valores numéricos.

3-	No se debe permitir ingresar valores negativos.

4-	Para el peso se debe manejar un valor mínimo o igual a 40.50 kg
 y un valor máximo o igual de 300 kg.

5-	Para la altura un valor entre el rango de 1.40mts y de 2.25mts
6-	El resultado se debe actualizar cuando se cambia cualquier valor
 ya sea: altura, peso o edad.

7-	Para la edad se debe validar un valor mínimo o igual de 16 y 
un valor máximo de 105


Consideraciones a tener en cuenta:

-	Enviar la solución en un enlace de GitHub.
-	Se evaluará la semántica y estructura del código.
-	Se tomará en cuenta la puntualidad de la entrega. */