import PropTypes from 'prop-types';
import { Message } from './Notification.stylde';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
