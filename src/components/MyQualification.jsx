import { useState, useEffect } from "react";
import {
  faBagShopping,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../utils/Title";
import { NavLink, Outlet } from "react-router-dom";

const MyQualification = () => {
  const activeStyle = {
    color: "#f26200",
    borderBottom: "2px solid green",
  };
  const [animateSection, setAnimateSection] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateSection("");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [animateSection]);
  return (
    <section id='qualification' className='sm:w-4/5 m-auto text-center'>
      <Title title='Qualification' subTitle='My journey' />
      <div className='btns flex justify-center gap-8'>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='/'
        >
          <i className='text-sm px-1'>
            <FontAwesomeIcon icon={faChartColumn} />
          </i>
          Education
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='/work'
        >
          <i className='text-sm px-1'>
            <FontAwesomeIcon icon={faBagShopping} />
          </i>
          Work
        </NavLink>
      </div>
      <Outlet />
    </section>
  );
};

export default MyQualification;
