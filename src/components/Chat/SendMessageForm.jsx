import React, { useEffect, useRef, useContext } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import {
  Form, FormGroup, FormControl, Button,
} from 'react-bootstrap';

import axios from 'axios';
import { useFormik } from 'formik';

import routes from '../../routes';
import UserContext from '../UserContext';

const MessageSendForm = () => {
  const nickname = useContext(UserContext);
  const { modalInfo, channelsInfo: { currentChannelId } } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: { body: '' },
    onSubmit: async (values, { resetForm, setErrors }) => {
      try {
        const url = routes.channelMessagesPath(currentChannelId);
        const attributes = { body: values.body, nickname, channelId: currentChannelId };
        await axios.post(url, { data: { attributes } });
        resetForm();
      } catch (err) {
        setErrors({ body: err.message });
      }
    },
  });

  const messageInput = useRef();
  useEffect(() => {
    if (!modalInfo.type) {
      messageInput.current.focus();
    }
  }, [modalInfo.type, currentChannelId, formik.isSubmitting]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormGroup className="d-flex">
        <FormControl
          name="body"
          className={cn('mr-1', { 'is-invalid': formik.errors.body, 'is-loading': formik.isSubmitting })}
          disabled={formik.isSubmitting}
          onChange={formik.handleChange}
          value={formik.values.body}
          ref={messageInput}
        />
        {formik.isSubmitting && <span className="spinner-border spinner-border-sm [readonly]" />}
        <Button type="submit">Send</Button>
      </FormGroup>
      <Form.Control.Feedback
        className="d-block"
        type="invalid"
      >
        {formik.errors.body}
        &nbsp;
      </Form.Control.Feedback>
    </form>
  );
};

export default MessageSendForm;
