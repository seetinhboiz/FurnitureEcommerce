import { Metadata } from "next";
import ContactComponent from "./component/ContactComponent";
export const metadata: Metadata = {
  title: "Contact",
  description: "EPIONEER Contact",
};

const Contact = () => {
  return <ContactComponent />;
};

export default Contact;
