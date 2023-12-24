import { NextPage } from "next";
import { statistics } from "root/routes/pages";

const Index: NextPage = () => {
  return (
    <>
      <statistics.UI />
    </>
  );
};

export default Index;
