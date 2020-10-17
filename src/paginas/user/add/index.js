import React from 'react';
import api from '../../../services/api';
import { Form, Input, Button, Row, Col } from 'antd';
import { useHistory } from "react-router-dom";

function AddUser() {

    const [form] = Form.useForm();
    const history = useHistory();
    
    const onFinish = values => {
        api.post('user', values).then(response => {
            console.log('Top!');
            history.push('/');
        });
    };

    return (
        <div>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>        
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Salvar</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddUser;