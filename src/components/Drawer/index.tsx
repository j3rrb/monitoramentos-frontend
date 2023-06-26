import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import TuneIcon from "@mui/icons-material/Tune";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { useNavigate } from "react-router-dom";
import { useMainContext } from "../../contexts/main";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const drawerItems = [
  {
    label: "Eventos",
    icon: NotificationImportantIcon,
    path: "/",
  },
  {
    label: "Regras",
    icon: TuneIcon,
    path: "/regras",
  },
  {
    label: "Envios",
    icon: MarkunreadIcon,
    path: "/envios",
  },
];

export default function ResponsiveDrawer() {
  const navigate = useNavigate();
  const { drawer, toggleDrawer } = useMainContext();

  const drawerComponent = (
    <div>
      <List>
        {drawerItems.map(({ icon: Icon, label, path }, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton
              onClick={() => {
                toggleDrawer();
                navigate(path);
              }}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Monitoramentos
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth } }}>
        <Drawer variant="temporary" open={drawer} onClose={toggleDrawer}>
          {drawerComponent}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
