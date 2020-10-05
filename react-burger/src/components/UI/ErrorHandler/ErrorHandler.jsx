import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const propTypes = {
  axios: PropTypes.func.isRequired,
};

// Global component to handle errors with axios
function ErrorHandler(props) {
  const [errorMessage, setErrorMessage] = useState('');
  const { axios } = props;

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use((request) => {
      setErrorMessage(null);
      return request;
    });
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        setErrorMessage(error);
      },
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [axios]);

  const handleClose = () => {
    setErrorMessage(null);
  };

  let errorParagraph = null;
  if (errorMessage) {
    errorParagraph = errorMessage.message;
  }

  return (
    <Modal show={!!errorMessage} centered onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Something gone wrong :(</Modal.Title>
      </Modal.Header>
      <Modal.Body>{errorParagraph}</Modal.Body>
    </Modal>
  );
}

ErrorHandler.propTypes = propTypes;

export default ErrorHandler;
