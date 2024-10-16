import { Metadata } from "next";
import ContactComponent from "./component/ContactComponent";
export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ ePioneer",
};

const Contact = () => {
  return <ContactComponent />;
};

export default Contact;
