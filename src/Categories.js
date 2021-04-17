import React from 'react';

const Categories = ({filterItems}) => {
  return <div className="btn-container">
    <button className="filter-btn" onClick={() => filterItems('breakfast')}>Breakfast</button>
    <button className="filter-btn" onClick={() => filterItems('lunch')}>Lunch</button>
    <button className="filter-btn" onClick={() => filterItems('shakes')}>Shakes</button>
  </div>;
};

export default Categories;
