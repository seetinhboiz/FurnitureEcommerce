import Footer from "@/components/Footer";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Discovery from "./component/Discovery";
import RecruitmentComponent from "./component/Recruitment";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tuyển dụng',
    description: 'Tuyển dụng ePioneer',
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
