import uniqueId from "lodash/uniqueId";
import ApplicationDispatcher from "./AppDispatcher.js";

export const addItem = value => {
  ApplicationDispatcher.dispatch({
    type: "ADD_NEW_ITEM",
    item: { value, packed: false, id: uniqueId() }
  });
};

export const removeItem = item => {
  ApplicationDispatcher.dispatch({ type: "REMOVE_ITEM", item });
};

export const toggleItem = item => {
  ApplicationDispatcher.dispatch({
    type: "UPDATE_ITEM",
    item: { ...item, packed: !item.packed }
  });
};
