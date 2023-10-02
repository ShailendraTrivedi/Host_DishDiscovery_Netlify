import {
  Calendar,
  Image,
  LayoutDashboard,
  MessageCircle,
  Tag,
  ThumbsUp,
  Timer,
} from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRecipeAction } from "../../redux/actions/recipeAction";

const MyCookbook = () => {
  const dispatch = useDispatch();
  const recipeData = useSelector(
    (state) => state.getUserRecipeStore.userRecipe
  );
  const recipeLoading = useSelector(
    (state) => state.getUserRecipeStore.loading
  );
  const data = JSON.parse(sessionStorage.getItem("loginUser")).username;
  useEffect(() => {
    dispatch(getUserRecipeAction(data));
  }, [dispatch, data]);

  return (
    <div className="container">
      <div className="text-lg flex flex-col gap-2 p-5">
        <h1 className="text-5xl text-orange-500 font-bold text-center">
          Welcome to Your Cookbook!
        </h1>
        <p className="text-center px-10">
          Your Cookbook is your culinary haven where you can manage and organize
          all your saved recipes in one place. It's your personal collection of
          delicious creations waiting to be explored and enjoyed.
        </p>
        <div className="flex flex-col justify-center w-full items-center">
          <div className="grid grid-cols-8 w-[90%] bg-black text-white p-2 rounded-t-xl">
            <div className="flex justify-center gap-2">
              <Image />
              Image
            </div>
            <div className="flex justify-center gap-2 col-span-2">
              <Tag />
              Title
            </div>
            <div className="flex justify-center gap-2">
              <Calendar />
              Publish Date
            </div>
            <div className="flex justify-center gap-2">
              <LayoutDashboard />
              Category
            </div>
            <div className="flex justify-center gap-2">
              <Timer />
              Cooking Time
            </div>
            <div className="flex justify-center gap-2">
              <ThumbsUp />
              Likes
            </div>
            <div className="flex justify-center gap-2">
              <MessageCircle />
              Comments
            </div>
          </div>
          {recipeLoading ? (
            <>
              <div className="">Loading...</div>
            </>
          ) : (
            <>
              {recipeData ? (
                recipeData.map((recipe, i) => (
                  <div key={i} className="grid grid-cols-8 w-[90%]">
                    <div className="flex justify-center items-center">
                      <img
                        src={recipe.images[0]}
                        alt=""
                        className="object-cover h-20 w-20 p-2"
                      />
                    </div>
                    <div className="flex justify-center items-center col-span-2">
                      {recipe.title}
                    </div>
                    <div className="flex justify-center items-center">
                      {recipe.publishDate}
                    </div>
                    <div className="flex justify-center items-center">
                      {recipe.category}
                    </div>
                    <div className="flex justify-center items-center">
                      {recipe.cookingTime}
                    </div>
                    <div className="flex justify-center items-center">
                      {recipe.likes}
                    </div>
                    <div className="flex justify-center items-center">
                      {recipe.comments.length}
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="">Add some Magical Recipe</div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCookbook;
