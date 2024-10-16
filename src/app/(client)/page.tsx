import Introduce from "./introduce/Introduce";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ePioneer",
  description: "YOUR FURNITURE, OUR STORY",
};

const Page = () => {
  return <Introduce />;
};

export default Page;
