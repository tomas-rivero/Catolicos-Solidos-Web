import { Button, Container, Row, Col, Card, Figure } from 'react-bootstrap';
import { Element, Link as LinkScroll } from 'react-scroll';
import { motion, useScroll } from "framer-motion"
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useEffect, useState } from 'react';

export const AllBlog = () => {

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


                    <Container fluid="xl">
                        <Element name="inicio">
                            <section className='containerDivTittle pt-5' >
                                <figure className='text-center pt-4'>
                                    <blockquote>
                                        <p className='fs-1'><b>Posteos</b></p>
                                    </blockquote>


                                </figure>
                            </section>

                            <div className='text-center p-5'>
                                <img width="30" height="30" src="../img/whiteCross.png" alt="white-cross" />
                            </div>

                            <Container className='pb-5'>
                                <Row xs={1} md={2} lg={3} xl={4}>

                                    {blog.map((data) => (
                                        <Col key={data.id}>
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
                                                <div className="cardBlogText fw-semibold">
                                                    Fecha: {data.fecha}
                                                </div>
                                                <Link to={'/blog/' + data.id} className="cardBlogButton" >
                                                    Leer
                                                </Link>
                                            </div>
                                        </Col>
                                    ))
                                    }
                                </Row>
                            </Container>
                        </Element>
                    </Container>
                </motion.div >
            </div >
        </>


    )
}
