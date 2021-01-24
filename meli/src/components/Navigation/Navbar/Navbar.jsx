import React from 'react';
import { Layout, Row } from 'antd';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import CallToAction from './CallToAction/CallToAction';
import styles from './Navbar.module.css';

const { Header } = Layout;

const Navbar = () => (
  <Header className={styles.Navbar}>
    <Row>
      <Logo />
      <SearchBar />
      <CallToAction />
    </Row>
  </Header>
);

export default Navbar;
