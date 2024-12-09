import "./App.css";
import CakeContainer from "./componnents/CakeContainer";
import MilkContainer from "./componnents/MilkContainer";
import UserListContainer from "./componnents/UserListContainer";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-around gap-2">
        <CakeContainer />
        <MilkContainer />
      </div>
      <div className="flex w-full justify-start gap-2">
        <UserListContainer />
      </div>
    </div>
  );
}

export default App;
