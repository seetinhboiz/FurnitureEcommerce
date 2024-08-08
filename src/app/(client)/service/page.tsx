"use client";
import Footer from "@/components/Footer";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import lightImg from "../../assets/images/introduce/light.png";
import settingImg from "../../assets/images/introduce/setting.png";
import toolImg from "../../assets/images/introduce/tool.png";
import theme from "../theme";

const serviceData = [
  {
    title: "DỊCH VỤ CHO THUÊ TRANG THIẾT BỊ",
    img: settingImg,
    description: "Mô tả 1",
  },
  {
    title: "DỊCH VỤ THI CÔNG VÀ LẮP ĐẶT",
    img: toolImg,
    description: "Mô tả 2",
  },
  {
    title: "DỊCH VỤ SAU TRIỄN LÃM",
    img: lightImg,
    description:
      "Dịch vụ sau triển lãm trong ngành furniture không chỉ kết thúc khi sự kiện khép lại mà còn tiếp tục với nhiều hoạt động quan trọng. Sau khi triển lãm kết thúc, các nhà sản xuất và nhà cung cấp nội thất thường cung cấp dịch vụ chăm sóc khách hàng tận tâm, bao gồm việc theo dõi phản hồi từ khách hàng, cung cấp thông tin chi tiết về sản phẩm và hỗ trợ tư vấn. Đồng thời, họ cũng thực hiện các hoạt động chăm sóc khách hàng như gửi thông tin cập nhật về các sản phẩm mới và khuyến mãi, tổ chức các buổi gặp gỡ để thảo luận về nhu cầu cụ thể và giải pháp nội thất phù hợp. Những dịch vụ này giúp duy trì mối quan hệ với khách hàng và đối tác, đồng thời tối ưu hóa cơ hội kinh doanh trong lĩnh vực nội thất.",
  },
];

const Service = () => {
  const serviceTheme = theme;
  return (
    <ThemeProvider theme={serviceTheme}>
      <Grid xs={12} sx={{ backgroundColor: '#fff' }}>
        <Grid
          xs={12}
          container
          justifyContent={"space-evenly"}
          sx={{ paddingTop: 8, paddingBottom: 8 }}
        >
          {serviceData.map(({ title, description, img }, index) => (
            <Grid
              xs={10}
              md={3}
              item
              justifyContent={"center"}
              container
              key={index}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid xs={12}>
                <Paper elevation={24}>
                  <Card
                    sx={{
                      minHeight: 500,
                      maxHeight: 500,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 140,
                        backgroundColor: serviceTheme.palette.primary.main,
                      }}
                      image={img.src}
                      title="lightImg"
                      component="img"
                      style={{
                        objectFit: "contain",
                        paddingBottom: 20,
                        paddingTop: 20,
                      }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        color={serviceTheme.palette.primary.main}
                        fontWeight={"bold"}
                        textAlign={"center"}
                        fontFamily={"Inika"}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={serviceTheme.palette.primary.main}
                        textAlign={"justify"}
                        fontFamily={"Inika"}
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 12,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {description}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing sx={{ mt: "auto" }}>
                      <Button size="small">Chi tiết</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  );
};

export default Service;
