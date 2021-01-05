
import { Menu, Button } from 'antd';

const HeaderMoudle = (props) => {
  const { headerData } = props 
  return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        {
          headerData.map((item,index) => (
            <Menu.Item key={index}>{item}</Menu.Item>
          ))
        }
        <div className="change-theme">
          <Button onClick={props.changeTheme}>更改主题</Button>
        </div>
      </Menu>
  )
}
export default HeaderMoudle