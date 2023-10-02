import { configureStore } from "@reduxjs/toolkit";
import {
  addRecipeReducer,
  getAllRecipeByCategoryReducer,
  getAllRecipeReducer,
  getUserRecipeReducer,
} from "./reducers/recipeReducer";
import thunk from "redux-thunk";
import { loginReducer } from "./reducers/authReducer";
const store = configureStore({
  reducer: {
    loginStore: loginReducer,
    addRecipeStore: addRecipeReducer,
    getAllRecipeStore: getAllRecipeReducer,
    getUserRecipeStore: getUserRecipeReducer,
    getAllRecipeByCategoryStore: getAllRecipeByCategoryReducer,
  },
  middleware: [thunk],
});

export default store;
