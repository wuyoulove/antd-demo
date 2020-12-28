import React, { Component } from 'react'
import { Button } from 'antd';
import store from '@/store/index.js'
import { addToCart }  from '@/store/actions/index.js';

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        content:store.getState().cart,
        count:0
      }
    }
    add(){
      store.dispatch(addToCart('Juice 2L1111', 1, 250));
          this.setState(state => ({
          content:store.getState().cart,
      }))
    }
    addCount(){
      this.setState(state => ({
        count: state.count + 1
      }));
    }
    render() {
      return (
        <div>
          <h1>记录列表</h1>
          {
            this.state.content.map((item,index) => {
              return (
                <li key={index}>{item.product}</li>
              )
            })
          }
          <Button type="primary" onClick={this.add.bind(this)}>增加</Button>
          <div>{this.state.count}</div>
          <Button type="primary" onClick={this.addCount.bind(this)}>增加</Button>
        </div>
      )
    }
}
export default Home