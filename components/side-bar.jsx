import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import ArchiveIcon from '@mui/icons-material/Archive';
import SwitchDarkMode from "./switch-dark-mode";

const drawerWidth = 240;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const {
    setCheckedSobremi,
    setCheckedProyectos,
    setCheckedTecnologias,
    setCheckedContacto,
    setRefreshMode,
    isDarkMode,
    displaySobremi,
    setDisplaySobremi,
    displayProyectos,
    setDisplayProyectos,
    displayTecnologias,
    setDisplayTecnologias,
    displayContacto,
    setDisplayContacto
  } = props;

  const handleChangeSobremi = async () => {
    await setCheckedProyectos(false);
    await setCheckedContacto(false);
    await setCheckedTecnologias(false);
    setMobileOpen(!mobileOpen)

    setTimeout(() => {
      setCheckedSobremi((prev) => !prev);
      if(displaySobremi) {
        setTimeout(()=>{
          setDisplaySobremi((prev)=> !prev)
        }, 400)
      } else {
        setDisplaySobremi((prev)=> !prev)
        setDisplayContacto(false)
        setDisplayProyectos(false)
        setDisplayTecnologias(false)
      }
    }, 300);
  };

  const handleChangeProyectos = async () => {
    await setCheckedSobremi(false);
    await setCheckedContacto(false);
    await setCheckedTecnologias(false);
    setMobileOpen(!mobileOpen)

    setTimeout(() => {
      setCheckedProyectos((prev) => !prev);
      if(displayProyectos){
        setTimeout(()=>{
          setDisplayProyectos((prev)=> !prev)
        }, 400)
      } else {
        setDisplayProyectos((prev) => !prev)
        setDisplaySobremi(false)
        setDisplayTecnologias(false)
        setDisplayContacto(false)
      }
    }, 300);
  };

  const handleChangeTecnologias = async () => {
    await setCheckedSobremi(false);
    await setCheckedProyectos(false);
    await setCheckedContacto(false);
    setMobileOpen(!mobileOpen)

    setTimeout(() => {
      setCheckedTecnologias((prev) => !prev);
      if(displayTecnologias){
        setTimeout(()=>{
          setDisplayTecnologias((prev)=> !prev)
        }, 400)
      } else {
        setDisplayTecnologias((prev) => !prev)
        setDisplayProyectos(false)
        setDisplaySobremi(false)
        setDisplayContacto(false)
      }
    }, 300);
  };

  const handleChangeContacto = async () => {
    await setCheckedSobremi(false);
    await setCheckedProyectos(false);
    await setCheckedTecnologias(false);
    setMobileOpen(!mobileOpen)

    setTimeout(() => {
      setCheckedContacto((prev) => !prev);
      if(displayContacto){
        setTimeout(()=>{
          setDisplayContacto((prev)=> !prev)
        }, 400)
      } else {
        setDisplayContacto((prev)=> !prev)
        setDisplayProyectos(false)
        setDisplaySobremi(false)
        setDisplayTecnologias(false)
      }
    }, 300);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDownloadCV = () => {
    window.open("../public/CVBrian.pdf", "_blank")
  };

  const drawer = (
    <div className=" dark:bg-slate-700 ">
      <div className="h-12 bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
        <h1 className="text-black font-semibold dark:text-white">Portfolio</h1>
      </div>
      <Divider />
      <List disablePadding>
        <div onClick={handleChangeSobremi}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon sx={{ color: ` ${isDarkMode ? "white" : "black"}` }} />
              </ListItemIcon>
              <ListItemText primary={<span className="text-black dark:text-white">Sobre mi</span>} />
            </ListItemButton>
          </ListItem>
          <Divider variant="middle" color='white' />
        </div>
        <div onClick={handleChangeProyectos}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon sx={{ color: ` ${isDarkMode ? "white" : "black"}` }} />
              </ListItemIcon>
              <ListItemText primary={<span className="text-black dark:text-white">Proyectos</span>} />
            </ListItemButton>
          </ListItem>
          <Divider variant="middle" color='white' />
        </div>
        <div onClick={handleChangeTecnologias}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CodeIcon sx={{ color: ` ${isDarkMode ? "white" : "black"}` }} />
              </ListItemIcon>
              <ListItemText primary={<span className="text-black dark:text-white">Tecnologias</span>} />
            </ListItemButton>
          </ListItem>
          <Divider variant="middle" color='white' />
        </div>
        <div onClick={handleChangeContacto}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon sx={{ color: ` ${isDarkMode ? "white" : "black"}` }} />
              </ListItemIcon>
              <ListItemText primary={<span className="text-black dark:text-white">Contactame</span>} />
            </ListItemButton>
          </ListItem>
          <Divider variant="middle" color='white' />
        </div>
      </List>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}
    >
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },backgroundColor: ` ${isDarkMode ? "rgb(51 65 85)" : 'white'}` }}
        aria-label="mailbox folders"
      >
        <Toolbar sx={{width: '100vw'}}>
          <MenuIcon onClick={handleDrawerToggle}/>
        </Toolbar>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: ` ${isDarkMode ? "rgb(51 65 85)" : 'white'}`
            },
          }}
        >
          {drawer}
          <div className="h-full flex items-center gap-2 justify-end mb-10 flex-col dark:bg-slate-700">
            <SwitchDarkMode setRefreshMode={setRefreshMode} className='h-full' />
          <div className="w-full flex justify-center items-center flex-col gap-2 dark:bg-slate-700">
            <a href="../public/CVBrian.pdf" target="_blank">
            <button className="bg-slate-400 w-40 rounded-md dark:bg-slate-800 items-center flex h-9 justify-center gap-2">
              <ArchiveIcon className={`text-black dark:text-white`} />
              <h3 className="text-black dark:text-white">Descargar CV</h3>
            </button>
            </a>
          </div>
        </div>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: ` ${isDarkMode ? "rgb(51 65 85)" : "white"}`
            },
          }}
          open
        >
          {drawer} 
          <div className="h-full flex items-center gap-2 justify-end  flex-col dark:bg-slate-700">
            <SwitchDarkMode setRefreshMode={setRefreshMode} className='h-full mb-10' />
          <div className="w-full flex justify-center items-center flex-col gap-2 dark:bg-slate-700 mb-10">
            <a href="../public/CVBRIAN.pdf" target='_blank' download='CVBrian.pdf'>
            <button className="bg-slate-400 w-40 rounded-md dark:bg-slate-800 items-center flex h-9 justify-center gap-2">
              <ArchiveIcon className={`text-black dark:text-white`} />
              <h3 className="text-black dark:text-white">Descargar CV</h3>
            </button>
            </a>
          </div>
        </div>
        </Drawer>
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
