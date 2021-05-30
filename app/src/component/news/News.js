import React from 'react';
import { Card, Image, Col } from 'antd';

const News = (props) => {
    const { item } = props;
    return (
        <div style={{ padding: 5 }}>
            <Col span={12}>
                <Card size="small" style={{ width: 500, height: 350 }}>
                    <p>{item.description}</p>
                    <p>{item.author}</p>
                    <p><a href={item.url} target="_blank" rel="noreferrer">Go to News</a></p>
                    <Image
                        width={200}
                        height={200}
                        src={item.urlToImage || '/logo512.png'}
                    />
                </Card>
            </Col>
        </div>
    );
};

export default News;