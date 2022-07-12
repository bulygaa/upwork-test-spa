import React, { FC } from "react";
import S from "./styled";
import { SelectProps } from "./types";

const Select: FC<SelectProps> = ({ options, ...rest }) => {
  return (
      <S.Select {...(rest as any)}>
        {options?.map((option, index) => (
          <S.Option key={`--select-option_${option}-${index}`} value={option.value}>{option.label}</S.Option>
        ))}
      </S.Select>
  );
};

export default Select;
