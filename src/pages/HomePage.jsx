// app-like-mercari-main/src/pages/HomePage.jsx
import React from 'react';
import { Products } from '../components';
import { sneakersProductsMaster } from '../data';
import Filter from '../components/Filter';
const HomePage = () => (
  <div>
    <h2 className="pb-5 text-lg font-bold text-secondary-text lg:text-xl">
      閲覧した商品からのおすすめ
    </h2>
    <div styke={{ display: 'flex', gap: 10 }}>
      <Filter />
      <Products productsMaster={sneakersProductsMaster} />
    </div>
  </div>
);

export default HomePage;
