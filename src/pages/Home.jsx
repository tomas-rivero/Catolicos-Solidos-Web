import { Carousel, Col, Container, Ratio, Row } from 'react-bootstrap';
import { Element, Link } from 'react-scroll';
import { motion, useScroll } from "framer-motion"
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export const Home = () => {

    const { scrollYProgress } = useScroll();

    const boxVariant = {
        opacityClear: {
            opacity: 0,
        },
        opacityDone: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 3
            }
        }
    }

    return (
        <>
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

            <div className='containerAll'>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>

                    <Element name="home">
                        <section>
                            <div className='containerDivImage'>
                                <div className='imgDivText lh-sm'>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <p>Católicos Sólidos</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 2,
                                            delay: 1,
                                        }}
                                    >
                                        <img className='logoHome' src="../img/logo.png" alt="" />
                                    </motion.div>

                                    <Link to="inicio">
                                        <button class="animated-button">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                                                <path
                                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                                ></path>
                                            </svg>
                                            <span class="text">Saber más</span>
                                            <span class="circle"></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                                                <path
                                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                                ></path>
                                            </svg>
                                        </button>

                                    </Link>

                                </div>

                            </div>
                        </section>
                    </Element>

                    <Container>


                        <Element name="inicio">
                            <motion.div variants={boxVariant}
                                initial="opacityClear"
                                whileInView="opacityDone"
                                viewport={{ once: false }}>
                                <section className='containerDivTittle pt-5' >
                                    <figure className='text-center pt-4'>
                                        <blockquote>
                                            <p className='fs-1'><b>"He venido a traer fuego a la tierra, y ¡cómo quisiera que ya estuviera ardiendo!"</b></p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer">
                                            <cite title="Versiculo">Lucas 12, 49</cite>
                                        </figcaption>

                                    </figure>
                                </section>
                            </motion.div>


                        </Element>

                        <div className='text-center p-5'>
                            <img width="30" height="30" src="./img/whiteCross.png" alt="white-cross" />
                        </div>

                        <motion.div
                            variants={boxVariant}
                            initial="opacityClear"
                            whileInView="opacityDone"
                            viewport={{ once: false }}
                        >
                            <section>
                                <div className='containerVideo'>
                                    <iframe src="https://www.youtube.com/embed/T8TOMrOOu6o?rel=0"
                                        title="YouTube video player"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </section>
                        </motion.div>

                        <div className='text-center p-5'>
                            <img width="30" height="30" src="./img/whiteCross.png" alt="white-cross" />
                        </div>

                        <div>
                            <section className='text-white'>
                                <h1 className='text-center pb-4'>¿Quienes somos?</h1>
                                <Row>
                                    <Col xs={12} md={12} lg={6}>
                                        <div className='lh-lg'>
                                            <p>Somos <b>jóvenes católicos argentinos</b> enamorados profundamente de Nuestro Señor Jesucristo; de María
                                                Santísima, Nuestra Señora; de la Iglesia, Madre y Maestra, y de nuestra fe católica.
                                            </p>
                                            <p>Estamos orgullosos de este inestimable don, nacido de un Dios que se revela en las Santas Escrituras y en la gran
                                                Tradición de la Iglesia. Por eso, queremos abrazar esos tesoros de la fe de nuestros padres y abuelos, de los
                                                héroes y mártires de la sociedad cristiana de todos los siglos, de los caballeros y las mujeres
                                                santas; los doctores y los sabios, los pobres y los humildes con fe de hierro.
                                            </p>
                                            <p>Tememos la tibieza y pedimos el don de la parresía para vivir el Evangelio con un corazón de fuego y enamorado, sin el cual, cualquier lucha es inútil y poco inteligente.
                                            </p>

                                        </div>
                                    </Col>
                                    <Col xs={12} md={12} lg={6}>
                                        <Carousel fade >
                                            <Carousel.Item>
                                                <img className="d-block w-100" src="../img/1.jpg" alt="" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100" src="../img/2.jpg" alt="" text="First slide" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100" src="../img/3.png" alt="" />
                                            </Carousel.Item>
                                        </Carousel>

                                    </Col>
                                </Row>

                            </section>
                        </div>

                        <div className='text-center p-5'>
                            <img width="30" height="30" src="./img/whiteCross.png" alt="white-cross" />
                        </div>

                    </Container>

                    <div className="parallax">


                        <Container>
                            <Row className="justify-content-md-center align-items-center">
                                <Ratio aspectRatio={50}>
                                    <iframe src="https://www.youtube.com/embed/KYpJbSIijX8?si=wZJLH11XDnouSOGM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                                </Ratio>
                            </Row>
                        </Container>

                    </div>

                    <div className='text-center p-5'>
                        <img width="30" height="30" src="./img/whiteCross.png" alt="white-cross" />
                    </div>

                    <Container fluid="xl">
                        <section className='text-white'>
                            <h1 className='text-center mb-4'>Nuestros patronos</h1>
                            <Row xs={1} md={2} lg={3}>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}>
                                        <div className="card mb-3 cardBackground text-white border-5">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4} >
                                                    <img src="../img/santospatronos/beatocarloacutis.png" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Beato Carlo Acutis</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">Modelo de la juventud del último siglo, Apóstol cibernético.</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                    </motion.div>

                                </Col>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}
                                    >
                                        <div className="card mb-3 cardBackground text-white border-5">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4}>
                                                    <img src="../img/santospatronos/isabeldecastilla.png" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Sierva de Dios Isabel I de Castilla</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">La Reina Católica, Madre de América, lumbrera de la Hispanidad.</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </motion.div>
                                </Col>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}
                                    >

                                        <div className="card mb-3 cardBackground text-white border-5">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4}>
                                                    <img src="../img/santospatronos/santotomasdeaquino.png" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Santo Tomás de Aquino</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">El más santo de los sabios y el más sabio de los santos.</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </motion.div>

                                </Col>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}
                                    >
                                        <div className="card mb-3 cardBackground text-white border-5 icon-link-hover">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4}>
                                                    <img src="../img/santospatronos/mariaquedesatalosnudos.png" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">María Desatanudos</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">Reina y Señora nuestra, Madre de Dios Inmaculada.</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </motion.div>
                                </Col>
                                <Col>
                                    <motion.div
                                        variants={boxVariant}
                                        initial="opacityClear"
                                        whileInView="opacityDone"
                                        viewport={{ once: false }}
                                    >
                                        <div className="card mb-3 cardBackground text-white border-5 icon-link-hover">
                                            <Row className='g-0'>
                                                <Col xs={4} sm={4} lg={4}>
                                                    <img src="../img/santospatronos/santosangelescustodios.png" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Santos Ángeles Custodios</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">Grandes Hermanos nuestros que nos recuerdan la realidad
                                                            sobrenatural.</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </motion.div>

                                </Col>
                            </Row>

                        </section>

                        <div className='text-center p-5'>
                            <img width="30" height="30" src="./img/whiteCross.png" alt="white-cross" />
                        </div>


                        <Element name='donde'>
                            <motion.div variants={boxVariant}
                                initial="opacityClear"
                                whileInView="opacityDone"
                                viewport={{ once: false }}>
                                <section className='text-white text-center'>
                                    <h1 className='text-center pb-4'>Nuestro escudo</h1>

                                    <NavLink to="/escudo" className='btn btnEscudo'>
                                        <div className="shieldContainer d-flex flex-row justify-content-center align-items-center">
                                            <img className='img-fluid' src="/img/logo.png" alt="Imágen de nuestro escudo." />
                                            <div>
                                                <h3><b>Descubre qué significa nuestro escudo</b></h3>

                                                <p>Un escudo remite a una batalla y al arte de la defensa, a la
                                                    solidez.
                                                    Dice el justo Job en la Escritura: “Militia est vita hominis super terram” (Job 7, 1). La
                                                    vida
                                                    del hombre cristiano sobre la tierra es una milicia, una lucha por la santidad, dejándose
                                                    conquistar por Dios.</p>

                                            </div>
                                        </div>
                                    </NavLink>

                                </section>
                            </motion.div>

                        </Element>

                        <div className='text-center p-5'>
                            <img width="30" height="30" src="./img/whiteCross.png" alt="white-cross" />
                        </div>

                        <section>
                            <script src="https://static.elfsight.com/platform/platform.js" async></script>
                            <div class="elfsight-app-7ebe1041-1be3-44d9-a665-a1e355b6774f" data-elfsight-app-lazy></div>
                        </section>

                    </Container>
                </motion.div >
            </div>

        </>

    )
}
