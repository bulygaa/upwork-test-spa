import Wrapper from "components/common/Wrapper";
import Leads from "components/Leads";
import React, { FC } from "react";
import Header from "./Header";

const LeadsPage: FC = () => {
  return (
    <Wrapper header={<Header/>}>
      <Leads />
    </Wrapper>
  );
};

export default LeadsPage;
