import React, { useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import cn from 'classnames';
import { useFormik } from 'formik';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import routes from '../routes';
import UserContext from './UserContext';

const SendMessageForm = () => {
  const nickname = useContext(UserContext);
  const { currentChannelId } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: { body: '' },
    onSubmit: async (values, actions) => {
      try {
        const url = routes.channelMessagesPath(currentChannelId);
        const data = { attributes: { body: values.body, nickname } };
        await axios.post(url, { data });
        actions.resetForm();
      } catch (err) {
        actions.setErrors({ body: err.message });
      }
    },
  });

  const messageInput = useRef();
  useEffect(() => {
    messageInput.current.focus();
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <FormGroup className="m-0">
        <FormControl
          name="body"
          id="message-input"
          className={cn({ 'is-invalid': formik.errors.body, 'is-loading': formik.isSubmitting })}
          disabled={formik.isSubmitting}
          onChange={formik.handleChange}
          value={formik.values.body}
          ref={messageInput}
        />
        {formik.isSubmitting && <span className="spinner-border spinner-border-sm [readonly]" />}
        <Form.Control.Feedback type="invalid" className="d-block">
          {formik.errors.body}
          &nbsp;
        </Form.Control.Feedback>
      </FormGroup>
    </Form>
  );
};

export default SendMessageForm;
