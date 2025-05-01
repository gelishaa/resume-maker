import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';

var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

function ExperienceProjects() {
    return (
        <div>

            <h5><b>Experience</b></h5>
            <hr />
            <Form.List name="experience">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(_a => {
                                var { key, name } = _a,
                                    restField = __rest(_a, ['key', 'name']);
                                return (
                                    <div className='row' key={key}>
                                        <div className='col-md-3'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'companyName']}
                                                rules={[{ required: true, message: 'Missing Company' }]}
                                            >
                                                <Input placeholder="Company" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-2'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'numberofYears']}
                                                rules={[{ required: true, message: 'Missing Number' }]}
                                            >
                                                <Input placeholder="Number of Years" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-3'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'country']}
                                                rules={[{ required: true, message: 'Missing Country' }]}
                                            >
                                                <Input placeholder="Country" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-3'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'yearsofWork']}
                                                rules={[{ required: true, message: 'Missing Years' }]}
                                            >
                                                <Input placeholder="Years of work" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-1 d-flex align-items-center'>
                                            <MinusCircleOutlined onClick={() => remove(name)} style={{ fontSize: '20px', color: 'red', marginBottom: '20px' }} />
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Experience
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <h5><b>Projects</b></h5>
            <hr />
            <Form.List name="projects">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(_a => {
                                var { key, name } = _a,
                                    restField = __rest(_a, ['key', 'name']);
                                return (
                                    <div className='row' key={key}>
                                        <div className='col-md-3'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'projectName']}
                                                rules={[{ required: true, message: 'Missing Name' }]}
                                            >
                                                <Input placeholder="Project Name" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-3'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'description']}
                                                rules={[{ required: true, message: 'Missing Description' }]}
                                            >
                                                <TextArea placeholder="Description" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-3'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'yearsofwork']}
                                                rules={[{ required: true, message: 'Missing Years' }]}
                                            >
                                                <Input placeholder="Years of Work" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-2 d-flex align-items-center'>
                                            <MinusCircleOutlined onClick={() => remove(name)} style={{ fontSize: '20px', color: 'red', marginBottom: '30px' }} />
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Project
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}

export default ExperienceProjects