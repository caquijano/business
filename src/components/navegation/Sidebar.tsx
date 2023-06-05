const pages = [{
    name: 'Inicio',
    route: 'inicio'
},
{
    name: 'Empleados',
    route: 'empleados'
},
{
    name: 'Servicios',
    route: 'servicios'
},
{
    name: 'Resumen',
    route: 'resumen'
},
{
    name: 'Liquidar',
    route: 'liquidar'
},

]
interface Props {
    active: Function,
    activeLink: number
}


export default function Sidebar({ activeLink, active }: Props) {

    const handlePages = (e: any) => {
        const page = Number(e.target.getAttribute("key-id"))
        active(page)
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-1 text-white bg-dark" style={{ width: 200, minHeight: "91vh" }}>
            <div className='sidebar-container'>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi me-2" width="20" height="32"><use></use></svg>
                    <span className="fs-4">Administrar</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto" style={{ minHeight: "40vh" }}>
                    {pages.map((page, index) => {
                        return (

                            <li className="nav-item" key={index} onClick={handlePages}>
                                <a href={page.route} className={`nav-link text-white ${activeLink === index ? "active" : ""} `} aria-current="page" key-id={index} >
                                    <svg className="bi me-2" width="16" height="16"><use></use></svg>
                                    {page.name}
                                </a>
                            </li>
                        )
                    })
                    }
                </ul>
                <hr />
            </div>

        </div>
    )
}
