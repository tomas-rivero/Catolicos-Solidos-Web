import { Button, Container, Row, Col, Card, Figure } from 'react-bootstrap';
import { Element, Link as LinkScroll } from 'react-scroll';
import { motion, useScroll } from "framer-motion"
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useEffect, useState } from 'react';

export const Blog = () => {

  const [blog, setBlog] = useState([])

  useEffect(() => {

    const blogRef = collection(db, "blogs");

    getDocs(blogRef)
      .then((resp) => {
        setBlog(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        );
      })
  }, [])


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
      <div className="containerAll">
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>

          <Element name="home">
            <section>
              <div className='containerDivImageBlog'>
                <div className='imgDivText lh-sm'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                    }}
                  >
                    <p>Blog</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.9,
                    }}
                  >

                    <LinkScroll to="inicio">
                      <button className="animated-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                          <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          ></path>
                        </svg>
                        <span className="text">Saber más</span>
                        <span className="circle"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                          <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          ></path>
                        </svg>
                      </button>

                    </LinkScroll>
                  </motion.div>

                </div>

              </div>
            </section>
          </Element>
          <Container fluid="xl">
            <Element name="inicio">
              <section className='containerDivTittle pt-5' >
                <figure className='text-center pt-4'>
                  <blockquote>
                    <p className='fs-1'><b>"No vayas fuera, vuelve a ti mismo. En el hombre interior habita la verdad"</b></p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Versiculo">San Agustín</cite>
                  </figcaption>

                </figure>
              </section>

              <div className='text-center p-5'>
                <img width="30" height="30" src="./img/whiteCross.png" alt="white-cross" />
              </div>

              <section className='text-white'>
                <h1 className='text-center pb-4'>Últimos posteos</h1>
              </section>

              <Container className='pb-5'>
                <Row xs={1} md={2} lg={3} xl={4}>

                  {blog.map((data) => (
                    <Col key={data.id} className='rowBlogs'>
                      <div className="cardBlog">
                        <div className="cardBlogImage">
                          <img src="../img/blog02.jpg" />
                        </div>
                        <div className="cardBlogHeading">
                          {data.titulo}
                        </div>
                        <div className="cardBlogText pb-1">
                          {data.descripcion}
                        </div>
                        <div className="containerHr pb-3">
                          <hr className='hrBlog' />
                        </div>
                        <div className="cardBlogText">
                          {data.fecha}
                        </div>
                        <Link to={'/blog/' + data.id} className="cardBlogButton" >
                          Leer
                        </Link>
                      </div>
                    </Col>
                  ))
                  }
                </Row>

                <div className="d-flex justify-content-center pt-4">
                  <Link to="/blog/todos" >
                    <button className="animated-button">
                      <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                      </svg>
                      <span className="text">Leer todo</span>
                      <span className="circle"></span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                      </svg>
                    </button>

                  </Link>
                </div>

              </Container>
            </Element>
          </Container>
        </motion.div >
      </div >
    </>


  )
}
