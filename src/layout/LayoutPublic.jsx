import { CompFooter, CompNavbar } from "../components";
import { LazyMotion, domAnimation, m } from "framer-motion"
import { useLocation, Outlet, useParams } from "react-router-dom"
import { useState } from "react";
import UseScrollTop from "../components/ScrollToTop";
import { useEffect } from "react";


export const LayoutPublic = () => {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        window.addEventListener('load', () => {
            setLoader(false)
            console.log(loader);
        })
    }, [])


    const location = useLocation();
    const id = useParams().id

    const validRoutes =
        ["/",
            "/blog",
            "/blog/todos",
            "/blog/" + id,
            "/agregarblog",
            "/escudo",
            "/devocionario",
            "/formacion"
        ];

    const isNavbarVisible = validRoutes.includes(location.pathname);


    UseScrollTop()

    return (
        <LazyMotion features={domAnimation}>
            <m.div animate={{ opacity: 1 }} >

                {loader ?
                    <>
                        <div className="showbox">
                            <div className="loader">
                                <svg className="circular" viewBox="25 25 50 50">
                                    <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
                                </svg>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        {isNavbarVisible && <CompNavbar />}
                        <main>
                            <Outlet />
                        </main>
                        {isNavbarVisible && <CompFooter />}
                    </>

                }


            </m.div>

        </LazyMotion>
    )
}
