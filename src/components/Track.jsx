import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Track.css";
import Food from "./Food";

const Track = () => {
  const loggedUserData = useContext(AuthContext);
  const [foodItems, setFoodItems] = useState([]);
  const [food, setFood] = useState(null);
  const searchFood = (e) => {
    if (e.target.value !== "") {
      fetch(`http://localhost:8000/foods/${e.target.value}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${loggedUserData.loggedUser.token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          {
            /* if the message data is undefined or not present display the data or blank the array */
          }
          if (data.message === undefined) setFoodItems(data);
          else setFoodItems([]);
        })
        .catch((err) => console.error(err));
    } else setFoodItems([]);
  };
  return (
    <section className="container track-container">
      <div className="search">
        <input
          type="search"
          className="search_inp"
          onChange={searchFood}
          placeholder="Search food..."
        />
        {foodItems.length !== 0 ? (
          <div className="search_results">
            {foodItems.map((item) => {
              return (
                <p
                  className="item"
                  key={item._id}
                  onClick={() => setFood(item)}
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        ) : null}
      </div>
      {food !== null ? <Food food={food} /> : null}
    </section>
  );
};

export default Track;
