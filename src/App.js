import { useState } from "react";

import Buyerview from "./components/Buyerview";
import Edititem from "./components/Edititem";
import Home from "./components/Home";
import Itemdetails from "./components/Itemdetails";
import Login from "./components/Login";
import Postitem from "./components/Postitem";
import Sellerview from "./components/Sellerview";
import Signup from "./components/Signup";
import Logo from "./assets/images/logo.svg"

import { LogoutOutlined } from '@ant-design/icons';
import { Layout } from "antd";

const { Header, Content} = Layout;

function App() {

  const [authed, setAuthed] = useState(false);

  return (
    <Layout style = {{ height: "100vh" }}>
        <Header style = {{ backgroundColor: "lightblue" }}>
          <div className = "header">
            <img src = { Logo } className = "App-logo" alt = "logo" height = "64px"/>
          </div>
        </Header>
        {/*<Content
          style={{
            padding: "50px",
            maxHeight: "calc(100% - 64px)",
            overflowY: "auto",
          }}>
            {authed ? ( <Edititem /> ) : ( <Login onSuccess = {() => setAuthed(true)} />
            )}
            {authed ? ( <Itemdetails />) :( <Login onSuccess = {() => setAuthed(true)} />
            )}
            {authed ? ( <Postitem />) :( <Login onSuccess = {() => setAuthed(true)} />
            )}
            {authed ? ( <Sellerview />) :( <Login onSuccess = {() => setAuthed(true)} />
            )}
        </Content>*/}
    </Layout>
  );
