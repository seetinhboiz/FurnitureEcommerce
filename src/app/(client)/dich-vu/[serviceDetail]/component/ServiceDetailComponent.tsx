"use client";
import Footer from "@/components/Footer";
import { Grid, ThemeProvider, Typography } from "@mui/material";
import Image from "next/image";
import theme from "../../../theme";

export default function ServiceDetailComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        xs={12}
        container
        justifyContent={"center"}
        sx={{ backgroundColor: theme.palette.primary.contrastText }}
      >
        <Grid
          container
          justifyContent={"center"}
          xs={12}
          sx={{
            backgroundImage: `url('/images/service/bgImg.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <Grid xs={12} item>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              textAlign={"center"}
              color={theme.palette.primary.main}
              sx={{ paddingTop: 4 }}
            >
              DỊCH VỤ CHO THUÊ THIẾT BỊ
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              textAlign={"center"}
              color={theme.palette.primary.main}
              sx={{ paddingTop: 4, paddingBottom: 4 }}
            >
              {"Giải pháp tối ưu".toUpperCase()}
            </Typography>
          </Grid>
          <Grid xs={8} item>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              textAlign={"center"}
              color={theme.palette.primary.main}
              sx={{ paddingBottom: 4 }}
            >
              Khám phá nhiều loại thiết bị cho thuê dành cho triển lãm của chúng
              tôi. Từ thiết bị chiếu sáng đến hệ thống nguồn điện, chúng tôi có
              mọi thứ bạn cần để giúp triển lãm của bạn thành công.
            </Typography>
          </Grid>
        </Grid>

        <Grid xs={10} item>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            textAlign={"center"}
            color={theme.palette.primary.main}
            sx={{ paddingTop: 6, paddingBottom: 6 }}
          >
            {"Khám phá nhiều loại thiết bị cho thuê dành cho triển lãm của chúng tôi".toUpperCase()}
          </Typography>
        </Grid>
        <Grid xs={10} item container justifyContent={"center"}>
          <Typography
            variant="h6"
            textAlign={"justify"}
            color={theme.palette.primary.main}
            sx={{ paddingBottom: 6 }}
          >
            Tại ePioneer, chúng tôi cung cấp nhiều lựa chọn thiết bị cho thuê
            chất lượng cao để đáp ứng mọi nhu cầu triển lãm của bạn. Từ thiết bị
            chiếu sáng đến hệ thống nguồn điện, chúng tôi đều hỗ trợ bạn.
          </Typography>
          <Grid md={6} xs={12}>
            <Image src={'/images/service/blog1.jpg'} alt="" layout="responsive" width={1} height={1} objectFit="contain"/>
          </Grid>
        </Grid>

        <Grid xs={12} item>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            textAlign={"center"}
            color={theme.palette.primary.main}
            sx={{ paddingTop: 16, paddingBottom: 6 }}
          >
            {"Thuê thiết bị chất lượng hàng đầu cho triển lãm của bạn".toUpperCase()}
          </Typography>
        </Grid>
        <Grid xs={10} item container justifyContent={"center"}>
          <Typography
            variant="h6"
            textAlign={"justify"}
            color={theme.palette.primary.main}
            sx={{ paddingBottom: 6 }}
          >
            Tại ePioneer, chúng tôi cung cấp nhiều loại thiết bị cho thuê chất
            lượng hàng đầu để triển lãm. Thiết bị của chúng tôi đáng tin cậy,
            được bảo trì tốt và được thiết kế để giúp bạn tạo ra một sự kiện
            thành công và đáng nhớ.
          </Typography>
          <Grid
            xs={12}
            container
            item
            justifyContent={"space-between"}
            sx={{ paddingTop: 4, paddingBottom: 4 }}
          >
            <Grid md={4} xs={12} item container>
              <Grid
                xs={12}
                item
                justifyContent={"center"}
                container
                sx={{ mb: 2 }}
              >
                <Image src={'/images/icon/hand.png'} alt="icon" width={120} />
              </Grid>
              <Grid xs={12} item justifyContent={"center"} container>
                <Typography
                  variant="h5"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Tùy chọn linh hoạt
                </Typography>
              </Grid>
              <Grid xs={12} item justifyContent={"center"} container>
                <Typography
                  variant="h6"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                >
                  Chọn từ nhiều phương án thuê khác nhau để phù hợp với nhu cầu
                  và ngân sách cụ thể của bạn.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              md={4}
              xs={12}
              item
              container
              sx={{ paddingTop: 4, paddingBottom: 4 }}
            >
              <Grid
                xs={12}
                item
                justifyContent={"center"}
                container
                sx={{ mb: 2 }}
              >
                <Image src={'/images/icon/support.png'} alt="icon" width={120} />
              </Grid>
              <Grid xs={12} item justifyContent={"center"} container>
                <Typography
                  variant="h5"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Hỗ trợ của chuyên gia
                </Typography>
              </Grid>
              <Grid xs={12} item justifyContent={"center"} container>
                <Typography
                  variant="h6"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                >
                  Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ và hướng dẫn
                  trong suốt quá trình cho thuê.
                </Typography>
              </Grid>
            </Grid>
            <Grid md={4} xs={12} item container>
              <Grid
                xs={12}
                item
                justifyContent={"center"}
                container
                sx={{ mb: 2 }}
              >
                <Image src={'/images/icon/express.png'} alt="icon" width={180} />
              </Grid>
              <Grid xs={12} item justifyContent={"center"} container>
                <Typography
                  variant="h5"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Giao hàng đúng thời gian
                </Typography>
              </Grid>
              <Grid xs={12} item justifyContent={"center"} container>
                <Typography
                  variant="h6"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                >
                  Chúng tôi hiểu tầm quan trọng của việc giao hàng kịp thời và
                  đảm bảo rằng thiết bị đến đúng giờ.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} container item justifyContent={"center"}>
            <Grid xs={12} item>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                textAlign={"center"}
                color={theme.palette.primary.main}
                sx={{ paddingTop: 16, paddingBottom: 6 }}
              >
                {"Khám phá quy trình cho thuê triển lãm dễ dàng và thuận tiện".toUpperCase()}
              </Typography>
            </Grid>
            <Grid xs={12} container item justifyContent={"space-evenly"}>
              <Grid md={3} xs={12} item>
                <Image src={'/images/service/blog1.jpg'} alt="icon" layout="responsive" />
                <Typography
                  variant="h6"
                  textAlign={"center"}
                  fontWeight={"bold"}
                  color={theme.palette.primary.main}
                >
                  Chọn trong số nhiều thiết bị cho thuê cho triển lãm
                </Typography>
                <Typography
                  variant="subtitle1"
                  textAlign={"center"}
                  color={theme.palette.primary.main}
                >
                  Tại ePioneer, chúng tôi cung cấp quy trình cho thuê liền mạch,
                  từ yêu cầu đến giao hàng và thiết lập.
                </Typography>
              </Grid>
              <Grid
                md={3}
                xs={12}
                item
                sx={{ paddingBottom: 4, paddingTop: 4 }}
              >
                <Image src={'/images/service/blog1.jpg'} alt="icon" layout="responsive" width={1} height={1} objectFit="contain"/>
                <Typography
                  variant="h6"
                  textAlign={"center"}
                  fontWeight={"bold"}
                  color={theme.palette.primary.main}
                >
                  Chọn trong số nhiều thiết bị cho thuê cho triển lãm
                </Typography>
                <Typography
                  variant="subtitle1"
                  textAlign={"center"}
                  color={theme.palette.primary.main}
                >
                  Tại ePioneer, chúng tôi cung cấp quy trình cho thuê liền mạch,
                  từ yêu cầu đến giao hàng và thiết lập.
                </Typography>
              </Grid>
              <Grid md={3} xs={12} item>
                <Image src={'/images/service/blog1.jpg'} alt="icon" layout="responsive" width={1} height={1} objectFit="contain"/>
                <Typography
                  variant="h6"
                  textAlign={"center"}
                  fontWeight={"bold"}
                  color={theme.palette.primary.main}
                >
                  Chọn trong số nhiều thiết bị cho thuê cho triển lãm
                </Typography>
                <Typography
                  variant="subtitle1"
                  textAlign={"center"}
                  color={theme.palette.primary.main}
                >
                  Tại ePioneer, chúng tôi cung cấp quy trình cho thuê liền mạch,
                  từ yêu cầu đến giao hàng và thiết lập.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} item>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              textAlign={"center"}
              color={theme.palette.primary.main}
              sx={{ paddingTop: 16, paddingBottom: 6 }}
            >
              {"Khám phá những ưu điểm khi lựa chọn giải pháp triển lãm của ePioneer".toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={10} item container justifyContent={"center"}>
          <Typography
            variant="h6"
            textAlign={"justify"}
            color={theme.palette.primary.main}
            sx={{ paddingBottom: 6 }}
          >
            Với thiết bị cho thuê của ePioneer, bạn có thể tạo ra những triển
            lãm tuyệt đẹp để lại ấn tượng lâu dài. Các giải pháp toàn diện và
            thiết bị hàng đầu của chúng tôi đảm bảo sự kiện diễn ra suôn sẻ và
            thành công.
          </Typography>
          <Grid md={6} xs={12}>
            <Image src={'/images/service/blog1.jpg'} alt="" layout="responsive" width={1} height={1} objectFit="contain"/>
          </Grid>
          <Grid
            xs={12}
            item
            container
            justifyContent={"space-evenly"}
            sx={{ paddingTop: 4, paddingBottom: 4 }}
          >
            <Grid md={4} xs={12} item container sx={{ paddingBottom: 4 }}>
              <Grid
                xs={12}
                item
                justifyContent={"center"}
                container
                sx={{ mb: 2 }}
              >
                <Image src={'/images/icon/like.png'} alt="icon" width={120} />
              </Grid>
              <Grid xs={12} item justifyContent={"center"} container>
                <Typography
                  variant="h5"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Độ tin cậy
                </Typography>
              </Grid>
              <Grid xs={12} item justifyContent={"center"} container>
                <Typography
                  variant="h6"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                >
                  Hãy tin tưởng vào thiết bị cho thuê đáng tin cậy của ePioneer
                  để mang lại hiệu suất và chức năng vượt trội.
                </Typography>
              </Grid>
            </Grid>
            <Grid md={4} xs={12} item container>
              <Grid
                xs={12}
                item
                justifyContent={"center"}
                container
                sx={{ mb: 2 }}
              >
                <Image src={'/images/icon/chat.png'} alt="icon" width={120} />
              </Grid>
              <Grid xs={12} item justifyContent={"center"} container>
                <Typography
                  variant="h5"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Linh hoạt
                </Typography>
              </Grid>
              <Grid xs={12} item justifyContent={"center"} container>
                <Typography
                  variant="h6"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                >
                  Các tùy chọn cho thuê linh hoạt của chúng tôi cho phép bạn tùy
                  chỉnh thiết lập triển lãm theo nhu cầu cụ thể của mình.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={10} sx={{ paddingTop: 6, paddingBottom: 6 }}>
          <Typography
            variant="h4"
            textAlign={"center"}
            fontWeight={"bold"}
            color={theme.palette.primary.main}
          >
            Giải pháp cho thuê hoàn hảo
          </Typography>
          <Typography
            variant="h6"
            textAlign={"center"}
            color={theme.palette.primary.main}
          >
            Xem qua những lựa chọn thiết bị cho thuê của chúng tôi để đáp ứng
            nhu cầu triển lãm của bạn.
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}
