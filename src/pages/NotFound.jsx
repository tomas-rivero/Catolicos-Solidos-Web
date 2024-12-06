
import { useRouteError } from "react-router-dom";

export const NotFound = () => {
    const err = useRouteError();

    return (
        <div>
            <section className="page_404">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <img src="../img/logo.png" alt="" />
                                <p className="fw-bold">¡VIVA CRISTO REY!</p>
                                <div className="four_zero_four_bg">

                                </div>
                                <div className="contant_box_404">
                                    <h1 className="text-center fw-bold text-danger">{err.status + ' ' + err.statusText}</h1>
                                    <p className="fw-bold">"Erraste en tu búsqueda, mas no temas, porque en Cristo siempre está el Camino, la Verdad y la Vida." (Jn 14, 6)</p>
                                    <p className="fw-semibold">Este enlace no conduce a su destino, pero el Señor nunca abandona al que busca con fe.</p>
                                    <a className="btn btn-dark" href='/' >Volver al inicio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
