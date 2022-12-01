import { Layout, Typography } from "antd";

import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/signup";

const { Header, Content } = Layout;
const { Title } = Typography;


function App() {
  const [authed, setAuthed] = useState(false);

  return (
      <Layout style={{ height: "100vh" }}>
        <Header>
          <div className="header">
            <Title
                level={2}
                style={{ color: "white", lineHeight: "inherit", marginBottom: 0 }}
            >
              EzDealPal
            </Title>
            <div>{authed ? <Login /> : <Signup />}</div>
          </div>
        </Header>
        <Content
            style={{
              padding: "50px",
              maxHeight: "calc(100% - 64px)",
              overflowY: "auto",
            }}
        >
          {authed ? (
              <div>content placeholder</div>
          ) : (
              <Login onSuccess={() => setAuthed(true)} />
          )}
        </Content>
      </Layout>
  );
}

export default App;