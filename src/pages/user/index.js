import React, { useState, useEffect } from 'react';
import { Table, Typography, Button, Divider, Popconfirm } from 'antd';
import api from '../../services/api';
import { Link } from "react-router-dom";
import { UserAddOutlined } from '@ant-design/icons';

const { Title } = Typography;

const { Column } = Table;

function User() {

    let [users, setUsers] = useState([]);

    const loadUsers = async() => {
        let data = await api.get('user')
            .then(response => response.data)
            .catch((error) => console.error(error));
        setUsers(data);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div>
            <Title>Users</Title>
            <Button type="primary" icon={<UserAddOutlined />} href="/add-user/" style={{ marginBottom: '16px' }}>
                Add user
            </Button>
            <Table dataSource={users}>
                <Column title="Id" dataIndex="id" key="id" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column
                    title="Action"
                    render={(record) => (
                        <div>
                            <Link to={"/user-tasks/" + JSON.stringify(record)}>Tasks</Link>
                            <Divider type="vertical" />
                            <Link to={"/add-user/" + JSON.stringify(record)}>Edit</Link>
                            <Divider type="vertical" />
                            <Popconfirm title="Are you sure delete this user? All of the tasks linked to this user will be also deleted."
                                onConfirm={() => {
                                    api.delete('user?user=' + record.id).then(() => {
                                        loadUsers();
                                    });
                                }}
                                okText="Yes"
                                cancelText="No">
                                <a href="#" style={{ color: 'red' }}>Delete</a>
                            </Popconfirm>
                        </div>
                    )}
                />
            </Table>
        </div>
    );
}

export default User;