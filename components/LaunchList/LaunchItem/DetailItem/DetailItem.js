import React from 'react';
import styles from './DetailItem.module.css';


const DetailItem = React.memo((props) => {

    const isValueArray = Array.isArray(props.value);
    const detailValue = isValueArray ?
         <p className={styles.detailValue}>
            {props.value.length ? props.value[0] : 'NA'}
        </p>
        : <p className={styles.detailValue}>{props.value ? props.value + "" : "NA"}</p>

    return (
        <div className={styles.launchDetails + (isValueArray ? " type-list" : "")}>
            <p className={styles.detailLabel}>{props.label}:</p>
            {detailValue} 
        </div>
    );
});

export default DetailItem;