import { NextPage } from "next";
import { profile } from "root/routes/pages";

const Index: NextPage = () => {
  return (
    <>
      <profile.UI />
    </>
  );
};

export default Index;
