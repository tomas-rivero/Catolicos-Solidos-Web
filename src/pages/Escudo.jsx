import { Container } from 'react-bootstrap'
import { motion, useScroll } from "framer-motion"

export const Escudo = () => {

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

                    <Container className='p-5'>
                        <section className='d-flex flex-row align-items-center detailsShield p-5'>
                            <img src="/img/logo.png" alt="Imágen de nuestro escudo." />
                            <div className="text-light">
                                <p>Un escudo remite a una batalla y al arte de la defensa, a la solidez. Dice el justo Job en la
                                    Escritura: “Militia est vita hominis super terram” (Job 7, 1). La vida del hombre cristiano sobre la
                                    tierra es una milicia, una lucha por la santidad, dejándose conquistar por Dios. En el escenario de
                                    la batalla de la historia, los cristianos portamos un mensaje glorioso de salvación que transforma
                                    el mundo, de Aquel vencedor de la Cruz que ya venció las tinieblas del pecado, la muerte y el error.
                                    Esa fe divina y católica debe ser defendida con un corazón noble y lleno del fuego de la caridad, no
                                    solo por amor al Señor, sino porque no hay verdadera caridad y servicio a “todos los hombres y a
                                    todo el hombre” (San Pablo VI) sin la Verdad que nos hace libres (Cfr. Jn. 8, 31). Por eso sobre el
                                    escudo arde un fuego vivo, fuego del Espíritu de Cristo Crucificado y Resucitado, que quiere
                                    inflamar todo corazón, toda familia, todas las Naciones y toda realidad humana. El fuego, la Cruz y
                                    la corona, señalan ese alto ideal cristiano.</p>
                                <p>Sobre el escudo, se estampa una aspa de Borgoña o cruz de San Andrés. Es el signo de la identidad
                                    hispanoamericana y de la tierra argentina donde nacimos, tierra bendita donde germinaron las semina
                                    Verbi que existían ya y fueron regadas por el agua viva del Evangelio que trajo la evangelización
                                    hispana de las tierras americanas, creando una nueva civilización: Hispanoamérica. Esta bandera no
                                    es una manifestación ideológica afirmada para rechazar otra ideología. Por el contrario, como dice
                                    el Santo Padre, el Papa Francisco: «Si la naturaleza implica una cultura y la Gracia supone la
                                    naturaleza; entonces la Gracia supone también una cultura» (Cfr. Evangelii Gaudium 115). No podemos
                                    no amar la tierra donde la Providencia nos hizo nacer y no podemos no amar y orgullosamente defender
                                    los valores perennes y cristianos presentes en ella. «Un soldado no lucha porque odia lo que tiene
                                    delante sino porque ama lo que tiene detrás» (G.K. Chesterton).</p>
                                <p>Por último, en el escudo hay tres estrellas que, reflejando la luz de la Cruz, también guían,
                                    orientan e iluminan: Nuestra Señora, la Madre Inmaculada que desata los nudos; los Santos Ángeles
                                    Custodios, a cuyo amparo protector nos encomendamos; y Santo Tomás de Aquino, Doctor Común de la
                                    Iglesia, enamorado de Cristo Verdad.</p>
                                <p>Católicos Sólidos. Muchos consideran que la idea de “solidez” implica rigidez o dureza, elitismo y
                                    fanatismo, falta de caridad y misericordia. Para ellos dejamos como leitmotiv las palabras tan
                                    llenas de ironía como de caridad del brillante padre Castellani: «Los de mente dura y corazón blando
                                    son los santos, los de mente blanda y corazón duro son los imbéciles».</p>
                            </div>
                        </section>
                    </Container>

                </motion.div >

            </div>


        </main>
    )
}
