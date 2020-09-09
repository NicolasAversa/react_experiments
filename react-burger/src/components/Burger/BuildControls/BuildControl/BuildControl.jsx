import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import styles from './BuildControl.module.css';

function BuildControl(props) {
  const { label } = props;

  return (
    <div className="d-flex align-items-center justify-content-center">
      <p className="mr-3">{label}</p>
      <ButtonGroup className="mb-2">
        <Button className={`${styles.more} border-0`}>More</Button>
        <Button className={`${styles.less} border-0`}>Less</Button>
      </ButtonGroup>
    </div>
  );
}

export default BuildControl;
