import React from "react";

const FormInput = ({ item, register }) => {
  const { category_name, description } = item;
  // console.log("item=====", item);
  console.log("item=====", description);
  // console.log("register-From=====", register);

  // const regex = /"|'|,/gi;

  return (
    <div className="w-full lg:w-3/4 my-2 flex items-center">
      <label className="w-3/5 p-[6px]">{description}</label>

      {/* [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  */}

      <input
        type="number"
        defaultValue={0}
        min={0}
        className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
        // {...register(`${description.replaceAll(regex, "")}`, {
        //   // required: requiredStatus,
        //   valueAsNumber: true,
        // })}
        {...register(`${description}`, {
          // required: requiredStatus,
          valueAsNumber: true,
        })}
      />
    </div>
  );
};

export default FormInput;
