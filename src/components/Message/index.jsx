import css from './index.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {
  static propTypes = {
    level: PropTypes.string,
    message: PropTypes.string.isRequired,
  };
  static defaultProps = {
    level: 'warning',
  };

  render() {
    return {
      info: <div className={css.info}>{this.props.message}</div>,
      warning: <div className={css.warning}>{this.props.message}</div>,
      error: <div className={css.error}>{this.props.message}</div>,
    }[this.props.level];
  }
}
