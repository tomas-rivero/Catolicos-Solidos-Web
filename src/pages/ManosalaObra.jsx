import { Button, Col, Container, Row } from 'react-bootstrap';
import { Element, Link } from 'react-scroll';
import { motion, useScroll } from "framer-motion"

export const ManosalaObra = () => {
    const { scrollYProgress } = useScroll();

    const boxVariantLeft = {
        offscreen: {
            y: 200
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }
        }
    }
    const boxVariantRight = {
        offscreen: {
            y: 200
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }
        }
    }

    return (
        <main>

            <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="indicator"
                    style={{ pathLength: scrollYProgress }}
                />
            </svg>

            <div className="containerAllMo">
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <Element name="home">
                        <section>
                            <div className='containerDivImage'>
                                <div className='imgDiv backgroundMo'></div>
                                <div className='gradientDivTextPantaleon'></div>
                                <div className='imgDivTextPantaleon lh-sm text-end'>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <p>MANOS</p>
                                        <p>A LA OBRA</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.7,
                                        }}
                                    >
                                        <Link to="inicio">
                                            <Button variant="outline-warning" size="md">Saber más...</Button>
                                        </Link>
                                    </motion.div>

                                </div>
                            </div>
                        </section>
                    </Element>

                    <Container>
                        <Element name="inicio">
                            <section className='containerDivTittle pt-5' >
                                <figure className='text-center pt-4'>
                                    <blockquote className="blockquote">
                                        <p className='text-warning'>¡Con amor y servicio marcamos la diferencia!</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Lema del <cite title="Source Title">Manos a la Obra 2024</cite>
                                    </figcaption>
                                </figure>
                            </section>
                        </Element>

                        <div className='text-center p-4'>
                            <img width="30" height="30" src="./img/yellowRosary.png" alt="white-rosary" />
                        </div>

                        <h1 className='text-center p-3 text-warning'>¿Quienes somos?</h1>
                    </Container>


                    <div className="parallaxMo p-4">
                        <Container className="text-white text-center p-5">
                            <Row className="justify-content-md-center align-items-center text-center p-2">
                                <Col xs={8} className='fw-semibold'>
                                    <p>Es un proyecto solidario impulsado por la Pastoral Universitaria de Rosario que procura brindar un aporte concreto a comunidades específicas.</p>
                                    <p>Se divide en proyectos que surgen del ingenio de los participantes y de los resultados obtenidos en las visitas diagnóstico realizadas durante el año.</p>
                                    <p>Luego se pasan 5 dias en el lugar designado haciendo distintas actividades y/o proyectos que aportan un bien mayor a la comunidad. (Desde talleres recreativos a trabajos de infraestructura en plazas o espacios publicos)</p>
                                    <p>Te invitamos a que visites la pagina oficial del <a className='text-warning' href="http://www.morosario.com.ar/" target='_blank'>Manos a la Obra</a></p>
                                </Col>
                            </Row>


                        </Container>

                    </div>

                    <Container>
                        <div className='text-center py-4'>
                            <img width="30" height="30" src="./img/yellowRosary.png" alt="white-rosary" />
                        </div>

                        <h1 className='text-center p-3 text-warning'>¿Quienes pueden participar?</h1>
                    </Container>

                    <div className="parallaxMo2 p-4">
                        <Container className="text-white text-center p-5">
                            <Row className="justify-content-md-center align-items-center text-center p-2">
                                <Col xs={8} className='fw-semibold'>
                                    <p>Si sos universitario, joven profesional, tenes algún oficio o estás en 5to año de la secundaria, podés participar de esta hermosa aventura de ponernos al servicio.</p>
                                    <p>Mucha gente está esperando por tus talentos, no te los guardes, podés brindarlos a los que más lo necesitan y compartir con ellos.</p>
                                    <p>Este es un proyecto católico abierto a distintas religiones, ideologías y creencias, en el que nos une el llamado a amar yendo al encuentro del otro ¡te esperamos!</p>
                                </Col>
                            </Row>


                        </Container>

                    </div>

                    <Container>
                        <div className='text-center py-4'>
                            <img width="200" height="200" src="./img/MO.png" alt="white-rosary" />
                        </div>
                    </Container>




                </motion.div>


            </div >
        </main>
    )
}
