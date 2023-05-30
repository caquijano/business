import React from 'react'

export default function Dashboard() {
    return (
        <div>
            <head>
                <title>Resumen de Ventas</title>
            </head>

            <body>
                <div className="container">
                    <h2>Resumen de Ventas</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Producto A</td>
                                <td>5</td>
                                <td>$10</td>
                                <td>$50</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Producto B</td>
                                <td>3</td>
                                <td>$15</td>
                                <td>$45</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Producto C</td>
                                <td>2</td>
                                <td>$20</td>
                                <td>$40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            </body>

        </div>
    )
}
