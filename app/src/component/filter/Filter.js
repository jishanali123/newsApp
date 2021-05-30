import React from 'react';
import { Select, Input } from 'antd';
import { COUNTRY_PLACEHOLDER, CATEGORY_PLACEHOLDER, SEARCH_PLACEHOLDER } from './Filter.constant';

const { Search } = Input;

const { Option } = Select;


const Filter = (props) => {
    const { filter, onCountryChange, onSearchChange, onCategoryChange, onSelectClear } = props;
    const { country } = filter;

    return (
        <div style={{ display: 'flex', padding: 5 }}>
            <Select
                defaultValue={country}
                placeholder={COUNTRY_PLACEHOLDER}
                style={{ width: 300, marginRight: 10 }}
                onChange={onCountryChange}
                allowClear
                onClear={onSelectClear}
            >
                <Option value="us">USA</Option>
                <Option value="gb">UK</Option>
                <Option value="cn">China</Option>
                <Option value="in">India</Option>
            </Select>

            <Select
                placeholder={CATEGORY_PLACEHOLDER}
                style={{ width: 300, marginRight: 10 }}
                onChange={onCategoryChange}
                allowClear
                onClear={onSelectClear}
            >
                <Option value="business">Business</Option>
                <Option value="entertainment">Entertainment</Option>
                <Option value="general">General</Option>
                <Option value="health">Health</Option>
                <Option value="science">Science</Option>
                <Option value="sports">Sports</Option>
                <Option value="technology">Technology</Option>
            </Select>
            <Search
                placeholder={SEARCH_PLACEHOLDER}
                onSearch={onSearchChange}
                enterButton
                allowClear
            />
        </div>
    );
};

export default Filter;