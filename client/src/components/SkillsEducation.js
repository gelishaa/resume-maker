import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input} from 'antd';

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

function SkillsEducation() {
    return (
        <div>
            <h5><b>Education</b></h5>
            <hr />
            <Form.List name="education">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(_a => {
                                var { key, name } = _a,
                                    restField = __rest(_a, ['key', 'name']);
                                return (
                                    <div className='row' key={key}>
                                        <div className='col-md-4'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'course']}
                                                rules={[{ required: true, message: 'Missing Course' }]}
                                            >
                                                <Input placeholder="Course" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-3'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'educationName']}
                                                rules={[{ required: true, message: 'Missing Education' }]}
                                            >
                                                <Input placeholder="Education Name" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-3'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'yearofStudy']}
                                                rules={[{ required: true, message: 'Missing Year' }]}
                                            >
                                                <Input placeholder="Year of Study" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-2 d-flex align-items-center'>
                                            <MinusCircleOutlined onClick={() => remove(name)} style={{ fontSize: '20px', color: 'red', marginBottom: '20px' }} />
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Education
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <h5><b>Skills</b></h5>
            <hr />
            <Form.List name="skills">
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
                                                name={[name, 'skills']}
                                                rules={[{ required: true, message: 'Missing Skill' }]}
                                            >
                                                <Input placeholder="Skill" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-3'>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'score']}
                                                rules={[{ required: true, message: 'Missing Score' }]}
                                            >
                                                <Input placeholder="Score" />
                                            </Form.Item>
                                        </div>
                                        <div className='col-md-2 d-flex align-items-center'>
                                            <MinusCircleOutlined onClick={() => remove(name)} style={{ fontSize: '20px', color: 'red', marginBottom: '20px' }} />
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Skill
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}

export default SkillsEducation