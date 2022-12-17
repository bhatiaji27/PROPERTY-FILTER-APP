import React from "react";
import "./Filters.css"

const DropdownLoc = (props) => {

        const dropdownChangeHandler = event => {
            props.onUpdateLocation(event.target.value);
        };
        
          return (
            <div className='expenses-filter'>
              <div className='expenses-filter__control'>
                <label className="expenses-filter__label" style={{color: props.mode==='dark' ? 'gold' : 'grey'}}>Filter by Location</label>
                <select value={props.displayLocation} onChange={dropdownChangeHandler} className="btn btn-dark btn-outline-peace">
                <option className="dropdown-item" value=''>All</option>
                  <option className="dropdown-item" value='Delhi'>Delhi</option>
                  <option className="dropdown-item" value='Kanpur'>Kanpur</option>
                  <option className="dropdown-item" value='Mumbai'>Mumbai</option>
                  <option className="dropdown-item" value='Kolkata'>Kolkata</option>
                  <option className="dropdown-item" value='Ahmedabad'>Ahmedabad</option>
                  <option className="dropdown-item" value='Lucknow'>Lucknow</option>
                </select>
              </div>
            </div>
          );
}

export default DropdownLoc;