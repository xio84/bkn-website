import React from 'react';
import { TknAbout } from './about/TknAbout';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About(props) {
  return (
    <div>
      <Header {...props} activeContent="Tentang Kami"></Header>
      <TknAbout/>
      <Footer></Footer>
    </div>
  );
}