import { NextPage } from "next";
import { settings } from "root/routes/pages";

const Index: NextPage = () => {
  return (
    <>
      <settings.UI />
    </>
  );
};

export default Index;
