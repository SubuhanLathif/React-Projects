import { Link } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export const RecipeItem = ({items}) => {

  //slice the title of recipe
  const title = items?.title
  ? items.title.length > 20
    ? `${items.title.slice(0, 20)}...`
    : items.title
  : '';

  //add to favourite
  const{handleAddToFav,favouriteList} = useContext(GlobalContext);
  const isFavourite = favouriteList.find(item => item.id === items.id);

  return (
  <>
   <div className="col">
    <div className="card h-100">
    {items?.image_url ? 
    <img src={items.image_url} alt="Recipe Img" className="recipe-img"/> : 
    <img src="https://placehold.co/300x200" alt="Recipe Dummy Img" className="recipe-img" />
    }
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <div className="btn-group w-100 mt-3 justify-content-between align-items-center gap-2" role="group">
    <Link to={`/details/${items?.id}`} style={{width:'200px'}}><button className="btn btn-sm btn-dark py-2 w-100">Recipe Details</button></Link>
    <button className="btn btn-sm bg-yellow add2fav" onClick={() => handleAddToFav(items)} title={isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}>
    <i className={`bi ${isFavourite ? 'bi-heart-fill text-dark' : 'bi-heart'} fs-5`}></i>
    </button>
    </div>
    </div>

    </div>
  </div>
  </>
  )
}
