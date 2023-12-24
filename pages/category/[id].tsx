import { NextPage } from "next";
import { category } from "root/routes/pages";

const Index: NextPage = () => {
  return (
    <>
      <category.UI />
    </>
  );
};

export default Index;
