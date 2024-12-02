import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, Element } from 'react-scroll';
import { motion, useScroll } from "framer-motion"

export const Sociales = () => {

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
                <div className='imgDiv backgroundSociales'></div>
                <div className='gradientDivText'></div>
                <div className='imgDivText lh-sm'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <p className='textGobold'>Sociales</p>
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

              <img className='svgSocialFloat' src="../img/areas/sociales.svg" alt="" width={700} />

              <div className='text-center pt-5'>
                <img width="30" height="30" src="../img/whiteRosary.png" alt="white-rosary" />
              </div>
              <Element name="inicio">
                <div className='pt-5'>
                  <section className='text-white text-center pt-3'>
                    <h1 className='pb-2'>¿Quienes somos?</h1>
                    <p className='text-white'>
                      Somos estudiantes y graduados de carreras muy diversas pero a su vez con mucho en común. <br />
                      Nuestras carreras hacen énfasis en el lugar del hombre en la Sociedad. Quién es y cuál su lugar en el mundo. <br />
                      Conocemos cuánto pueden influir e impactar las corrientes de pensamiento y las distintas cosmovisiones en el hombre y la sociedad. Por ese mismo motivo se torna como esencial, junto a la oración y la acción, la formación y colaboración con la Verdad. La defensa de la dignidad del hombre y el carácter humano de la cultura, que no puede ser reducido tan solo a los efectos de lo medible, lo opinable, la ley, el poder, o la historia.
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
                    <Col><p className='px-3 py-1 rounded-5 borderSociales'>Derecho</p></Col>
                    <Col><p className='px-3 py-1 rounded-5 borderSociales'>Periodismo</p></Col>
                    <Col><p className='px-3 py-1 rounded-5 borderSociales'>Comunicación Social</p></Col>
                    <Col><p className='px-3 py-1 rounded-5 borderSociales'>Profesorados</p></Col>
                    <Col><p className='px-3 py-1 rounded-5 borderSociales'>Trabajo Social</p></Col>
                    <Col><p className='px-3 py-1 rounded-5 borderSociales'>Psicología</p></Col>
                    <Col><p className='px-3 py-1 rounded-5 borderSociales'>Periodismo Deportivo</p></Col>
                    <Col><p className='px-3 py-1 rounded-5 borderSociales'>Relaciones Internacionales</p></Col>

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
                            <img src="../img/santos/tomasmoro.jpg" className="img-fluid rounded-start" alt="..." />
                          </Col>
                          <Col xs={8} sm={8} lg={8}>
                            <div className="card-body">
                              <h5 className="card-title fw-bold">Santo Tomás Moro</h5>
                              <hr className="text-white-50" />

                              <p className="card-text"><small className="text-white-50">22 de junio</small></p>
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
                            <img src="../img/santos/luisdefrancia.jpg" className="img-fluid rounded-start" alt="..." />
                          </Col>
                          <Col xs={8} sm={8} lg={8}>
                            <div className="card-body">
                              <h5 className="card-title fw-bold">San Luis de Francia</h5>
                              <hr className="text-white-50" />

                              <p className="card-text"><small className="text-white-50">25 de agosto</small></p>
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
                            <img src="../img/santos/tomasaquino.jpg" className="img-fluid rounded-start" alt="..." />
                          </Col>
                          <Col xs={8} sm={8} lg={8}>
                            <div className="card-body">
                              <h5 className="card-title fw-bold">Santo Tomas de Aquino</h5>
                              <hr className="text-white-50" />

                              <p className="card-text"><small className="text-white-50">28 de enero</small></p>
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
                            <img src="../img/santos/teresadeavila.jpg" className="img-fluid rounded-start" alt="..." />
                          </Col>
                          <Col xs={8} sm={8} lg={8}>
                            <div className="card-body">
                              <h5 className="card-title fw-bold">Santa Teresa de Ávila</h5>
                              <hr className="text-white-50" />

                              <p className="card-text"><small className="text-white-50">15 de octubre</small></p>
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
                            <img src="../img/santos/jpii.jpg" className="img-fluid rounded-start" alt="..." />
                          </Col>
                          <Col xs={8} sm={8} lg={8}>
                            <div className="card-body">
                              <h5 className="card-title fw-bold">San Juan Pablo II</h5>
                              <hr className="text-white-50" />

                              <p className="card-text"><small className="text-white-50">22 de octubre</small></p>
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
                            <img src="../img/santos/benedictadelacruz.jpg" className="img-fluid rounded-start" alt="..." />
                          </Col>
                          <Col xs={8} sm={8} lg={8}>
                            <div className="card-body">
                              <h5 className="card-title fw-bold">Santa Josefa Benedicta de la Cruz</h5>
                              <hr className="text-white-50" />

                              <p className="card-text"><small className="text-white-50">09 de agosto</small></p>
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
    </>

  )
}
