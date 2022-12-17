import React from "react";
import "./Filters.css";

const DropdownCat = (props) => {

    const dropdownChangeHandler = event => {
        props.onUpdateCat(event.target.value);
    };

    return (
            <div className='expenses-filter'>
              <div className='expenses-filter__control'>
                <label  className="expenses-filter__label" style={{color: props.mode==='dark' ? 'gold' : 'grey'}}>Filter by Category</label>
                <select value={props.displayCategory} onChange={dropdownChangeHandler} className="btn btn-dark btn-outline-peace">
                <option className="dropdown-item" value=''>All</option> 
                  <option className="dropdown-item" value="Bungalow">Bungalow</option>
                  <option className="dropdown-item" value='Holiday Home'>Holiday Home</option>
                  <option className="dropdown-item" value='Farm House'>Farm House</option>
                  <option className="dropdown-item" value='Independent House'>Independent House</option>
                </select>
              </div>
            </div>
    )
}

export default DropdownCat;