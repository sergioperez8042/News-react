import React from "react";
import { HeroCard } from "../dc/ui/heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useSearchParams } from "react-router-dom";

export const SearchScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("q");
  const heroesFiltered = getHeroesByName(filter);
  //pendiente hacer boton buscar
  const hanldeFilter = (e) => {
    setSearchParams({ q: e.target.value });
  };
  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className=" row"></div>
      <div className="col-5">
        <h4>Search Form</h4>
        <hr />
        <form>
          <input
            type=" text"
            placeholder="Find your hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={filter}
            onChange={hanldeFilter}
          />
        </form>
      </div>
      <div className=" col-7 ">
        <h4> Results</h4>
        <hr />
        {heroesFiltered.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};
