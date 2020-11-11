import React from 'react';
import styles from './FigureItem.module.css'

const FigureItem = React.memo((props) => {
    return (
        <figure className={styles.figureItem}>
            <img src={props.source} alt={props.name} />
        </figure>
    );
});

export default FigureItem;