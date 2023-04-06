import React from 'react';
import articles from './data/articles.json';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';

interface DetailArticleProps {
  // Define any props that the component needs here
}

const DetailArticle = (props: DetailArticleProps): JSX.Element | null => {
  const { aid } = useParams();
  const navigate = useNavigate();
  for(const article of articles) {
    if(article.id.toString()==aid) {
      return(
        <>
          <h1>{article.title}</h1>
          <p>{article.fullText}</p>
          <Button type="primary" icon={<RollbackOutlined />} onClick={()=>navigate(-1)} />
        </>
      );
    }
  }
  return null;
}

export default DetailArticle;