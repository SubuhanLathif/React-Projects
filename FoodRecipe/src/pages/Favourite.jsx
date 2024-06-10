import { useContext } from "react"
import { RecipeItem } from "../components/RecipeItem";
import { GlobalContext } from "../context/GlobalContext";
import myFavImg from "../assets/my-fav.svg";


export const Favourite = () => {
  const {favouriteList} = useContext(GlobalContext);

  return (
      <>
        {favouriteList && favouriteList.length > 0 ? (
        <section className="p-lg-5 p-sm-5 p-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"> 
        {favouriteList.map((item) => <RecipeItem items={item}/>)}
        </div>
        </section>
        ): (
        <section className="p-lg-5 p-sm-5 p-4 vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center error-msg">
        <img src={myFavImg} alt="Favourite Img" width="35%"/>
        <h6 className="fw-bold text-muted mt-3">Sorry !!! <br/>No Favourite Recipes Found.</h6>
        </div>
        </section>
         )}
      </>
  )
}
