import { getRandomColor } from "../lib/utils";
import RecipeCard from "./RecipeCard";

const FavoritePage = () => {

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

        {
          favorites.length > 0 ? 
          (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {
                favorites.map((recipe) => (
                  <RecipeCard key={recipe.label} recipe={recipe} {...getRandomColor()}/>
                ))
              }
            </div>
          )
          : (
            <div className="h-[800vh] flex flex-col items-center gap-4">
              <p className="text-slate-500 font-semibold ml-1 my-2 text-md tracking-tight">You can add some favorite recipe ^_^</p>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default FavoritePage