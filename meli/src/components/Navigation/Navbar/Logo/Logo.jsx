import React from 'react';
import { Col } from 'antd';
import styles from './Logo.module.css';

const Logo = () => (
  <Col span={4}>
    <img
      className={styles.logo}
      src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/logo__large_plus@2x.png"
      alt=""
    />
  </Col>
);

export default Logo;
