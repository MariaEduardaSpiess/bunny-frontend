import React, {useState, useEffect} from 'react';
import { Table, Typography, Button } from 'antd';
import api from '../../services/api';
import { useParams } from "react-router-dom";
import { FileAddOutlined } from '@ant-design/icons';

const { Title } = Typography;

function UserTask() {

    let [tasks, setTasks] = useState([]);
    let { user } = useParams();

    user = JSON.parse(user);

    useEffect(() => {
        api.get('user-task?user=' + user.id).then(response => {
            setTasks(response.data);
        });
    }, []);
      
    const columns = [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        { title: 'State', dataIndex: 'state', key: 'state' }
    ];
      
    return (
        <div>
            <Title>Taks of {user.name}</Title>
            <Button type="primary" icon={<FileAddOutlined />} href={"/add-task/" + JSON.stringify(user)} style={{marginBottom: '16px'}}>
                Add task
            </Button>
            <Table dataSource={tasks} columns={columns} />
        </div>
    );
}

export default UserTask;