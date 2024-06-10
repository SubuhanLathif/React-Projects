import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { RecipeItem } from "../components/RecipeItem";
import loadingImg from "../assets/loading.svg";
import nofoundimg from "../assets/notfound.svg";


export const Home = () => {
  const {loading,recipelist} = useContext(GlobalContext);

  if(loading) return (
    <section className="p-lg-5 p-sm-5 p-4 vh-100 d-flex justify-content-center align-items-center">
  <div className="text-center error-msg">
  <img src={loadingImg} alt="Loading Img" width="30%"/>
  <h6 className="fw-bold text-muted">Loading... Please Wait!</h6>
  </div>
  </section>

  )

  return (
    <>
      {recipelist && recipelist.length > 0 ? (
      <section className="p-lg-5 p-sm-5 p-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"> 
      {recipelist.map((item) => <RecipeItem items={item} />)}
      </div>
      </section>

      ) : (
      <section className="p-lg-5 p-sm-5 p-4 vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center error-msg">
        <img src={nofoundimg} alt="Not-Found Img" width="20%"/>
        <h6 className="fw-bold text-muted mt-3">Sorry !!! <br/>No Recipes Found. Search Some Other Recipes</h6>
        </div>
      </section>
      )}
    </>
  );
  
  
}
