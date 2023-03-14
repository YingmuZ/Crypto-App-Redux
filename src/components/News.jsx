import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;


const News = ({ simplified }) => {
  //fetch the data 
  
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: "Cryptocurrency", count: simplified ? 5 : 50});
  
  console.log(cryptoNews);
 
  return (
    <div>
      
    </div>
  )
}

export default News
