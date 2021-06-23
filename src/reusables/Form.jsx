import React from "react";
import Label from "./Label";
import CustomInput from "./CustomInput";

const Form = ({ attributes, onSubmit, onChange, values }) => {
  console.log(`values in form -`, values);
  return (
    <>
      <form onSubmit={onSubmit}>
        {Object.values(attributes).map(({ label, ...val }) => (
          <>
            <Label key="ind" text={label} />
            <CustomInput
              onChange={onChange}
              value={values && values[val.name]}
              {...val}
            />
            <br />
          </>
        ))}
      </form>
    </>
  );
};

export default Form;
