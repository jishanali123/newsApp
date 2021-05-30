import React from 'react';
import './Error.css';
import { Empty, Image } from 'antd';

const Error = (props) => {
    const { data } = props;
    return (
        <div className="Error">
            <Image
                width={200}
                height={200}
                src={'/logo512.png'}
            />
            <h1>
                {data.message}
            </h1>
        </div>
    );
}

export default Error;