import { MEALS } from "../../data/data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filterMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const nextFavMeal = state.meals.find(
          (meal) => meal.id === action.mealId
        );
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(nextFavMeal),
        };
      }

    case SET_FILTERS:
      const filters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (filters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (filters.isVegan && !meal.isVegan) {
          return false;
        }

        if (filters.isVegetarian && !meal.isVegetarian) {
          return false;
        }

        if (filters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }

        return true;
      });
      return { ...state, filterMeals: updatedFilteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
