import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import reducer from "./modules/counter";

export default configureStore({
  reducer: {
    counter: reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  // {
  //   const middlewares = getDefaultMiddleware();
  //   const newMiddlewares = middlewares.concat(logger);
  //   return newMiddlewares;
  // }
});
