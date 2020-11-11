import React from 'react';
import styles from './FilterItem.module.css';

const FilterItem = React.memo((props) => {
    return (
        <button className={styles.filterItem + (props.isActive ? " active" : "")}
            onClick={() => { props.onClick(props.value) }}>
            {props.value}
        </button>
    );
});

export default FilterItem;