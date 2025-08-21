import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { links } from "./MyLinks";

const Navlinks = ({toggleOff}) => {
  const [showItems, setShowItems] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSubMenu = (linkName) => {
    setShowItems((prevShowItems) => ({
      ...prevShowItems,
      [linkName]: !prevShowItems[linkName],
    }));
  };

  const handleMouseEnter = (linkName) => {
    setHoveredItem(linkName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div
            className="md:cursor-pointer text-left group transition-all duration-150"
            onMouseEnter={() => handleMouseEnter(link.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="">
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  `${isActive ? "text-primary" : "text-gray-400"}`
                }
              >
                <button
                  className=" flex justify-between items-center md:pr-0 hover:text-white"
                  onClick={toggleOff}
                >
                  {link.name}
                  {/* <div className="ml-1">
                    {showItems[link.name] || hoveredItem === link.name ? (
                      <IoIosArrowUp />
                    ) : (
                      < IoIosArrowDown />
                    )}
                  </div> */}
                </button>
              </NavLink>
            </div>
            {/* {link.submenu && (
              <div>
                <div className="md:absolute md:top-[165px] hidden group-hover:md:block hover:md:block ">
                  <div className="w-4 h-4 left-3 absolute mt-[-5px] bg-[#333333] rotate-45"></div>
                  <div className="bg-[#333333] p-2 grid grid-cols-2 gap-4 ">
                    {link.sublinks.map((mysublinks) => (
                      <div className="" key={mysublinks.Head}>
                        <h1 className="text-white ">{mysublinks.Head}</h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="list-none text-sm text-gray hover:text-white mt-1" key={slink.name}>
                            {slink.name}
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
