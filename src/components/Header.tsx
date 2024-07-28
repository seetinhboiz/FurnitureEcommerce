"use client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  AppBar,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import LanguageButton from "./LanguageButton";

const StyledAppBar = styled(AppBar)({
  width: "100%",
  backgroundColor: "#3F0071",
  padding: "16px",
  zIndex: 1,
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const MenuItem = styled(Typography)({
  color: "white",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  cursor: "pointer",
  "&.selected": {
    color: "#3F0071",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  fontSize: "clamp(0.5rem, 2vw, 1rem)",
  "@media (max-width: 1010px)": {
    fontSize: 0,
  },
});

// Side menu
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isScreenLarge = useMediaQuery("(min-width:1010px)");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexWrap={"nowrap"}
          xs={12}
        >
          <Grid item xs={6} md={1}>
            <Typography variant="h6">LOGO</Typography>
          </Grid>
          <Grid
            item
            container
            spacing={5}
            alignItems={"center"}
            justifyContent={"center"}
            xs={9}
          >
            <Grid item>
              <MenuItem
                className={usePathname() === "/home" ? "selected" : ""}
                onClick={() => router.push("/home")}
                variant="body1"
              >
                TRANG CHỦ
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={usePathname() === "/products" ? "selected" : ""}
                onClick={() => router.push("/products")}
                variant="body1"
              >
                SẢN PHẨM
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={usePathname() === "/service" ? "selected" : ""}
                onClick={() => router.push("/service")}
                variant="body1"
              >
                DỊCH VỤ
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={usePathname() === "/recruitment" ? "selected" : ""}
                onClick={() => router.push("/recruitment")}
                variant="body1"
              >
                TUYỂN DỤNG
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={usePathname() === "/activity" ? "selected" : ""}
                onClick={() => router.push("/activity")}
                variant="body1"
              >
                HOẠT ĐỘNG
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={usePathname() === "/contact" ? "selected" : ""}
                onClick={() => router.push("/contact")}
                variant="body1"
              >
                LIÊN HỆ
              </MenuItem>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            md={!isScreenLarge && !open ? 2 : 1}
            container
            justifyContent={!open ? "space-between" : "right"}
            alignItems={"center"}
          >
            <Grid item xs={!isScreenLarge && !open ? 6 : 12}>
              <LanguageButton />
            </Grid>
            <Grid item xs={4}>
              {!isScreenLarge && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  sx={{ ...(open && { display: "none" }), marginLeft: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Grid>
        {!isScreenLarge && open && (
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;