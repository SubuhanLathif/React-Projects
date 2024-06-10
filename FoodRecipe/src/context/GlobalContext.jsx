import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(true);
  const [recipelist, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favouriteList,setFavouriteList] = useState([]);


  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        // Default search parameter to fetch some recipes initially
        const defaultSearchParam = 'pasta';  // Change this to any default search term you prefer
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${defaultSearchParam}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const datas = await res.json();
        if (datas?.data?.recipes) {
          setRecipeList(datas.data.recipes);
        }
      } catch (error) {
        console.error('Error fetching all recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRecipes();
  }, []);


  //search recipe submit function
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
      const datas = await res.json();
      if (datas?.data?.recipes) {
        setRecipeList(datas?.data?.recipes);
        setLoading(false);
        setSearchParam('');
      }
      // console.log(datas);
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false);
      setSearchParam('');
    }
  }

  //Add to favourite recipe function
  function handleAddToFav(getCurrentItem){
    console.log(getCurrentItem);
    let addFavList = [...favouriteList];
    const index = addFavList.findIndex(item =>item.id === getCurrentItem.id);

    if(index === -1){
      addFavList.push(getCurrentItem);
    }else {
      addFavList.splice(index);
    }
    setFavouriteList(addFavList);
  }
  // console.log(favouriteList,'favouriteList');
  // console.log(loading, recipelist);
  return (
    <div><GlobalContext.Provider value={{ searchParam, loading, recipelist,favouriteList,setSearchParam, handleSubmit, recipeDetails, setRecipeDetails,handleAddToFav }}>{children}</GlobalContext.Provider></div>
  )
}

