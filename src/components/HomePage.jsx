import { Search } from "lucide-react"
import RecipeCard from "./RecipeCard"
import { useEffect, useState } from "react"
import { getRandomColor } from "../lib/utils"

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchRecipes(searchQuery) {
    setLoading(true);
    setRecipes([]);
    try {

      const res = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`);

      if (!res.ok) {
        throw new Error('Failed to fetch recipes');
      }

      const data = await res.json();

      setRecipes(data.hits)
      console.log(data.hits)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecipes('egg')
  }, [])

  return (
    <div className="bg-[#cdd3bd] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={(e) => {
          e.preventDefault();
          fetchRecipes(e.target[0].value)
        }}>
          <label className="flex input shadow-md items-center gap-2">
            <Search 
              size={'24'} 
              className="cursor-pointer"
            />
            <input 
              type="text" 
              className="text-sm md:text-md flex-grow" 
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular choices
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {
            loading ? (
              [...Array(9)].map((_, index) => (
                <div key={index} className="flex w-52 flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                      <div className="skeleton h-4 w-20"></div>
                      <div className="skeleton h-4 w-28"></div>
                    </div>
                  </div>
                  <div className="skeleton h-32 w-full"></div>
                </div>
              ))
            )
            : (
              recipes.map(({recipe}, index) => (
                <RecipeCard key={index} recipe={recipe} {...getRandomColor()}/>
              ))
            )
          }

        </div>
        
      </div>
    </div>
  )
}

export default Homepage