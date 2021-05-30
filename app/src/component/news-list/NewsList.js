import React, { Component } from 'react';
import axios from 'axios';
import { Row, Spin } from 'antd';
import './NewsList.css';
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
        axios.get('http://localhost:5000/topHeadlines')
            .then((data) => {
                this.setState({
                    data: data.data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.log(err);
                this.setLoading(false);
            });
    }

    componentDidUpdate() {
        const { cleared, loading } = this.state;
        if (cleared && !loading) {
            this.setLoading(true);
            axios.get('http://localhost:5000/topHeadlines')
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
            this.setLoading(true);
            axios.post('http://localhost:5000/topHeadlines', {
                country: value || 'gb'
            })
                .then((data) => {
                    this.setState({
                        data: data.data,
                        cleared: false,
                        loading: false,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    this.setLoading(false);
                });
        }
    }

    onCategoryChange = (value) => {
        if (value && value !== '') {
            this.setLoading(true);
            axios.post('http://localhost:5000/sources', {
                category: value || 'general'
            })
                .then((data) => {
                    this.setState({
                        data: data.data,
                        cleared: false,
                        loading: false,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    this.setLoading(false);
                });
        }
    }

    onSearchChange = (value) => {
        if (value && value !== '') {
            this.setLoading(true);
            axios.post('http://localhost:5000/everything', {
                search: value || 'bitcoin'
            })
                .then((data) => {
                    this.setState({
                        data: data.data,
                        cleared: false,
                        loading: false,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    this.setLoading(false);
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