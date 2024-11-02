import Footer from "@/components/Footer";
import Contact from "./component/Contact";
import Discovery from "./component/Discovery";
import RecruitmentComponent from "./component/Recruitment";
import type { Metadata } from 'next'
import Banner from "../trang-chu/component/Banner";

export const metadata: Metadata = {
    title: 'Tuyển dụng',
    description: 'Tuyển dụng ePioneer',
}

const Recruitment = () => {
    return (
        <>
            <Banner bannerName="recruitmentBannerImg" />
            <Discovery />
            <RecruitmentComponent />
            <Contact />
            <Footer />
        </>
    );
};

export default Recruitment;
