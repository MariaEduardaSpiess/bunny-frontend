import React from 'react';
import api from '../../../services/api';
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { useParams, useHistory } from "react-router-dom";

const { Option } = Select;

function AddUserTask() {

    const [form] = Form.useForm();
    let { user, task } = useParams();
    if (user) {
        user = JSON.parse(user);
    }
    if (task) {
        task = JSON.parse(task);
    }
    const history = useHistory();
    
    const onFinish = values => {
        values.id = task?.id;
        api.post('user-task?user=' + user.id, values)
            .then(() => history.push('/user-tasks/' + JSON.stringify(user)))
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <Form form={form} layout="vertical" onFinish={onFinish} initialValues={task}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                            <Input.TextArea rows={4} />
                        </Form.Item>        
                    </Col>
                    <Col span={4}>
                        <Form.Item label="State" name="state" rules={[{ required: true }]}>
                        <Select>
                            <Option value="TO_DO">To Do</Option>
                            <Option value="DONE">Done</Option>
                        </Select>
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

export default AddUserTask;