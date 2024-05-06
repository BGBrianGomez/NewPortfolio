import { useEffect, useState } from "react";
import SideBar from "../components/side-bar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Perfil from "./assets/Perfil.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import { TextField } from "@mui/material";

import IMGFondo from "./assets/Fondo1.png";
import BGName from "./assets/BG.png";
import BGBlack from "./assets/BGBlack.png";
import FitEvolution from "./assets/FitEvolution.png";
import SkullBarber from "./assets/Skull-Barbershop.png";
import TranslateIO from "./assets/Translate-IO.png";
import React from "./assets/React.png";
import Js from "./assets/Js.png";
import HTML from "./assets/HTML.png";
import CSS from "./assets/CSS.png";
import Tailwind from "./assets/Tailwind.png";
import Vue from "./assets/Vue.png";
import TypeScript from "./assets/TypeScript.png";
import Node from "./assets/Node.png";
import PostgreSQL from "./assets/PostgreSQL.png";
import Next from "./assets/Next.png";

function App() {
  const [checkedSobremi, setCheckedSobremi] = useState(false);
  const [displaySobremi, setDisplaySobremi] = useState(false);
  const [checkedProyectos, setCheckedProyectos] = useState(false);
  const [displayProyectos, setDisplayProyectos] = useState(false);
  const [checkedTecnologias, setCheckedTecnologias] = useState(false);
  const [displayTecnologias, setDisplayTecnologias] = useState(false);
  const [checkedContacto, setCheckedContacto] = useState(false);
  const [displayContacto, setDisplayContacto] = useState(false);
  const [refreshMode, setRefreshMode] = useState(false);

  let isDarkMode = document.documentElement.classList.contains("dark");

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains("dark");
    isDarkMode = darkMode;
  }, [refreshMode]);

  return (
    <div className="flex flex-col sm:flex-row">
      <div>
        <SideBar
          setCheckedSobremi={setCheckedSobremi}
          setCheckedProyectos={setCheckedProyectos}
          setCheckedTecnologias={setCheckedTecnologias}
          setCheckedContacto={setCheckedContacto}
          setRefreshMode={setRefreshMode}
          isDarkMode={isDarkMode}
          displaySobremi={displaySobremi}
          setDisplaySobremi={setDisplaySobremi}
          displayProyectos={displayProyectos}
          setDisplayProyectos={setDisplayProyectos}
          displayTecnologias={displayTecnologias}
          setDisplayTecnologias={setDisplayTecnologias}
          displayContacto={displayContacto}
          setDisplayContacto={setDisplayContacto}
        />
      </div>
      <div className="w-full h-full">
        <Box sx={{ width: "100%", position: "relative" }}>
          <div className="bg-slate-50 dark:bg-slate-500 h-calc-vh-nav sm:h-screen w-full sm:w-calc-vw-60px block sm:flex justify-center items-center bg-gradient-to-r from-slate-400 dark:from-slate-900 from-60%">
            <div className="w-full sm:w-2/4 h-full sm:h-1/3 items-center justify-center flex">
              <img
                src={isDarkMode === true ? BGName : BGBlack}
                className=""
                alt="Nombre"
                style={{
                  filter: `drop-shadow(0px 10px 10px ${
                    isDarkMode ? "#f2f2f2f2" : "#000"
                  })`,
                }}
              />
            </div>
            <div className="w-1/3 hidden sm:flex justify-end pr-10">
              <img
                src={IMGFondo}
                alt="Foto"
                className="w-96"
                style={{
                  filter: "drop-shadow(0px 10px 10px #000)",
                  maskImage: "linear-gradient(black 70%, transparent)",
                }}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              display: `${displaySobremi ? "block" : "none"}`,
            }}
          >
            <Collapse orientation="horizontal" in={checkedSobremi}>
              <div className="bg-slate-100 dark:bg-slate-500 h-full sm:h-screen w-full sm:w-calc-vw-60px flex flex-row bg-gradient-to-r from-slate-400 dark:from-slate-900 from-60%">
                <div className="sm:h-full w-full sm:w-2/3 flex flex-col justify-center">
                  <h2 className="mx-10 mt-10 sm:text-justify font-bold text-lg dark:text-white">
                    ¡Hola! Soy Brian Gomez, un apasionado desarrollador
                    full-stack con una profunda fascinación por la programación.
                    Desde que descubrí la magia de convertir líneas de código en
                    experiencias interactivas, supe que había encontrado mi
                    verdadera vocación. Mi viaje comenzó hace unos años, cuando
                    me sumergí en la intersección entre la lógica y la
                    creatividad durante mis clases de informática. Desde
                    entonces, he trabajado en una variedad de proyectos, desde
                    la implementación de lógica de backend hasta el diseño de
                    experiencias de usuario cautivadoras.
                  </h2>
                  <p className="mx-10 text-justify text-gray-950 dark:text-slate-200 text-base mt-4">
                    Lo que más disfruto del desarrollo web es el proceso de
                    fusionar mi pasión por el diseño con mi habilidad para
                    resolver problemas. Cada proyecto es una oportunidad para
                    desafiarme a mí mismo y crear experiencias que cautiven a
                    los usuarios. Mi enfoque va más allá de simplemente escribir
                    código; se trata de encontrar soluciones creativas y
                    efectivas para los desafíos que se presentan en cada
                    proyecto. Mi capacidad de aprendizaje rápido y mi dedicación
                    al perfeccionamiento de mis habilidades me permiten
                    enfrentar cualquier obstáculo con confianza y determinación.
                    En resumen, no soy solo un programador por profesión, soy un
                    apasionado de la programación. Estoy emocionado de seguir
                    creciendo, aprendiendo y contribuyendo al emocionante mundo
                    del desarrollo web.
                  </p>
                  <p className="mx-10 text-justify text-lg mt-4 flex items-center dark:text-white justify-center">
                    ¡Gracias por visitar mi portfolio!
                  </p>
                </div>
                <div className="h-full w-1/3 hidden sm:flex justify-center items-center">
                  <img
                    src={Perfil}
                    alt="Perfil"
                    className="object-contain h-3/4"
                    style={{
                      filter: "drop-shadow(0px 10px 10px #000)",
                    }}
                  />
                </div>
              </div>
            </Collapse>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              display: `${displayProyectos ? "block" : "none"}`,
            }}
          >
            <Collapse orientation="horizontal" in={checkedProyectos}>
              <div className="bg-slate-100 dark:bg-slate-500 h-full sm:h-screen w-screen sm:w-calc-vw-60px bg-gradient-to-r from-slate-400 dark:from-slate-900 from-60%">
                <div className="flex justify-center h-20 items-center">
                  <h3 className=" font-benguiat text-3xl dark:text-white bg-white dark:bg-slate-800 p-2 rounded-md shadow-md">
                    Experiencia laboral
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 mx-4 items-center justify-center pb-4">
                  <div>
                    <Card
                      sx={{
                        maxWidth: 345,
                        backgroundColor: `${isDarkMode ? "#1e293b" : "white"}`,
                      }}
                    >
                      <CardActionArea href="https://fit-revolution-main.vercel.app/" target="_blank">
                        <CardMedia
                          component="img"
                          height="140"
                          image={FitEvolution}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color={`${isDarkMode ? "white" : "black"}`}
                          >
                            Fit Evolution
                          </Typography>
                          <Typography
                            variant="body1"
                            color={`${isDarkMode ? "white" : "black"}`}
                            align="justify"
                          >
                            El proyecto consiste en una aplicación web que
                            facilita la conexión entre deportistas o personas
                            que se ejercitan y entrenadores personales. Esto
                            proporciona mayor comodidad, diversidad de precios,
                            flexibilidad de horarios y la posibilidad de elegir
                            entre diferentes entrenadores.
                          </Typography>
                          <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                            justifyContent={"center"}
                            className=" pt-2"
                          >
                            <Grid item>
                              <img
                                src={Js}
                                alt=""
                                className="dark:bg-slate-600 w-14 p-1 rounded-md object-contain"
                              />
                            </Grid>
                            <Grid item>
                              <img
                                src={React}
                                alt=""
                                className="dark:bg-slate-600 p-1 w-14 rounded-md object-contain"
                              />
                            </Grid>
                            <Grid item>
                              <img
                                src={Tailwind}
                                alt=""
                                className="dark:bg-slate-600 p-1 w-14 rounded-md object-contain"
                              />
                            </Grid>
                            <Grid item>
                              <img
                                src={Node}
                                alt=""
                                className="dark:bg-slate-600 p-1 w-14 rounded-md object-contain"
                              />
                            </Grid>
                            <Grid item>
                              <img
                                src={PostgreSQL}
                                alt=""
                                className="dark:bg-slate-600 p-1 w-14 rounded-md object-contain"
                              />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                        <a className="flex items-center justify-center gap-5" href="https://github.com/BGBrianGomez/PF-fitEvolution" target="_blank"> 
                            <button className="bg-slate-400 dark:bg-slate-600 dark:text-white text-black rounded-md p-1">Repositorio</button>
                          </a>
                      <CardActions></CardActions>
                    </Card>
                  </div>
                  <div>
                    <Card
                      sx={{
                        maxWidth: 345,
                        backgroundColor: `${isDarkMode ? "#1e293b" : "white"}`,
                      }}
                    >
                      <CardActionArea href="https://translate-io.vercel.app/" target="_blank">
                        <CardMedia
                          component="img"
                          height="140"
                          image={TranslateIO}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color={`${isDarkMode ? "white" : "black"}`}
                          >
                            Trasnlate-IO
                          </Typography>
                          <Typography
                            variant="body1"
                            color={`${isDarkMode ? "white" : "black"}`}
                            align="justify"
                          >
                            TranslateIO es una aplicación web diseñada para
                            facilitar la traducción de texto entre diferentes
                            idiomas de manera rápida y precisa. La aplicación
                            también ofrece la capacidad de reproducir el texto
                            original y traducido en voz alta, además, TranslateIO permite copiar fácilmente el
                            texto traducido con un solo clic, lo que simplifica
                            el proceso de compartir información.  
                          </Typography>
                          <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                            justifyContent={"center"}
                            className=" pt-2"
                          >
                            <Grid item>
                              <img
                                src={Js}
                                alt=""
                                className="dark:bg-slate-600 w-14 p-1 rounded-md object-contain"
                              />
                            </Grid>
                            <Grid item>
                              <img
                                src={React}
                                alt=""
                                className="dark:bg-slate-600 p-1 w-14 rounded-md object-contain"
                              />
                            </Grid>
                            <Grid item>
                              <img
                                src={Tailwind}
                                alt=""
                                className="dark:bg-slate-600 p-1 w-14 rounded-md object-contain"
                              />
                            </Grid>
                            <Grid item>
                              <img
                                src={Node}
                                alt=""
                                className="dark:bg-slate-600 p-1 w-14 rounded-md object-contain"
                              />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                          <a className="flex items-center justify-center gap-5" href="https://github.com/BGBrianGomez/TranslateIO" target="_blank">
                            <button className="bg-slate-400 dark:bg-slate-600 dark:text-white text-black rounded-md p-1">Repositorio</button>
                          </a>
                      <CardActions></CardActions>
                    </Card>
                  </div>
                  <div>
                    <Card
                      sx={{
                        maxWidth: 345,
                        backgroundColor: `${isDarkMode ? "#1e293b" : "white"}`,
                      }}
                    >
                      <CardActionArea href="https://skull-barber.vercel.app/" target="_blank">
                        <CardMedia
                          component="img"
                          height="140"
                          image={SkullBarber}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color={`${isDarkMode ? "white" : "black"}`}
                          >
                            Skull Barbershop
                          </Typography>
                          <Typography
                            variant="body1"
                            color={`${isDarkMode ? "white" : "black"}`}
                            align="justify"
                          >
                            SPA centrada en brindar informacion sobre el barbero
                            a disposicion, con la cual, puede demostrar sus
                            habilidades y cortes, y brindar diversos estilos en
                            los cuales se especializa, ademas, de un apartado de
                            contacto
                          </Typography>
                          <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                            justifyContent={"center"}
                            className=" pt-2"
                          >
                            <Grid item>
                              <img
                                src={Js}
                                alt=""
                                className="dark:bg-slate-600 w-14 p-1 rounded-md object-contain"
                              />
                            </Grid>
                            <Grid item>
                              <img
                                src={Vue}
                                alt=""
                                className="dark:bg-slate-600 p-1 w-14 rounded-md object-contain"
                              />
                            </Grid>
                            <Grid item>
                              <img
                                src={Tailwind}
                                alt=""
                                className="dark:bg-slate-600 p-1 w-14 rounded-md object-contain"
                              />
                            </Grid>
                            <Grid item>
                              <img
                                src={Node}
                                alt=""
                                className="dark:bg-slate-600 p-1 w-14 rounded-md object-contain"
                              />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                        <a className="flex items-center justify-center gap-5" href="https://github.com/BGBrianGomez/SkullBarber" target="_blank">
                            <button className="bg-slate-400 text-black dark:bg-slate-600 dark:text-white rounded-md p-1">Repositorio</button>
                          </a>
                      <CardActions></CardActions>
                    </Card>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              display: `${displayTecnologias ? "block" : "none"}`,
            }}
          >
            <Collapse orientation="horizontal" in={checkedTecnologias}>
              <div className="bg-slate-100 dark:bg-slate-500 h-full sm:h-screen sm:w-calc-vw-60px bg-gradient-to-r from-slate-400 dark:from-slate-900 from-60%">
                <div className="h-full w-full p-10">
                  <div>
                    <h3 className="font-bold text-lg dark:text-white">
                      Como desarrollador full-stack, estoy familiarizado con una
                      variedad de tecnologías modernas para la creación de
                      aplicaciones web. Algunas de las tecnologías con las que
                      trabajo incluyen:
                    </h3>
                  </div>
                  <div className="pt-10">
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      justifyContent={"center"}
                    >
                      <Grid item>
                        <img
                          src={Js}
                          alt="Js"
                          className="h-24 w-full dark:bg-slate-600 p-1 rounded-md"
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          className="dark:text-white"
                        >
                          JavaScript
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={CSS}
                          alt="CSS"
                          className="h-24 w-full dark:bg-slate-600 p-1 rounded-md"
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          className="dark:text-white"
                        >
                          CSS
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={HTML}
                          alt="HTML"
                          className="h-24 w-full dark:bg-slate-600 p-1 rounded-md"
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          className="dark:text-white"
                        >
                          HTML
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={React}
                          alt="React"
                          className="h-24 w-full dark:bg-slate-600 p-1 rounded-md"
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          className="dark:text-white"
                        >
                          React.Js
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={Tailwind}
                          alt="Tailwind"
                          className="h-24 w-full dark:bg-slate-600 p-1 rounded-md"
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          className="dark:text-white"
                        >
                          Tailwind CSS
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={Vue}
                          alt="Vue"
                          className="h-24 w-full dark:bg-slate-600 p-1 rounded-md"
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          className="dark:text-white"
                        >
                          Vue 3
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={TypeScript}
                          alt="TypeScript"
                          className="h-24 w-full dark:bg-slate-600 p-1 rounded-md"
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          className="dark:text-white"
                        >
                          TypeScript
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={Next}
                          alt="Next"
                          className="h-24 w-full dark:bg-slate-600 p-1 rounded-md"
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          className="dark:text-white"
                        >
                          Next.Js
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={Node}
                          alt="Node"
                          className="h-24 w-full dark:bg-slate-600 p-1 rounded-md"
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          className="dark:text-white"
                        >
                          Node.Js
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={PostgreSQL}
                          alt="PostgreSQL"
                          className="h-24 w-full dark:bg-slate-600 p-1 rounded-md"
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          className="dark:text-white"
                        >
                          PostgreSQL
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              display: `${displayContacto ? "block" : "none"}`,
            }}
          >
            <Collapse orientation="horizontal" in={checkedContacto}>
              <div className="bg-slate-100 dark:bg-slate-500 h-calc-vh-nav sm:h-screen w-screen sm:w-calc-vw-60px bg-gradient-to-r from-slate-400 dark:from-slate-900 from-60%">
                <div className="flex flex-col h-full w-full items-center">
                  <form
                    action="https://formspree.io/f/xoqgyznr"
                    method="POST"
                    className="flex flex-col w-60 sm:w-1/2 sm:h-full m-8 sm:m-10 bg-gray-100 dark:bg-slate-700 p-6 rounded-lg shadow-lg gap-5"
                  >
                    <Grid item xs={12}>
                      <h3 className="dark:text-white">Enviame un correo</h3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Nombre"
                        id="nombre"
                        name="nombre"
                        variant="standard"
                        required
                        InputProps={{
                          sx: {
                            color: isDarkMode ? "#fff" : "#000",
                          },
                        }}
                        inputProps={{
                          pattern: "[A-Za-z ]+",
                          title: "Por favor, ingresa solo letras y espacios",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Correo electrónico"
                        id="correo"
                        name="correo"
                        variant="standard"
                        type="email"
                        required
                        InputProps={{
                          sx: {
                            color: isDarkMode ? "#fff" : "#000",
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Mensaje"
                        id="mensaje"
                        name="mensaje"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        InputProps={{
                          sx: {
                            color: isDarkMode ? "#fff" : "#000",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                      >
                        Enviar
                      </Button>
                    </Grid>
                    <Divider
                      sx={{ color: ` ${isDarkMode ? "white" : "black"}` }}
                      className="dark:text-white"
                    >
                      O
                    </Divider>
                    <Grid
                      item
                      xs={12}
                      className="flex items-center justify-center"
                    >
                      <h3 className="dark:text-white">
                        Comunicate conmigo por mensaje
                      </h3>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      className="flex items-center justify-center gap-3 sm:gap-5"
                    >
                      <Button
                        variant="contained"
                        color="success"
                        href="https://wa.link/aoihsl"
                        target="_blank"
                      >
                        <WhatsAppIcon className="mx-1" />
                        <p className=" hidden sm:block">WhatsApp</p>
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        href="https://www.linkedin.com/in/brian-gomez-81b582274/"
                        target="_blank"
                      >
                        <LinkedInIcon className="mx-1" />
                        <p className="hidden sm:block">LinkedIn</p>
                      </Button>
                      <Button
                        variant="contained"
                        color="inherit"
                        href="https://github.com/BGBrianGomez"
                        target="_blank"
                      >
                        <GitHubIcon className="mx-1" />
                        <p className="hidden sm:block">GitHub</p>
                      </Button>
                    </Grid>
                  </form>
                </div>
              </div>
            </Collapse>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
