import React from "react";
import "./Filters.css";

const DropdownPrice = (props) => {

    const dropdownChangeHandler = event => {
      console.log(event.target.value);
        props.onUpdatePrice(event.target.value);
      };

    return (
            <div className='expenses-filter'>
              <div className='expenses-filter__control'>
                <label  className="expenses-filter__label" style={{color: props.mode==='dark' ? 'gold' : 'grey'}} >Filter by Price</label>
                <select value={props.displayPrice} onChange={dropdownChangeHandler} className="btn btn-dark btn-outline-peace">
                <option className="dropdown-item" value=''>All ranges</option>
                  <option className="dropdown-item" value="10000">₹10,000 or below</option>
                  <option className="dropdown-item" value='20000'>₹10,001 to ₹20,000</option>
                  <option className="dropdown-item" value='30000'>₹20,001 to ₹30,000</option>
                  <option className="dropdown-item" value='40000'>₹30,001 to ₹40,000</option>
                  <option className="dropdown-item" value='50000'>₹40,001 to ₹50,000</option>
                  <option className="dropdown-item" value='1000000'>₹50,001 or above</option>
                </select>
              </div>
            </div>
    )
}

export default DropdownPrice;