import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Modal.scss'

const Modal = props => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);


    return (
        <div>

        </div>
    );
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export default Modal
