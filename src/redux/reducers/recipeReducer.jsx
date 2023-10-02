import {
  ADD_RECIPE_REQUEST,
  ADD_RECIPE_SUCCESS,
  GET_ALL_RECIPE_BY_CATEGORY_REQUEST,
  GET_ALL_RECIPE_BY_CATEGORY_SUCCESS,
  GET_ALL_RECIPE_BY_ID_FAILURE,
  GET_ALL_RECIPE_BY_ID_REQUEST,
  GET_ALL_RECIPE_BY_ID_SUCCESS,
  GET_ALL_RECIPE_FAILURE,
  GET_ALL_RECIPE_REQUEST,
  GET_ALL_RECIPE_SUCCESS,
} from "../constant";

const addRecipeReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case ADD_RECIPE_REQUEST:
      return {
        loading: true,
      };
    case ADD_RECIPE_SUCCESS:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

const getAllRecipeReducer = (
  state = {
    allRecipe: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case GET_ALL_RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_RECIPE_SUCCESS:
      return {
        ...state,
        allRecipe: action.payload,
        loading: false,
      };
      case GET_ALL_RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const getUserRecipeReducer = (
  state = {
    userRecipe: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case GET_ALL_RECIPE_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_RECIPE_BY_ID_SUCCESS:
      return {
        ...state,
        userRecipe: action.payload,
        loading: false,
      };
    case GET_ALL_RECIPE_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const getAllRecipeByCategoryReducer = (
  state = {
    categoryRecipe: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case GET_ALL_RECIPE_BY_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_RECIPE_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryRecipe: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export {
  addRecipeReducer,
  getAllRecipeReducer,
  getUserRecipeReducer,
  getAllRecipeByCategoryReducer,
};
