const pages = [{
    name: 'Dashboard',
    route: 'dashboard'
},
{
    name: 'Empleados',
    route: 'empleados'
},
{
    name: 'Agenda',
    route: '#'
},
{
    name: 'Resumen',
    route: 'resumen'
},
{
    name: 'Servicios',
    route: 'servicios'
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
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: 280, minHeight: "91vh" }}>
            <div className='sidebar-container'>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use></use></svg>
                    <span className="fs-4">Administrar</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto" style={{ minHeight: "62vh" }}>
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
                {/*<div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                 </div>*/}
            </div>

        </div>
    )
}
