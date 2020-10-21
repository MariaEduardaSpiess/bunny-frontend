import React from 'react';
import api from '../../../services/api';
import { Form, Input, Button, Row, Col } from 'antd';
import { useHistory, useParams } from "react-router-dom";

function AddUser() {

    const [form] = Form.useForm();
    const history = useHistory();
    let { user } = useParams();
    if (user) {
        user = JSON.parse(user);
    }
    
    const onFinish = values => {
        values.id = user?.id;
        api.post('user', values)
            .then(() => history.push('/'))
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Name" name="name" initialValue={user?.name} rules={[{ required: true }]}>
                            <Input/>
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