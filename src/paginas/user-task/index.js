import React, {useState, useEffect} from 'react';
import { Table, Typography, Button } from 'antd';
import api from '../../services/api';
import { useParams, Link } from "react-router-dom";
import { FileAddOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Column } = Table;

function UserTask() {

    const enumState = { TO_DO: "To Do", DONE: "Done" };
    let [tasks, setTasks] = useState([]);
    let { user } = useParams();
    user = JSON.parse(user);

    useEffect(() => {
        api.get('user-task?user=' + user.id)
            .then(response => setTasks(response.data))
            .catch((error) => console.error(error));
    }, []);
      
    return (
        <div>
            <Title>Taks of {user.name}</Title>
            <Button type="primary" icon={<FileAddOutlined />} href={"/add-task/" + JSON.stringify(user)} style={{marginBottom: '16px'}}>
                Add task
            </Button>
            <Table dataSource={tasks}>
                <Column title="Id" dataIndex="id" key="id" />
                <Column title="Description" dataIndex="description" key="description" />
                <Column title="State" render={(record) => ( 
                    <p>{enumState[record.state]}</p>
                )} />
                <Column
                    title="Action"
                    render={(record) => (
                        <div>
                            <Link to={"/add-task/" + JSON.stringify(user) + '/' + JSON.stringify(record)}>Edit</Link>
                        </div>
                    )}
                />
            </Table>
        </div>
    );
}

export default UserTask;