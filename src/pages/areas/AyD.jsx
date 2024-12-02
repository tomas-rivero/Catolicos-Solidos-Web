import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, Element } from 'react-scroll';
import { motion, useScroll } from "framer-motion"

export const AyD = () => {

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

            <div className='containerAll'>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >


                    <section>
                        <div className='containerDivImage' >
                            <div className='imgDiv backgroundAyD'></div>
                            <div className='gradientDivText'></div>
                            <div className='imgDivText lh-sm'>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 2 }}
                                >
                                    <p className='textGobold'>Arte</p>
                                    <p className='textGobold'>y Diseño</p>
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
                                        <Button variant="outline-light" size="md">Saber más...</Button>
                                    </Link>
                                </motion.div>

                            </div>
                        </div>
                    </section>



                    <Container>

                        <img className='svgSocialFloat' src="../img/areas/arteydisenio.svg" alt="" srcSet="" width={700} />

                        <div className='text-center pt-5'>
                            <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
                        </div>

                        <Element name="inicio">
                            <div className='pt-5'>
                                <section className='text-white text-center'>
                                    <h1 className='pb-3'>¿Quienes somos?</h1>
                                    <p className='text-white'>
                                        Somos un grupo de estudiantes que un día decidimos formar una comunidad, para juntos seguir creciendo en la Fe y dar testimonio de ello en nuestras facultades.
                                        En un futuro, esperamos ser una red de profesionales que estén comprometidos con la realidad social, y que integren en su vida su Fe y su profesión.
                                    </p>
                                </section>
                            </div>
                        </Element>

                        <div className='text-center py-5'>
                            <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
                        </div>

                        <div className='py-1'>
                            <section className='text-white'>
                                <h1 className='text-center pb-3'>¿Que carreras forman parte de nuestra área?</h1>

                                <Row xs="auto" xl={12} className="justify-content-md-center align-items-center text-center">
                                    <Col><p className='px-3 py-1 rounded-5 borderAyD'>Diseño gráfico</p></Col>
                                    <Col><p className='px-3 py-1 rounded-5 borderAyD'>Diseño digital</p></Col>
                                    <Col><p className='px-3 py-1 rounded-5 borderAyD'>Diseño de indumentaria</p></Col>
                                    <Col><p className='px-3 py-1 rounded-5 borderAyD'>Diseño industrial</p></Col>
                                    <Col><p className='px-3 py-1 rounded-5 borderAyD'>Artes visuales</p></Col>
                                    <Col><p className='px-3 py-1 rounded-5 borderAyD'>Música</p></Col>
                                    <Col><p className='px-3 py-1 rounded-5 borderAyD'>Bellas artes</p></Col>
                                </Row>

                            </section>
                        </div>

                        <div className='text-center py-5'>
                            <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
                        </div>


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
                                                    <img src="../img/santos/antoniogaudi.jpg" className="img-fluid rounded-start" alt="..." />
                                                </Col>
                                                <Col xs={8} sm={8} lg={8}>
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">Antoni Gaudí</h5>
                                                        <hr className="text-white-50" />

                                                        <p className="card-text"><small className="text-white-50">10 de junio</small></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </motion.div>
                                </Col>
                            </Row>
                        </section>

                        <div className='text-center py-5'>
                            <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
                        </div>

                    </Container>

                </motion.div >

            </div>


        </main>
    )
}
