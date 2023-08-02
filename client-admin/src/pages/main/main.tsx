import React from 'react'
import { Route, Routes } from "react-router-dom"
import Overwiev from './overwiev';
import Catygories from './catygories/catygories';
import Orders from './orders';
import Layout from './layout';

const Main = () => {
  return (
    <Layout>
        <Routes>
            <Route path="/overview" element={<Overwiev />} />
            <Route path="/catygories" element={<Catygories />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
    </Layout>
  )
}

export default Main