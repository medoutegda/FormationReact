import React from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.module.scss';

const Thumbnail = () => (
  <div className={styles.Thumbnail} data-testid="Thumbnail">
    Thumbnail Component
  </div>
);

Thumbnail.propTypes = {};

Thumbnail.defaultProps = {};

export default Thumbnail;
