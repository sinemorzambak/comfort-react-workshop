import { ComfortReactProvider } from "comfort-react";
import MyComponent from "./MyComponent";
import "./styles.css";

export default function App() {
  return (
    <ComfortReactProvider
      notistackProviderProps={{
        maxSnack: 3,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        }
      }}
      lang="en"
    >
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <MyComponent />
      </div>
    </ComfortReactProvider>
  );
}
