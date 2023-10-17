import React, { useContext } from "react";
import QueryMenu from "../Shared/QueryMenu/QueryMenu";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { personalDetails } = useContext(AuthContext);
  // console.log(personalDetails);

  return (
    <div className="w-full lg:w-[82%] mx-8">
      <QueryMenu></QueryMenu>
      <div className="my-5 px-5 py-2 flex flex-col-reverse md:flex-row md:justify-between rounded-md bg-secondary">
        <p className="mt-2 md:mt-0">
          Tax File: <strong>{personalDetails?.assessment_year}</strong>
        </p>
        <p>
          TaxPayer Name: <strong>{personalDetails?.assess_name}</strong>
        </p>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
