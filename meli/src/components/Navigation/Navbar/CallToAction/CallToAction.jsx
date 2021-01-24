import React from 'react';
import { Col } from 'antd';
import styles from './CallToAction.module.css';

const CallToAction = () => (
  <Col span={8} className="d-flex flex-column align-items-end justify-content-center">
    <img className={styles.CallToAction} src="https://http2.mlstatic.com/resources/deals/exhibitors_resources/mla-menu-desktop-notification-picture-e6c46c2b-5591-4b43-94e4-a48dbbefaed7.png" alt="" />
  </Col>
);

export default CallToAction;
