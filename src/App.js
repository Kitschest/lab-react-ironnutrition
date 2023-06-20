import { useState } from 'react';
/* import Example from "./components/Example.jsx" */
import data from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

// src/App.js
import './App.css';

function App() {
  const [foodList, setFoodList] = useState(data);
  return (
    <div className="App">
    <AddFoodForm />
   {/*    {foodList.map((foodItem, k) => {
        // agafes array nou (creat amb useState) amb .map, i el fas funcionar dintre (foodItem "individual") => { que en cada <p>sigui el foodItem.nom</p> i per cada <img la seva foodItem.imatge />}
        return (
          <div key={k}>
            <p> {foodItem.name} </p>
            <img src={foodItem.image} width={100} alt={foodItem.name} />
          </div>
        );
      })} */}
      {foodList.map((foodItem, k) => <FoodBox food={foodItem}  key={k}/>)};
      </div>
  )
}
export default App;

