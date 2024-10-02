import { Metadata } from "next";
import PolicyComponent from "./component/PolicyComponent";
export const metadata: Metadata = {
  title: 'Policy',
  description: 'EPIONEER Policy',
}

export default function Policy() {
  return <PolicyComponent />;
}
