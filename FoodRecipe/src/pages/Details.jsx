import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext";

export const Details = () => {
  const {id} = useParams();
  const{recipeDetails,setRecipeDetails,handleAddToFav,favouriteList} = useContext(GlobalContext);

  useEffect(()=>{
    async function getRecipeDetails(){
      const res = await fetch(` https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await res.json();
      // console.log(data);
      if(data?.data){
        setRecipeDetails(data?.data);
      }
    }
    getRecipeDetails();
  },[])

  return (
    <section className="p-lg-5 p-sm-5 p-4">
   <div className="row detail-page">
   <div className="col">
    <div className="position-relative">
    <img src={recipeDetails?.recipe?.image_url} alt="Recipe Img"/>

    <button 
    className="btn btn-sm float-end bg-yellow p-3 px-4 position-absolute favbtn" 
    title={favouriteList.findIndex((item) => item.id === recipeDetails?.recipe?.id) !== -1 ? 'Remove from Favourite' : 'Add to Favourite'} 
    onClick={() => handleAddToFav(recipeDetails?.recipe)}
    >
    {favouriteList.findIndex((item) => item.id === recipeDetails?.recipe?.id) !== -1 ? 
    <i className="bi bi-heart-fill fs-1 text-light"></i> : 
    <i className="bi bi-heart fs-1 text-light"></i>
    }
    </button>
    </div>
    </div>
   <div className="col">
    <h2 title="Name" className="text-uppercase">{recipeDetails?.recipe?.title}</h2>
    <p title="Publisher">{recipeDetails?.recipe?.publisher}</p>
    <p className="fw-bold">Ingredients :-</p>
    <ul className="list-unstyled ingredients">
    {recipeDetails?.recipe.ingredients.map((ingredients) =>(
      <li>{ingredients.quantity} {ingredients.unit} {ingredients.description}</li>
    ))}
    </ul>
    </div>
   </div>
   </section>
  )
}
