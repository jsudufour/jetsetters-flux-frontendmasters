import ApplicationDispatcher from "../dispatchers/AppDispatcher.js";

export const addItem = item => {
  ApplicationDispatcher.dispatch({ type: "ADD_ITEM", item });
};

export const removeItem = item => {
  ApplicationDispatcher.dispatch({ type: "REMOVE_ITEM", item });
};

export const markAsPacked = item => {
  ApplicationDispatcher.dispatch({ type: "MARK_AS_PACKED", item });
};

export const markAllAsPacked = () => {
  ApplicationDispatcher.dispatch({ type: "MARK_ALL_AS_PACKED" });
};
