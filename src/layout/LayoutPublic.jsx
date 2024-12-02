import { CompFooter, CompNavbar } from "../components";
import { LazyMotion, domAnimation, m } from "framer-motion"
import { useLocation, Outlet } from "react-router-dom"
import { useState } from "react";
import UseScrollTop from "../components/ScrollToTop";


export const LayoutPublic = () => {
    const [loader, setLoader] = useState(true)
    window.addEventListener('load', () => {
        setLoader(false)
    })

    const location = useLocation();

    const validRoutes =
        ["/",
            "/sanpantaleon",
            "/escudo",
            "/manosalaobra",
            "/pur/equipos",
            "/areas/sociales",
            "/areas/salud",
            "/areas/ecopuring",
            "/areas/arteydisenio",
            "equipos/comunicacion"
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
