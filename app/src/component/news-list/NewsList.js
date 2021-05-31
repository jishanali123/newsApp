import React, { Component } from 'react';
import axios from 'axios';
import { Row, Spin } from 'antd';
import './NewsList.css';
import { TOPHEADLINES, SOURCES, EVERYTHING, GET, POST } from './NewsList.constant';
import News from '../news/News';
import Filter from '../filter/Filter';
import Header from '../header/Header';
import Error from '../error/Error';
import ErrorBoundary from '../error/ErrorBoundary';
import data from '../../data.json';

export default class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            filter: {
                country: 'UK',
                category: 'everything',
                search: '',
            },
            cleared: false,
            loading: false,
        };
    }

    componentDidMount() {
        this.setLoading(true);
        this.getAxiosUtil(TOPHEADLINES, GET);
    }

    componentDidUpdate() {
        const { cleared, loading } = this.state;
        if (cleared && !loading) {
            this.getAxiosUtil(TOPHEADLINES, GET);
        }
    }

    getAxiosUtil = (url, httpMethod, postParam) => {
        const getOrPost = httpMethod === GET ? axios.get(url) : axios.post(url, postParam);
        this.setLoading(true);
        getOrPost
            .then((data) => {
                this.setState({
                    data: data.data,
                    loading: false,
                    cleared: false,
                });
            })
            .catch((err) => {
                console.log(err);
                this.setLoading(false);
            });
    }

    setLoading = (value) => {
        this.setState({
            loading: value
        });
    }

    onSelectClear = () => {
        this.setState({
            filter: {
                country: 'us',
                category: '',
                search: '',
            },
            cleared: true
        });
    }

    onCountryChange = (value) => {
        if (value && value !== '') {
            this.getAxiosUtil(TOPHEADLINES, POST, {
                country: value || 'gb'
            });
        }
    }

    onCategoryChange = (value) => {
        if (value && value !== '') {
            this.getAxiosUtil(SOURCES, POST, {
                category: value || 'general'
            });
        }
    }

    onSearchChange = (value) => {
        if (value && value !== '') {
            this.getAxiosUtil(EVERYTHING, POST, {
                search: value || 'bitcoin'
            });
        } else {
            this.onSelectClear();
        }
    }

    render() {
        const { data, filter, loading } = this.state;
        const { status, articles, sources } = data;
        const result = articles || sources
        let content = '';
        if (status === 'ok') {
            content = result.map((item) => {
                return (
                    <News
                        item={item}
                    />
                );
            });
        } else {
            content = (<Error
                data={data}
            />)
        }
        return (
            <div>
                <Header />
                <Filter
                    filter={filter}
                    onCountryChange={this.onCountryChange}
                    onSearchChange={this.onSearchChange}
                    onCategoryChange={this.onCategoryChange}
                    onSelectClear={this.onSelectClear}
                />
                <ErrorBoundary>
                    <Row>
                        {loading ?
                            (<Spin
                                size="large"
                                wrapperClassName="spin"
                            >
                                <h1>
                                    Data is loading...
                            </h1>
                            </Spin>) : content
                        }
                    </Row>
                </ErrorBoundary>
            </div>
        );
    }
}