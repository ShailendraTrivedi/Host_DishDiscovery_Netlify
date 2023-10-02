import React from "react";
import "../styles/styles_home.css";
import { X, MessagesSquare, ThumbsUp } from "lucide-react";
const DescribeRecipe = ({ recipeDescription, handleDescribe }) => {
  const {
    username,
    title,
    publishData,
    introduction,
    instructions,
    ingredients,
    images,
    cookingTime,
    category,
    likes,
    comments,
  } = recipeDescription;

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 ">
        <div className="flex justify-center items-center h-full">
          <div className="relative">
            <div className="absolute -top-2 -right-2 bg-white rounded-full text-black border-2 border-orange-500">
              <X onClick={handleDescribe} size={30} />
            </div>
            <div className=" h-[40rem] w-[45rem] bg-white p-5 border-orange-500 border-2 rounded scroll">
              <div className="grid grid-cols-2">
                <div>
                  <div>Prepared By: {username}</div>
                  <div>Title: {title}</div>
                  <div>Published Date: {publishData}</div>
                  <div>Category: {category}</div>
                  <div>Cook Time: {cookingTime}</div>
                  <div>Likes: {likes}</div>
                  <div>Comments: {comments.length}</div>
                  <div className="flex flex-col gap-2 p-5 pt-10 items-center">
                    <div className="text-center">If You like the recipe please Like and Comments</div>
                    <div className="flex gap-5">
                    <ThumbsUp /><MessagesSquare />
                    </div>
                  </div>
                </div>
                <div>
                  <img src={images[0]} alt="" />
                </div>
              </div>
              <div className="text-center font-bold text-lg px-5">
                {introduction}
              </div>
              <div>
                <div className="font-bold text-orange-500">Ingredients:</div>
                <ul className="list-disc mx-10 m-2">
                  {ingredients.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold text-orange-500"> Instructions:</div>
                <ul className="list-decimal mx-10 m-2">
                  {instructions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescribeRecipe;
