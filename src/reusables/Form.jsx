import React from "react";
import Label from "./Label";
import CustomInput from "./CustomInput";

const Form = ({ attributes, onSubmit, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        {Object.values(attributes).map(({ label, ...val }) => (
          <>
            <Label key="ind" text={label} />
            <CustomInput onChange={onChange} {...val} />
            <br />
          </>
        ))}
      </form>
    </>
  );
};

export default Form;
