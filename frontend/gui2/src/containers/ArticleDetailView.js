import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card } from 'antd';
import CustomForm from '../components/Form'

class ArticleDetail extends Component {

    state = {
        article: {}
    };

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff'
            }
        }).then(res => {
            this.setState({
                article: res.data
            });
            console.log(`http://127.0.0.1:8000/api/${articleID}`);
            //console.log(res.data);
        });
    }

    handleDelete = event => {
        event.preventDefault();
        const articleID = this.props.match.params.articleID;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios.delete(`http://127.0.0.1:8000/api/${articleID}/delete/`)
            .then(res => {
                if (res.status === 204) {
                    this.props.history.push(`/`);
                }
            })
    };

    render() {
        return (
            <div>
                <Card title={this.state.article.title} >
                    <p>{this.state.article.content}</p>
                </Card>
                <br />
                <CustomForm
                    requestType="put"
                    articleID={this.props.match.params.articleID}
                    buttonText="Update" />

                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">
                        Delete
          </Button>
                </form>
            </div>
        )
    }
}

export default ArticleDetail;  
