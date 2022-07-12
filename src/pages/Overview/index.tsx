import Wrapper from "components/common/Wrapper";
import Overview from "components/Overview";
import React, { FC } from "react";
import Header from "./Header";

const OverviewPage: FC = () => {
  return (
    <Wrapper header={<Header />}>
      <Overview />
    </Wrapper>
  );
};

export default OverviewPage;
