
import axios from 'axios';
import React, {useState} from 'react';
import Header from "../../components/header/Header";
import homeSvg from "../../assets/home.svg"

import { HomeImg, ImgDiv, MainContainer } from './HomeStyles';
import RecipeCardComp from "./RecipeCardComp"


const APP_ID = "f3b594e8";
const APP_KEY = "4abb10fbd3e27fc006a3f98cfa4da1ad"

const Home = () => {
  const [query, setQuery] = useState("")
  const [food, setFood] = useState()
  const mealTypes =["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]
  const [meal, setMeal] = useState("Choose Meal")


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`

  const getData=async ()=>{
    if(query){
      const result = await axios.get(url);
      setFood(result.data.hits)
      
    
    }else {
      alert("Please fill the search")
    }
    
    
  }
  return (
    <div>
      <Header setQuery={setQuery} 
      getData={getData}
      mealTypes={mealTypes}
      setMeal={setMeal}
      />

      {
        food?(<MainContainer>
          {food.map((liste, index)=>(
            <RecipeCardComp key={index} recipe1={liste.recipe}  />
          ))}

        </MainContainer>
        ) : <ImgDiv>
        <HomeImg src={homeSvg} />
        </ImgDiv>
      }



    </div>
    
  )
}

export default Home