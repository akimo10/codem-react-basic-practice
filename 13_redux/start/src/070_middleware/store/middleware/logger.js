// Redux Middleware
const logger = (store) => {
    return (next) => {
      return (action) => {
        console.log(store.getState());
        // 全てのdispatchで行われる処理
        // storeはaction前の状態
        // （store.getState()でステートを取得）
        next(action);
        // storeはaction後の状態
        console.log(store.getState());

      };
    }
}

export default logger;