import React from 'react';
import {ProductHomePage} from '../components/ProductPage';
import {HomePageData} from '../../lib/data-content/teamforge-data';
const ReleasePage = () => {
  return <ProductHomePage HomePageData={HomePageData} />;
};

export default ReleasePage;
