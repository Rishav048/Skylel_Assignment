import React, { useState } from "react";
import style from "./MultiSelect.module.css";
let CountryArray = [
  "Australia",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Bangladesh",
  "Brazil",
  "Burma",
  "Canada",
  "Cuba",
  "Russia",
  "Egypt",
  "Serbia",
  "France",
  "Finland",
  "India",
  "Sri Lanka",
  "Thailand",
  "Ireland",
  "Italy",
];

const MultiSelect = ({ val, readOnly }) => {
  const [Country, setCountry] = useState(CountryArray);
  const [SelectedCountries, setSelectedCountries] = useState(val);

  const handleSelectedCountries = (event) => {
    if (event.target.checked) {
      setSelectedCountries([...SelectedCountries, event.target.value]);
    } else {
      setSelectedCountries(
        SelectedCountries.filter((option) => option !== event.target.value)
      );
    }
  };

  const handleCountrySearch = (event) => {
    let value = event.target.value;
    let SearchedCountry = Country.filter((country) => country == value);
    console.log(SearchedCountry);
    if (SearchedCountry.length !== 0) {
      setCountry(SearchedCountry);
    } else {
      setCountry(CountryArray);
    }
  };

  return (
    <div className={style.Maindiv}>
      <input
        onChange={handleCountrySearch}
        type="text"
        placeholder="eg : Australia"
        className={style.InputElem}
      />
      <div className={style.checkboxDiv}>
        {Country &&
          Country.map((item, index) => (
            <div
              key={index * Math.random() * Date.now()}
              className={style.wrapDiv}
            >
              <input
                onChange={handleSelectedCountries}
                className={style.CheckboxItem}
                type="checkbox"
                checked={SelectedCountries && SelectedCountries.includes(item)}
                value={item}
                disabled={readOnly}
              />
              <label className={style.LabelItem} htmlFor="checkbox">
                {item}
              </label>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultiSelect;
