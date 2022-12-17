import React, { useState } from "react";
import propertyContent from "../../PropertyContent";
import DropdownLoc from "./DropdownLoc";
import Card from "../Card";
import DropdownPrice from "./DropdownPrice";
import DropdownCat from "./DropdownCat";


  

const Filters = (props) => {


  function createCard(x) {
    return (
      <Card
        mode={props.mode}
        name={x.name}
        city={x.city}
        key={x.key}
        imgUrl={x.imageURL}
        bhk={x.BHK}
        category={x.category}
        rent={x.rent}
        location={x.location}
      />
    );
  }

  //LOCATION FILTER
  const [filteredLocation, setFilteredLocation] = useState("");
  const filterLocationChangeHandler = (changedValue) => {
    setFilteredLocation(changedValue);
  };
  const filteredArrayLoc = propertyContent.filter((property) => {
    return property.city.toLowerCase().includes(filteredLocation.toLowerCase());
  });

  //PRICE FILTER.
  const [filteredPrice, setFilteredPrice] = useState("");
  const filterPriceChangeHandler = (changedValue) => {
    setFilteredPrice(changedValue);
  };
  const filteredArrayPrice = filteredArrayLoc.filter((property) => {
    return (
      filteredPrice === "" ||
      (property.rent <= parseInt(filteredPrice) &&
        property.rent > parseInt(filteredPrice) - 10000)
    );
  });

  //CATEGORY FILTER
  const [filteredCat, setFilteredCat] = useState("");
  const filterCatChangeHandler = (changedValue) => {
    setFilteredCat(changedValue);
  };
  const filteredArrayCat = filteredArrayPrice.filter((property) => {
    return property.category.toLowerCase().includes(filteredCat.toLowerCase());
  });

  return (
    <>
      <div className="filter-box" style={{backgroundColor: props.mode==='dark' ? 'black' : 'bisque'}}>
        <h1 style={{color: props.mode==='dark' ? 'white' : 'black'}}>Filter Properties </h1>
        <DropdownLoc
          mode={props.mode}
          displayLocation={filteredLocation}
          onUpdateLocation={filterLocationChangeHandler}
        />
        <DropdownPrice
          mode={props.mode}
          displayPriceRange={filteredPrice}
          onUpdatePrice={filterPriceChangeHandler}
        />
        <DropdownCat
          mode={props.mode}
          displayCategory={filteredCat}
          onUpdateCat={filterCatChangeHandler}
        />
      </div>

      <div className="card-div" style={{backgroundColor: props.mode==='dark' ? '#7F7F7F' : 'white'}}>{filteredArrayCat.map(createCard)}</div>
    </>
  );
};

export default Filters;
