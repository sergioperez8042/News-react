import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import { NewsScreen } from "../components/news/NewsScreen";
import { NewsDetails } from '../components/news/NewsDetails';
import News from "../models/news";





export const Navigation = (props: News) => {

  const activeLink = "bg-red-100 text-white";
  const link = "text-black";

  return (
    <div className=" main-layout ">
      <nav >
        <img src={logo} alt="React logo" />
        <hr />
        <ul>
          
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : link)}
              to="/news"
            >
              News
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<NewsScreen />}></Route>
        <Route path="/news" element={<NewsScreen />}></Route>
        <Route path="/details/:id" element={<NewsDetails news={props}    />}></Route>
      </Routes>
    </div>
  );
};
