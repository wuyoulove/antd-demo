import {  Breadcrumb } from 'antd';

const BreadcCumbs = (props) => {
  const {source} = props
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        source.map((item,index) => (
          <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )
}
export default BreadcCumbs