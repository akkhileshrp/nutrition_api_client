import React, { useEffect, useState } from "react";

const Food = (props) => {
  const [quantity, setQuantity] = useState(100);
  const [food, setFood] = useState({});
  const [initialFoodValue, setInitialFoodValue] = useState({});
  const calculateCalories = () => {
    let foodCopy = { ...food };
    foodCopy.protein = (initialFoodValue.protein * quantity) / 100;
    foodCopy.carbohydrates = (initialFoodValue.carbohydrates * quantity) / 100;
    foodCopy.fat = (initialFoodValue.fat * quantity) / 100;
    foodCopy.fiber = (initialFoodValue.fiber * quantity) / 100;
    foodCopy.calories = (initialFoodValue.calories * quantity) / 100;
    setFood(foodCopy);
  };
  const handleInput = (e) => setQuantity(Number(e.target.value));
  useEffect(() => {
    setFood(props.food);
    setInitialFoodValue(props.food);
  }, [props.food]);
  return (
    <div className="food">
      <div className="food-img">
        <img className="food-image" src={food.imageUrl} alt="food_url" />
      </div>
      <h3>
        {food.name} ({food.calories} Kcal for {quantity}G)
      </h3>
      <div className="nutrient">
        <p className="nutrient-title">Protein</p>
        <p className="nutrient-value">{food.protein}g</p>
      </div>
      <div className="nutrient">
        <p className="nutrient-title">Carbs</p>
        <p className="nutrient-value">{food.carbohydrates}g</p>
      </div>
      <div className="nutrient">
        <p className="nutrient-title">Fat</p>
        <p className="nutrient-value">{food.fat}g</p>
      </div>
      <div className="nutrient">
        <p className="nutrient-title">Fiber</p>
        <p className="nutrient-value">{food.fiber}g</p>
      </div>
      <input
        className="qty"
        type="number"
        placeholder="Quantity in grams"
        onChange={handleInput}
      />
      <button className="login_btn" onClick={calculateCalories}>
        Calculate Calories
      </button>
      <button className="login_btn">Track Food</button>
    </div>
  );
};

export default Food;
