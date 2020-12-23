
import { Menu } from 'antd';

const HeaderMoudle = (props) => {
  const { headerData } = props 
  return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        {
          headerData.map((item,index) => (
            <Menu.Item key={index}>{item}</Menu.Item>
          ))
        }
      </Menu>
  )
}
export default HeaderMoudle