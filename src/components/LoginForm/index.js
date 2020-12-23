import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import { Button, FormItem, Form, Input  } from 'element-react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, job } = this.state; 

        return (
            <el-form model={this.props.ruleForm} status-icon rules={this.props.rules} ref="ruleForm" label-width="100px" className="demo-ruleForm">
                <el-form-item label="密码">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
        );
    }
}

export default LoginForm;
