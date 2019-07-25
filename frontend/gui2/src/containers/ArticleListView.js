import React, { Component } from 'react';
import Articles from '../components/Articles';
import axios from 'axios';
import CustomForm from '../components/Form'

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}
class ArticleList extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff'
            }
        })
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <Articles data={this.state.articles} />
                <br />
                <h1>Create an Article</h1>
                <CustomForm
                    requestType="post"
                    articleID={null}
                    buttonText="Create" />
            </div>
        )
    }
}
export default ArticleList;  