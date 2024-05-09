import { Menu } from "antd";
import { HomeOutlined,
        TeamOutlined,
        SearchOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom"; 

const MenuList = () => {
    return (
        <Menu className="menu-bar">
            <Menu.Item key="Home" icon={<HomeOutlined/>}>
                <Link to="/">Home</Link> 
            </Menu.Item>
            <Menu.Item key="Cliente" icon={<TeamOutlined />}>
                Cliente
            </Menu.Item>
            <Menu.Item key="Busqueda" icon={<SearchOutlined />}>
                <Link to="/bienes">Busqueda</Link> 
            </Menu.Item>
        </Menu>
    );
}

export default MenuList;