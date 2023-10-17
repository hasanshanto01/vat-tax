import React, { useRef } from "react";

import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "react-router-dom";

const BusinessSchema = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "TestPdf",
  });

  const returnReportData = useLoaderData();
  console.log("rr:", returnReportData);

  const {
    Basic_Info,
    Particulars_f_Income,
    Particulars_of_Tax_Payment,
    Tax_Consumption,
  } = returnReportData;

  const tinNumber = "123456789012";
  const dob = "01012023";

  const tableDatas = [
    {
      particulars: "Sales / Turnover / Receipt",
      amount: 10,
    },
    {
      particulars: "Gross Profit",
      amount: 11,
    },
    {
      particulars: "General, Administrative, Selling and Other Expenses",
      amount: 12,
    },
    {
      particulars: "Bad Debt Expense",
      amount: 13,
    },
  ];

  const table2aDatas = [
    {
      particulars: "Cash and Bank Balance",
      amount: 10,
    },
    {
      particulars: "Inventory",
      amount: 11,
    },
    {
      particulars: "Fixed Assets",
      amount: 12,
    },
    {
      particulars: "Other Assets",
      amount: 13,
    },
  ];

  const table2bDatas = [
    {
      particulars: "Opening Capital",
      amount: 14,
    },
    {
      particulars: " Net Profit",
      amount: 15,
    },
    {
      particulars: "Drawing during the Income Year",
      amount: 16,
    },
  ];

  const table3Datas = [
    {
      particulars:
        "Life Insurance Premium or Contractual Deferred Annuity Paid in Bangladesh ",
      amount: 21,
    },
    {
      particulars: "Contribution to Deposit Pension Scheme",
      amount: 22,
    },
    {
      particulars:
        "Investment in Government Securities, Unit Certificate, Mutual Fund, ETF or Joint Investment Scheme Unit Certificate",
      amount: 23,
    },
    {
      particulars:
        "Investment in Securities listed with Approved Stock Exchange",
      amount: 24,
    },
    {
      particulars:
        "Contribution to Provident Fund to which Provident Fund Act, 1925 applies",
      amount: 25,
    },
    {
      particulars:
        "Self & Employer's Contribution to Recognized Provident Fund",
      amount: 26,
    },
    {
      particulars: "Contribution to Super Annuation Fund",
      amount: 27,
    },
    {
      particulars: "Contribution to Benevolent Fund / Group Insurance Premium",
      amount: 28,
    },
    {
      particulars: "Contribution to Zakat Fund",
      amount: 29,
    },
    {
      particulars: "Others, if any (provide detail)",
      amount: 30,
    },
  ];

  const handleSum = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
      // console.log(element);
      sum += element[1];
    });
    return sum;
  };

  const filteredSum = (arr, taxExemptedValue) => {
    const filteredArray = arr.filter(
      (element) => element.taxExempted === taxExemptedValue
    );
    const sum = handleSum(filteredArray);
    return sum;
  };

  // const totalIncome = handleSum();
  const taxExemptedIncome = filteredSum(tableDatas, true);
  const taxableIncome = filteredSum(tableDatas, false);

  return (
    <div className="w-full mb-10">
      <div className="justify-between mr-20 mt-5 mb-2 hidden lg:flex">
        <div className="ml-20">
          <Link to="/report" className="btn btn-sm btn-outline btn-primary">
            <FontAwesomeIcon icon={faArrowLeftLong} className="w-4 h-4" />
          </Link>
        </div>
        <button
          className="btn btn-sm btn-outline btn-primary"
          onClick={handlePrint}
        >
          <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
        </button>
      </div>
      <div
        className="w-full lg:w-[65%] lg:mx-auto my-3 lg:my-0 mb-6 p-3 text-sm"
        ref={componentRef}
      >
        <div className="w-[210mm] h-[270mm] border p-2">
          <div className="mt-8">
            <div className="">
              <p className="font-bold text-center mb-2">
                (Particulars of Income from Business)
              </p>
              <div className="flex my-3 mx-2">
                <p className="font-semibold w-1/2">
                  Name of the Taxpayer:{" "}
                  <span className="border-dashed border-b-2 border-black inline-block w-[55%]">
                    {/* {Basic_Info?.Name_of_the_Assessee} */}
                  </span>
                </p>
                <div className="flex justify-center items-center gap-2 w-1/2">
                  <p className="font-semibold">TIN:</p>
                  <table className="border-collapse border border-black">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr>
                        {Array.from(Basic_Info?.TIN).map((element, i) => (
                          <td
                            className="border border-black w-6 text-center font-bold"
                            key={i}
                          >
                            {element}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid grid-cols-2 my-3 mx-2">
                <p className="font-semibold w-1/2">
                  Name of Business:
                  <span>{/* {Basic_Info?.Name_of_the_Assessee} */}</span>
                </p>
                <p className="font-semibold w-1/2">
                  Nature of Business:
                  <span>{/* {Basic_Info?.Name_of_the_Assessee} */}</span>
                </p>
                <p className="font-semibold w-1/2">
                  Address of Business:
                  <span>{/* {Basic_Info?.Name_of_the_Assessee} */}</span>
                </p>
              </div>
            </div>
            <div className="mt-2">
              <table className="w-full border-collapse border border-black">
                <thead>
                  <tr>
                    <th className="border border-black w-8">Sl.</th>
                    <th className="border border-black">Summary of Income</th>
                    <th className="border border-black w-36 lg:w-56">
                      Amount in Taka
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableDatas.map((data, i) => (
                    <tr key={i}>
                      <td className="border border-black text-center">
                        {i + 1}
                      </td>
                      <td className="border border-black pl-2">
                        {data.particulars}
                      </td>
                      <td className="border border-black text-right w-36 lg:w-56 pr-2">
                        {data.amount}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="border border-black text-center">
                      {tableDatas.length + 1}
                    </td>
                    <td className="border border-black pl-2">
                      Net Profit ( 2 - 3)
                    </td>
                    <td className="border border-black text-right w-36 lg:w-56 pr-2">
                      {/* {amount} */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <table className="w-full border-collapse border border-black">
              <thead>
                <tr>
                  <th className="border border-black w-8">Sl.</th>
                  <th className="border border-black">
                    Summary of Balance Sheet
                  </th>
                  <th className="border border-black w-36 lg:w-56">
                    Amount in Taka
                  </th>
                </tr>
              </thead>
              <tbody>
                {table2aDatas.map((data, i) => (
                  <tr key={i}>
                    <td className="border border-black text-center">{i + 6}</td>
                    <td className="border border-black pl-2">
                      {data.particulars}
                    </td>
                    <td className="border border-black text-right w-36 lg:w-56 pr-2">
                      {data.amount}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="border border-black text-center">10</td>
                  <td className="border border-black pl-2">
                    Total Assets ( 6 + 7 + 8 + 9)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {/* {amount} */}
                  </td>
                </tr>
                {table2bDatas.map((data, i) => (
                  <tr key={i}>
                    <td className="border border-black text-center">
                      {i + 11}
                    </td>
                    <td className="border border-black pl-2">
                      {data.particulars}
                    </td>
                    <td className="border border-black text-right w-36 lg:w-56 pr-2">
                      {data.amount}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="border border-black text-center">14</td>
                  <td className="border border-black pl-2">
                    Closing Capital (11 + 12 - 13)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {/* {amount} */}
                  </td>
                </tr>
                <tr>
                  <td className="border border-black text-center">15</td>
                  <td className="border border-black pl-2">Liabilities</td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {/* {amount} */}
                  </td>
                </tr>
                <tr>
                  <td className="border border-black text-center">16</td>
                  <td className="border border-black pl-2">
                    Total Capital & Liabilities (14 + 15)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {/* {amount} */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <div className="">
              <p className="font-bold text-center mb-2">
                (Particulars of Investment Tax Credit)
              </p>
              <div className="flex my-3 mx-2">
                <p className="font-semibold w-1/2">
                  Name of the Taxpayer:{" "}
                  <span className="border-dashed border-b-2 border-black inline-block w-[55%]">
                    {/* {Basic_Info?.Name_of_the_Assessee} */}
                  </span>
                </p>
                <div className="flex justify-center items-center gap-2 w-1/2">
                  <p className="font-semibold">TIN:</p>
                  <table className="border-collapse border border-black">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr>
                        {Array.from(Basic_Info?.TIN).map((element, i) => (
                          <td
                            className="border border-black w-6 text-center font-bold"
                            key={i}
                          >
                            {element}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="font-semibold w-1/2 mx-2">
                Particulars of Rebatable Investment
                <span>{/* {Basic_Info?.Name_of_the_Assessee} */}</span>
              </p>
            </div>
            <div className="mt-2">
              <table className="w-full border-collapse border border-black">
                <thead>
                  <tr>
                    <th className="border border-black w-8">Sl.</th>
                    <th className="border border-black">Summary of Income</th>
                    <th className="border border-black w-36 lg:w-56">
                      Amount in Taka
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table3Datas.map((data, i) => (
                    <tr key={i}>
                      <td className="border border-black text-center">
                        {i + 1}
                      </td>
                      <td className="border border-black pl-2">
                        {data.particulars}
                      </td>
                      <td className="border border-black text-right w-36 lg:w-56 pr-2">
                        {data.amount}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="border border-black text-center">
                      {table3Datas.length + 1}
                    </td>
                    <td className="border border-black pl-2">
                      Total Investment (aggregate of 1 to 10)
                    </td>
                    <td className="border border-black text-right w-36 lg:w-56 pr-2">
                      {/* {amount} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black text-center">
                      {table3Datas.length + 2}
                    </td>
                    <td className="border border-black pl-2">
                      Amount of Tax Rebate
                    </td>
                    <td className="border border-black text-right w-36 lg:w-56 pr-2">
                      {/* {amount} */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 mb-16 flex justify-center gap-8 lg:hidden">
        <Link
          to="/report"
          className="w-[150px] btn btn-sm btn-outline btn-primary"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className="w-4 h-4" />
        </Link>
        <button
          className="w-[150px] btn btn-sm btn-outline btn-primary"
          onClick={handlePrint}
        >
          <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BusinessSchema;
