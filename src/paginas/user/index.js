import React, { useState, useEffect } from 'react';
import { Table, Typography, Button } from 'antd';
import api from '../../services/api';
import { Link } from "react-router-dom";
import { UserAddOutlined } from '@ant-design/icons';

const { Title } = Typography;

const { Column } = Table;

function User() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('user').then(response => {
            setUsers(response.data);
        });
    }, []);

    return (
        <div>
            <Title>Users</Title>
            <Button type="primary" icon={<UserAddOutlined />} href="/add-user/" style={{marginBottom: '16px'}}>
                Add user
            </Button>
            <Table dataSource={users}>
                <Column title="Id" dataIndex="id" key="id" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column
                    title="Action"
                    render={(record) => (
                        <Link to={"/user-tasks/" + JSON.stringify(record)}>User Tasks</Link>
                    )}
                />
            </Table>
        </div>
    );
}

export default User;