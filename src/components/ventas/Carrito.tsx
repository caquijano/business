interface resumen {
    empleaadoId: string,
    servicioId: string,
    precio: number,
    nombreServicio: string
}

interface Props {
    resumenes: Array<resumen>
}

function Carrito({ resumenes }: Props) { 
    return (
        <form>
            <ul className="list-group mb-3">
                {resumenes.map((resumen, index) => {
                    return (
                        <li  key={index}className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">{resumen.nombreServicio}</h6>
                                <small className="text-body-secondary">{resumen.empleaadoId}</small>
                            </div>
                            <span className="text-body-secondary">${resumen.precio}</span>
                        </li>
                    )
                })}
                <              li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                    <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">−$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$</strong>
                </li>
            </ul>
            <div className="input-group">
                <button type="submit" className="btn btn-secondary">Pagar</button>
            </div>
        </form >
    );
}

export default Carrito;