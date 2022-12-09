import { useState } from "react";
import Main from "./components/Main";
import Topbar from "./components/Topbar";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    console.log("log out");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Topbar isLoggedIn={isLoggedIn} handleLogout={logout} />
      <Main />
    </div>
  );
}

export default App;
