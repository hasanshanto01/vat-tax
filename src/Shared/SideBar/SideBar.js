import React, { useContext } from "react";
import LinkItem from "../../components/LinkItem/LinkItem";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const SideBar = () => {
  const { isAdmin } = useContext(AuthContext);

  const menuList = [
    {
      title: "Personal info",
      path: "/personalInfo",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Report",
      path: "/report",
    },
    {
      title: "Admin",
      path: "/admin",
    },
  ];

  const filteredMenuList = menuList.filter((menu) => menu.title !== "Admin");
  // console.log(filteredMenuList);

  return (
    <ul className="lg:mx-7">
      {isAdmin
        ? menuList.map((menu, i) => <LinkItem key={i} menu={menu}></LinkItem>)
        : filteredMenuList.map((menu, i) => (
            <LinkItem key={i} menu={menu}></LinkItem>
          ))}
    </ul>
  );
};

export default SideBar;
