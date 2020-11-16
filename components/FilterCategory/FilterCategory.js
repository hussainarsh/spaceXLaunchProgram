import React from 'react';
import FilterItem from '../FilterItem/FilterItem';
import styles from './FilterCategory.module.css';

const FilterCategory = (props) => {
    const onFilterClick = (value) => {
        props.onFilterApply(props.filerType, value);
    }

    const filterItems = props.filterValues.map((filter) =>
        <FilterItem
            value={filter}
            key={filter}
            isActive={filter === props.activeItem}
            onClick={onFilterClick} />
    )

    return (
        <section className={styles.filterCategory}>
            <h3 className={styles.filterType}>{props.filterDisplayName}</h3>
            <div className={styles.filterValues}>
                {filterItems}
            </div>
        </section>
    );
}

export default FilterCategory;