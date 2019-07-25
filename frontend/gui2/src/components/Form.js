import { Form, Input, Button } from 'antd';
import React from 'react';
import Axios from 'axios';


class CustomForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'horizontal',
        };
    }
    handleFormSubmit = (e, requestType, articleID) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const content = e.target.elements.content.value;
        console.log(title, content);
        switch (requestType) {

            case 'post': return Axios.post('http://127.0.0.1:8000/api/', {
                title: title,
                content: content
            }).then(res => console.log(res)).catch(error => console.error());
            case 'put': return Axios.put(`http://127.0.0.1:8000/api/${articleID}`, {
                title: title,
                content: content
            }).then(res => console.log(res)).catch(error => console.error());
        }
    }


    render() {
        return (
            <div>
                <Form
                    onSubmit={event =>
                        this.handleFormSubmit(
                            event,
                            this.props.requestType,
                            this.props.articleID
                        )
                    }
                >
                    <Form.Item label="Title">
                        <Input name="title" placeholder="Put a title here" />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input name="content" placeholder="Enter some content ..." />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {this.props.buttonText}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm;