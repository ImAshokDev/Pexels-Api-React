import React, { useEffect, useState } from "react";
import "./App.css";

export const SearchDropDown = () => {
  const [search, setSearch] = useState("");
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();
  const [open, setOpen] = useState(false);

  const fetchData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((obj) => {
        setCountryList(obj);
        setCountryListDefault(obj);
        // console.log("data", obj);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChange = (e) => {
    setOpen(!open);
    setSearch(e.target.value);
    const result = countryListDefault.filter((country) => {
      return country.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setCountryList(result);
    console.log("searc", result);
  };

  const openFunc = () => {
    setOpen(!open);
  };

  return (
    <div className="search">
      {search && search}

      <div className="inputBlock">
        <input
          type="text"
          value={search}
          onChange={onChange}
          onClick={openFunc}
          placeholder="select country"
        />
      </div>

      {open ? (
        <div>
          {countryList && (
            <div className="dropBlock">
              {countryList.map((data, index) => (
                <p
                  value={data.name}
                  onClick={() => setSearch(data.name)}
                  className="option"
                >
                  {data.name}
                </p>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
