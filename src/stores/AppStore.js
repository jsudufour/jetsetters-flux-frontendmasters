import ApplicationDispatcher from "../dispatchers/ApplicationDispatcher.js";
import EventEmitter from "events";

const defaultState = [
  { value: "Pants", id: uniqueId(), packed: false },
  { value: "Jacket", id: uniqueId(), packed: false },
  { value: "iPhone Charger", id: uniqueId(), packed: false },
  { value: "MacBook", id: uniqueId(), packed: false },
  { value: "Sleeping Pills", id: uniqueId(), packed: true },
  { value: "Underwear", id: uniqueId(), packed: false },
  { value: "Hat", id: uniqueId(), packed: false },
  { value: "T-Shirts", id: uniqueId(), packed: false },
  { value: "Belt", id: uniqueId(), packed: false },
  { value: "Passport", id: uniqueId(), packed: true },
  { value: "Sandwich", id: uniqueId(), packed: true }
];

let packingList = { items: defaultState };

class PackingListStore extends EventEmitter {
  constructor() {
    super();

    ApplicationDispatcher.register(action => {
      if (action.type === "") {
        packingList;
      }
    });
  }

  getState() {
    return packingList;
  }
}

export default new PackingListStore();
