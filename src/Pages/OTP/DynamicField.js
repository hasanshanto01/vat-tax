import React, { useState } from "react";

const DynamicField = () => {
  const [formData, setFormData] = useState([
    {
      name: "",
      age: 0,
    },
  ]);
  const [form2Data, setForm2Data] = useState([
    {
      playerName: "",
      playerAge: 0,
    },
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      formData,
      form2Data,
    };
    console.log("submit", submitData);
  };

  const handleChnage = (e, i) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    if (fieldName === "name" || fieldName === "age") {
      let data = [...formData];
      data[i][fieldName] = fieldValue;
      setFormData(data);
    } else if (fieldName === "playerName" || fieldName === "playerAge") {
      let data2 = [...form2Data];
      data2[i][fieldName] = fieldValue;
      setForm2Data(data2);
    }
  };

  const handleAdd = () => {
    // console.log("add");
    let obj = {
      name: "",
      age: 0,
    };

    setFormData([...formData, obj]);
  };
  const handlePlayerAdd = () => {
    // console.log("add");
    let obj = {
      playerName: "",
      playerAge: 0,
    };

    setForm2Data([...form2Data, obj]);
  };

  return (
    <div className="w-1/3 border border-red-500 mx-auto p-5">
      <h2 className="text-center">Dynamic Form Field</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="border border-green-400 my-3">
          {formData.map((data, i) => (
            <div key={i} className="my-2">
              <input
                type="text"
                placeholder="Type name"
                name="name"
                className="border border-black p-1"
                onChange={(e) => handleChnage(e, i)}
                value={data?.name}
              ></input>
              <input
                type="number"
                name="age"
                value={data.age}
                className="border border-black p-1 ml-2"
                onChange={(e) => handleChnage(e, i)}
              ></input>
            </div>
          ))}
          {formData.length === 5 ? (
            <button className="btn btn-sm my-4" onClick={handleAdd} disabled>
              Add
            </button>
          ) : (
            <button className="btn btn-sm my-4" onClick={handleAdd}>
              Add
            </button>
          )}
        </div>

        <div className="border border-blue-400 my-3">
          {form2Data.map((data, i) => (
            <div key={i} className="my-2">
              <input
                type="text"
                placeholder="Type player"
                name="playerName"
                className="border border-black p-1"
                onChange={(e) => handleChnage(e, i)}
                value={data.playerName}
              ></input>
              <input
                type="number"
                name="playerAge"
                value={data?.playerAge}
                className="border border-black p-1 ml-2"
                onChange={(e) => handleChnage(e, i)}
              ></input>
            </div>
          ))}
          {form2Data.length === 5 ? (
            <button
              className="btn btn-sm my-4"
              onClick={handlePlayerAdd}
              disabled
            >
              Add
            </button>
          ) : (
            <button className="btn btn-sm my-4" onClick={handlePlayerAdd}>
              Add
            </button>
          )}
        </div>

        <button className="btn btn-sm my-4">Submit</button>
      </form>
    </div>
  );
};

export default DynamicField;
