import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

export const CompFooter = () => {
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
        <footer className="bg-dark py-3">

            <motion.div
                variants={boxVariant}
                initial="opacityClear"
                whileInView="opacityDone"
                viewport={{ once: false }}>
                <Container>
                    <Row className="justify-content-md-center align-items-center text-center">
                        <Col xs={12} sm={12} md={3} className='fw-semibold'>
                            <Row xs={4}>
                                <Col>
                                    <a href="https://www.instagram.com/catolicos.solidos/">
                                        <Image src="../img/social/instagram.png" alt="" width={40} className='btn btn-instagram p-2' roundedCircle />
                                    </a>

                                </Col>
                                <Col>
                                    <a href="https://chat.whatsapp.com/GIhKttDmGi68Y6i7rJ6S5s">
                                        <Image src="../img/social/whatsapp.png" alt="" width={40} className='btn btn-whatsapp p-2' roundedCircle />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://twitter.com/catolico_solido">
                                        <Image src="../img/social/twitter.png" alt="" width={40} className='btn btn-twitter p-2' roundedCircle />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://www.youtube.com/@catolicos.solidos">
                                        <Image src="../img/social/youtube.png" alt="" width={40} className='btn btn-youtube p-2' roundedCircle />
                                    </a>
                                </Col>
                            </Row>
                            <img src='../img/logocslineas.png' className='imgFooter my-3' />

                            <figcaption className="textFooter text-white-50">Sitio oficial de Católicos Sólidos</figcaption>

                        </Col>
                    </Row>
                </Container>
                <hr className="text-white-50" />
                <Container>
                    <Row className="justify-content-md-center align-items-center text-center">

                        <figcaption className="textFooter text-white-50">©2024 Todos los derechos reservados.</figcaption>
                    </Row>
                </Container>

            </motion.div>

        </footer>
    )
}
