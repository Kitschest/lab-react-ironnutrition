// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useState } from "react";
import { Divider, Input } from 'antd';
import data from "../foods.json"






// Iteration 4
function AddFoodForm() {

const [foodList, setFoodList] = useState(data)
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [calories, setCalories] = useState("");
const [servings, setServings] = useState("");


    const addFood = (e) => {
        e.preventDefault();
       // console.log("nombre", name)
        let newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings,
        }
        setFoodList([...foodList, newFood]);
        //console.log(newFood)
    }
    
    const nameHandler = (e)=>{
        setName(e.target.value);
      }
      const imageHandler = (e)=>{
        setImage(e.target.value);
      }
      const caloriesHandler = (e)=>{
        setCalories(e.target.value);
      }
      const servingsHandler = (e)=>{
        setServings(e.target.value);
      }

console.log(nameHandler)
// MIRAR SECCIO DEL FORM!!!!!

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input value={name} type="text" id="name" onChange={nameHandler} />

      <label htmlFor="image">Image</label>
      <Input value={image} type="text" id="image" onChange={imageHandler} />

      <label htmlFor="calories">Calories</label>
      <Input value={calories} type="text" id="calories" onChange={caloriesHandler} />

      <label htmlFor="servings">Servings</label>
      <Input value={servings} type="text" id="servings" onChange={servingsHandler} />


      <button onClick={addFood}>Add Food</button>
    </form>
  );
}

export default AddFoodForm;