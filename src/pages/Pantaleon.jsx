import { Button, Container } from 'react-bootstrap';
import { Element, Link } from 'react-scroll';
import { motion, useScroll } from "framer-motion"

export const Pantaleon = () => {

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

      <div className="containerAllSanPa">
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <Element name="home">
            <section>
              <div className='containerDivImage' >
                <div className='imgDiv backgroundPantaleon'></div>
                <div className='gradientDivTextPantaleon'></div>
                <div className='imgDivTextPantaleon lh-sm text-end'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <p>IGLESIA</p>
                    <p>SAN PANTALEÓN</p>
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
          </Element>



          <Container>


            <Element name="inicio">
              <section className='containerDivTittle pt-5' >
                <figure className='text-center pt-4'>
                  <blockquote className="blockquote">
                    <p>¡Te contamos un poco sobre nuestra casa!</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Se convierte en Iglesia y Sede de la Pastoral Universitaria de Rosario un <cite title="Source Title">4 de marzo de 2017</cite>
                  </figcaption>
                </figure>
              </section>
            </Element>

            <div className='text-center pt-2'>
              <img width="30" height="30" src="./img/whiteRosary.png" alt="white-rosary" />
            </div>

            <Element name='historia'>
              <section className='text-white pt-5 pb-3'>
                <h1 className='text-center pt-3'>Nuestra historia</h1>

                <div className="container py-5">
                  <div className="main-timeline-2 ">


                    <div className="timeline-2 left-2">
                      <motion.div className="card bg-transparent border-5 text-white asdL"
                        variants={boxVariantLeft}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}>

                        <img src="../img/sanpantaleon/oratorio.jpg" className="card-img-top" alt="Responsive image" />
                        <div className="card-body p-4">
                          <h5 className="fw-bold mb-2">Oratorio dedicado a San Pantaleón</h5>
                          <p className="text-white mb-2"><img src="../img/whiteCalendar.png" alt="" width="30" /> 1993</p>
                          <p className="mb-0">Surge la idea de crear un Oratorio dedicado a San Pantaleón al disponerse de un antiguo inmueble perteneciente al Arzobispado de Rosario, ubicado en Av. Francia 932.</p>
                        </div>
                      </motion.div>
                    </div>


                    <div className="timeline-2 right-2">
                      <motion.div className="card bg-transparent border-5 text-white asdR"
                        variants={boxVariantRight}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}>

                        <img src="../img/sanpantaleon/salon.jpg" className="card-img-top" alt="Responsive image" />
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-2">Comienzo de obras</h4>
                          <p className="text-white mb-2"><img src="../img/whiteCalendar.png" alt="" width="30" /> 1996</p>
                          <p className="mb-0">Así fue que tres parroquias comenzaron a trabajar en conjunto para la creación del nuevo Oratorio: la parroquia Nuestra Señora de Lourdes, la parroquia Inmaculada Concepción y la parroquia San Miguel Arcángel.</p>
                          <p className="mb-0">
                            Posteriormente, el Oratorio quedó únicamente en manos de la Parroquia San Miguel Arcángel y gracias a la generosa colaboración de la comunidad del barrio se pudo, poco a poco, efectuar obras de remodelación que, cambiando el estado sumamente deteriorado del inmueble, lo transformaron en una edificación moderna y cálida.
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="timeline-2 left-2">
                      <motion.div className="card bg-transparent border-5 text-white asdL"
                        variants={boxVariantLeft}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}>

                        <img src="../img/sanpantaleon/misasalon.jpg" className="card-img-top" alt="Responsive image" />
                        <div className="card-body p-4">
                          <h5 className="fw-bold mb-2">Misa de San Pantaleón en el salón</h5>
                          <p className="text-white mb-2"><img src="../img/whiteCalendar.png" alt="" width="30" /> 2008</p>
                          <p className="mb-0">Se construyó así un salón de usos múltiples donde, en una primera etapa, funcionó el Oratorio mientras se continuaba trabajando en el proyecto y la construcción del Templo y Santuario de San Pantaleón dentro del mismo terreno.</p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="timeline-2 right-2">
                      <motion.div className="card bg-transparent border-5 text-white asdR"
                        variants={boxVariantRight}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}>

                        <img src="../img/sanpantaleon/obras.jpg" className="card-img-top" alt="Responsive image" />
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-2">Progreso de obras</h4>
                          <p className="text-white mb-2"><img src="../img/whiteCalendar.png" alt="" width="30" /> 2010</p>
                          <p className="mb-0">En este año comenzaron las obras del futuro Templo y Santuario de San Pantaleón, para que todos los que lo visiten puedan encontrar en él un lugar de oración, alabanza y petición a Dios Padre a través de la interseción del Patrono de los enfermos y los profesionales de la salud.</p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="timeline-2 left-2">
                      <motion.div className="card bg-transparent border-5 text-white asdL"
                        variants={boxVariantLeft}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}>

                        <img src="../img/sanpantaleon/misainicio.jpg" className="card-img-top" alt="Responsive image" />
                        <div className="card-body p-4">
                          <h5 className="fw-bold mb-2">Apertura de la Capilla para dar Misa</h5>
                          <p className="text-white mb-2"><img src="../img/whiteCalendar.png" alt="" width="30" /> 2013</p>
                          <p className="mb-0">Si bien quedaban obras por terminar, la capilla abria sus puertas para poder dar misa y que los fieles se acerquen.</p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="timeline-2 right-2">
                      <motion.div className="card bg-transparent border-5 text-white asdR"
                        variants={boxVariantRight}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}>

                        <img src="../img/sanpantaleon/misafin.jpg" className="card-img-top" alt="Responsive image" />
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-2">Inauguración de Capilla</h4>
                          <p className="text-white mb-2"><img src="../img/whiteCalendar.png" alt="" width="30" /> 2014</p>
                          <p className="mb-0">La nueva Capilla de San Pantaleón fue inaugurada el 27 de Julio de 2014, para las fiestas Patronales en honor a San Pantaleón.</p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="timeline-2 left-2">
                      <motion.div className="card bg-transparent border-5 text-white asdL"
                        variants={boxVariantLeft}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}>

                        <img src="../img/sanpantaleon/misapur.jpg" className="card-img-top" alt="Responsive image" />
                        <div className="card-body p-4">
                          <h5 className="fw-bold mb-2">Traspaso de la Pastoral Universitaria de Rosario</h5>
                          <p className="text-white mb-2"><img src="../img/whiteCalendar.png" alt="" width="30" /> 2017</p>
                          <p className="mb-0">El Sr. Arzobispo de Rosario, Mons. Eduardo Eliseo Martín, solicita a la Parroquia San Miguel Arcángel la cesión de la Capilla de San Pantaleón a la órbita de la Pastoral Universitaria de nuestra Arquidiócesis y el 4 de marzo se procede al traspaso.</p>
                          <p className="mb-0">
                            De esta forma, la comunidad de San Miguel, que a lo largo de más de 20 años fue colaborando económicamente con las distintas acciones que se realizaron para recabar fondos para concretar las obras, vio como este «hijo» que fue creciendo en su seno, ahora tomaba un nuevo rumbo.
                          </p>
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </div>

              </section>
            </Element>

            <div className='text-center py-5'>
              <img width="30" height="30" src="./img/whiteRosary.png" alt="white-rosary" />
            </div>

          </Container>

        </motion.div>

      </div >
    </main>


  )
}
