import { Layout } from 'antd';
import Logo from "../assets/images/logo.svg"

import { LogoutOutlined } from '@ant-design/icons';

const { Header} = Layout;

function Topbar(props) {

    const { isLoggedIn, handleLogout } = props;
    return (
        <Layout style = {{ height: "60px"}}>
            <Header style ={{ backgroundColor: "#d5e6f3"}}>
                    <img src = { Logo } className = "App-logo" alt = "logo" height="60px" />
                    <span>
                    {
                        isLoggedIn ?
                             <LogoutOutlined className='logout' onClick={handleLogout}/>
                            :
                            <a href = "./login" className = "Loginhref"> Login and Register </a>
                    }
                    </span>
            </Header>
        </Layout>
    )
}

export default Topbar;