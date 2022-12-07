import { useState } from "react";

import Logo from "./assets/images/logo.svg";

import { LogoutOutlined } from "@ant-design/icons";
import Layouts from "./components/Layout/Layouts";
import "./App.css";
function App() {
  const [authed, setAuthed] = useState(false);

  return <Layouts />;
}
export default App;
