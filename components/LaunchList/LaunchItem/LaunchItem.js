import React from 'react';
import FigureItem from './FigureItem/FigureItem';
import DetailItem from './DetailItem/DetailItem';
import styles from './LaunchItem.module.css';

const LaunchItem = React.forwardRef((props,ref) => {
    return (
        <div className={styles.launchItem}>
            <FigureItem source={props.mission_patch_small} name={props.mission_name} />
            <p ref={ref} className={styles.launchName}>{props.mission_name}  #{props.flight_number}</p>
            <DetailItem value={props.mission_id} label="Mission Ids" />
            <DetailItem value={props.launch_year} label="Launch Year" />
            <DetailItem value={props.launch_success} label="Successful Launch" />
            <DetailItem value={props.landing_success} label="Successful Landing" />
        </div>
    );
})

export default LaunchItem;