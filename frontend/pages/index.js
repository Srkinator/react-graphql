import React, { Component } from 'react';
import Link from 'next/link'


const Home = props => {
  return <div>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
}

export default Home