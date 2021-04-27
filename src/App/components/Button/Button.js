import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'
const Button = (props) => {
    console.log(props)
    return <div style={{
        ...props.style,
        backgroundColor: props.couleurDeFond,
        fontSize: props.taillePolice + 'px'
    }}
        className="Button"
        onClick={(evt) => { props.lorsqueJeClickSurLeBoutton(true) }}
    >
        {props.label}
    </div>
};
Button.propTypes = {
    label: PropTypes.string.isRequired,
    couleurDeFond: PropTypes.string,
    taillePolice: PropTypes.number,
    lorsqueJeClickSurLeBoutton: PropTypes.func.isRequired,
}
Button.defaultProps = {
    taillePolice: 32,
    couleurDeFond: 'green'
}
export default Button;