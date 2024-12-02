import { Button, Col, Container, Modal, Ratio, Row } from 'react-bootstrap'
import { useState } from 'react'

import { motion, useScroll } from "framer-motion"

export const AreasEquipos = () => {

    const { scrollYProgress } = useScroll();

    const boxVariant = {
        opacityClear: {
            opacity: 0,
        },
        opacityDone: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 2,
                delay: 0.2
            }
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                    <Container>
                        <div className='pt-4'>
                            <section className='text-white mt-5'>
                                <h1 className='text-center'>Areas / Equipos</h1>

                                <Row xs={1} md={2} lg={4}>
                                    <Col>
                                        <motion.div
                                            variants={boxVariant}
                                            initial="opacityClear"
                                            whileInView="opacityDone"
                                            viewport={{ once: false }}>
                                            <div className="card mb-3 cardBackground text-white border-5">

                                                <img src="../img/ayd.jpg" className="card-img-top rounded-start" alt="..." />


                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold">Arte y Diseño</h5>


                                                    <p className="card-text"><small className="text-white-50">Somos un grupo de estudiantes que un día decidimos formar una comunidad, para juntos seguir creciendo en la Fe y dar testimonio de ello en nuestras facultades.

                                                    </small></p>
                                                </div>


                                            </div>

                                        </motion.div>

                                    </Col>
                                    <Col>
                                        <motion.div
                                            variants={boxVariant}
                                            initial="opacityClear"
                                            whileInView="opacityDone"
                                            viewport={{ once: false }}>
                                            <div className="card mb-3 cardBackground text-white border-5">


                                                <img src="../img/economia.jpg" className="card-img-top rounded-start" alt="..." />


                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold">Sociales</h5>


                                                    <p className="card-text"><small className="text-white-50">Somos estudiantes y graduados de carreras muy diversas, como Periodismo, Comunicación Social, Profesorados,Trabajo Social, Psicología, Periodismo Deportivo, Relaciones Internacionales y —la más representada en el grupo—Derecho. Muy diversas, sí; pero a su vez con mucho en común.
                                                    </small></p>
                                                </div>


                                            </div>

                                        </motion.div>

                                    </Col>
                                    <Col>
                                        <motion.div
                                            variants={boxVariant}
                                            initial="opacityClear"
                                            whileInView="opacityDone"
                                            viewport={{ once: false }}>
                                            <div className="card mb-3 cardBackground text-white border-5">


                                                <img src="../img/ecopuring.jpg" className="card-img-top rounded-start" alt="..." />


                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold">Ecopuring</h5>


                                                    <p className="card-text"><small className="text-white-50">Los ingenieros deben reconocer que la vida, la seguridad, la salud y el bienestar de la población dependen de su juicio. Y que siempre la vida se encuentra por encima del bien material.
                                                        Nos gustan los números, pero más que realizar cálculos con ellos estudiamos cómo llevar adelante una buena administración que permita cumplir los fines para los que cada organización fue creada.
                                                    </small></p>
                                                </div>


                                            </div>

                                        </motion.div>

                                    </Col>
                                    <Col>
                                        <motion.div
                                            variants={boxVariant}
                                            initial="opacityClear"
                                            whileInView="opacityDone"
                                            viewport={{ once: false }}>
                                            <div className="card mb-3 cardBackground text-white border-5">


                                                <img src="../img/salud.jpg" className="card-img-top rounded-start" alt="..." />



                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold">Salud</h5>


                                                    <p className="card-text"><small className="text-white-50">El Área Salud es una comunidad perteneciente a la Pastoral Universitaria de Rosario (PUR), cuyo fin es configurar una red de profesionales Católicos que integren ciencia y fe en sus prácticas.

                                                    </small></p>
                                                </div>


                                            </div>

                                        </motion.div>

                                    </Col>
                                </Row>
                            </section>
                        </div>

                        <div className='text-center pb-5'>
                            <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
                        </div>

                    </Container>

                    <Button variant="primary" onClick={handleShow}>
                        Launch vertically centered modal
                    </Button>

                    <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={show}
                        onHide={handleClose}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Modal heading
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Centered Modal</h4>
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>


                </motion.div >

            </div>


        </main>
    )
}
