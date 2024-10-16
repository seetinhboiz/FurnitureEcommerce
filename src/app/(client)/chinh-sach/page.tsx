import { Metadata } from "next";
import PolicyComponent from "./component/PolicyComponent";
export const metadata: Metadata = {
  title: 'Chính sách',
  description: 'Chính sách ePioneer',
}

export default function Policy() {
  return <PolicyComponent />;
}
