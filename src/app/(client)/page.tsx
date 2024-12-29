import Introduce from './introduce/Introduce';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ePioneer',
    description:
        'ePioneer là cầu nối giữa các xưởng và đại lý bán sỉ. Để giúp các đại lý lấy hàng tận nguồn với mức giá phải chăng mà vẫn đảm bảo chất lượng, công ty chúng tôi đóng vai trò làm cầu nối để thực hiện các bước đánh giá ban đầu, hỗ trợ trong việc hậu cần, vận chuyển và đảm bảo hàng hóa đến tay các đại lý một cách nhanh chóng, thuận tiện và nguyên vẹn. Ngoài ra, đối với các sản phẩm có tìm lực lớn, chúng tôi cũng hỗ trợ quảng bá và mở rộng thị trường để tạo điều kiện cho các đại lý, nhà phân phối sỉ dễ dàng tiếp cận người tiêu dùng hơn',
};

const Page = () => {
    return <Introduce />;
};

export default Page;
