import React from 'react';
import LaunchItem from './LaunchItem/LaunchItem'
import styles from './LaunchList.module.css';

class LauchList extends React.Component {

    state = {
        slicedIndex: 100,
    }
    

    render() {
        let launchItems;
        if (this.props.launchData && this.props.launchData.length) {
            launchItems = this.props.launchData.slice(0, this.state.slicedIndex).map((data, i) => {
                return <LaunchItem
                    mission_patch_small={data.links.mission_patch_small}
                    mission_name={data.mission_name}
                    mission_id={data.mission_id}
                    launch_year={data.launch_year}
                    launch_success={data.launch_success}
                    landing_success={data.landing_success}
                    flight_number={data.flight_number}
                    key={data.flight_number}
                />
            }
            )
        } else {
            launchItems = <div className={styles.noData}><h2>No data found</h2></div>
        }

        return (
            <div className={styles.launchList}>
                { launchItems}
            </div>
        );
    }
}

export default LauchList;
