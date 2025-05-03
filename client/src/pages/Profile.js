import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { Tabs, Form, Button, message} from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios';

const { TabPane } = Tabs;

function Profile() {
    const user = JSON.parse(localStorage.getItem('logged-user'))
    const onFinish = async(values) => {
        try{
            const result = await axios.post('/api/user/update' , {...values, _id : user._id})
            localStorage.setItem('logged-user', JSON.stringify(result.data));
            message.success('Profile updated successfully')    
        } catch (error){
            message.error('Registration failed')
        }
    }
    return (
        <DefaultLayout>
            <div className="update-profile">
                <h4><b>Update Profile</b></h4>
                <hr />
                <Form layout="vertical" onFinish={onFinish} initialValues={user}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Personal Info" key="1">
                            <PersonalInfo />
                        </TabPane>
                        <TabPane tab="Skills and Education" key="2">
                            <SkillsEducation />
                        </TabPane>
                        <TabPane tab="Experience / Projects" key="3">
                            <ExperienceProjects />
                        </TabPane>
                    </Tabs>
                    <Button htmlType="submit">Update</Button>
                </Form>
            </div>
        </DefaultLayout>
    );
}

export default Profile;