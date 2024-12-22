import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface ReduxProdiderType {
  children: ReactNode;
}
const ReduxProvider:FC<ReduxProdiderType> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
