import axios from "axios";
import {
  ADD_RECIPE_REQUEST,
  ADD_RECIPE_SUCCESS,
  GET_ALL_RECIPE_BY_CATEGORY_REQUEST,
  GET_ALL_RECIPE_BY_CATEGORY_SUCCESS,
  GET_ALL_RECIPE_BY_ID_FAILURE,
  GET_ALL_RECIPE_BY_ID_REQUEST,
  GET_ALL_RECIPE_BY_ID_SUCCESS,
  GET_ALL_RECIPE_REQUEST,
  GET_ALL_RECIPE_SUCCESS,
} from "../constant";
import { toast } from "react-toastify";
import { SERVER } from "../../constant";

const addRecipeAction = (values) => {
  return async (dispatch) => {
    dispatch({ type: ADD_RECIPE_REQUEST });
    try {
      const response = await axios.post(
        `${SERVER}/foodieblog/add-blog`,
        values
      );
      if (response.status === 200) {
        dispatch({ type: ADD_RECIPE_SUCCESS });
        toast.success("Recipe Added Successfully");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
};

const getUserRecipeAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RECIPE_BY_ID_REQUEST });
    try {
      const response = await axios.get(
        `${SERVER}/foodieblog/get-user-blogs/${id}`
      );
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: GET_ALL_RECIPE_BY_ID_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_ALL_RECIPE_BY_ID_FAILURE,
      });
      if (error.response && error.response.status === 404) {
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
};

const getAllRecipeAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RECIPE_REQUEST });
    try {
      const response = await axios.get(`${SERVER}/foodieblog/get-all-recipe`);
      if (response.status === 200) {
        dispatch({ type: GET_ALL_RECIPE_SUCCESS, payload: response.data });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.warning("No Recipe Found!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
};

const getAllRecipeByCategoryAction = ({ category }) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RECIPE_BY_CATEGORY_REQUEST });
    try {
      const response = await axios.get(
        `${SERVER}/foodieblog/get-all-recipe-by-category/${category}`
      );
      if (response.status === 200) {
        dispatch({ type: GET_ALL_RECIPE_BY_CATEGORY_SUCCESS });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.warning("No recipes found for this category");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
};

export {
  addRecipeAction,
  getUserRecipeAction,
  getAllRecipeAction,
  getAllRecipeByCategoryAction,
};
