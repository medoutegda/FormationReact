import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexGrowLayout.module.scss';

const FlexGrowLayout = (props) => {
  console.log(props);
  return (
    <div className={styles.FlexGrowLayout} data-testid="FlexGrowLayout">
      <div className={styles.child1}>
        {props.children[0]}
      </div>
      <div className={styles.child2}>
        {props.children[1]}
      </div>
    </div>
  );
}

FlexGrowLayout.propTypes = {children:PropTypes.array.isRequired,};

FlexGrowLayout.defaultProps = {children:[<div>Oublie elem1</div>,<div>OublieEleme2</div>]};

export default FlexGrowLayout;
