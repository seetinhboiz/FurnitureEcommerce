import Footer from "@/components/Footer";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Discovery from "./component/Discovery";
import RecruitmentComponent from "./component/Recruitment";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Recruitment',
    description: 'EPIONEER Recruitment',
}

const Recruitment = () => {
    return (
        <>
            <Banner />
            <Discovery />
            <RecruitmentComponent />
            <Contact />
            <Footer />
        </>
    );
};

export default Recruitment;
