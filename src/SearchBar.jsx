import React, { useEffect, useState } from "react";

export const SearchDropDown = () => {
  const [search, setSearch] = useState("");
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

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
    setSearch(e.target.value);
    const result = countryListDefault.filter((country) => {
      return country.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setCountryList(result);
    console.log("searc", result);
  };

  return (
    <div className="search">
      {search && search}

      <input type="text" value={search} onChange={onChange} />
      {countryList && (
        <div>
          {countryList.map((data, index) => (
            <div key={index}>
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
