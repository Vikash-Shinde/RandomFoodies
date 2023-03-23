import React from 'react'


export default function Footer() {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
                        <li className="nav-item" ><a href="/" className="nav-a px-2 fs-2 text-warning fw-bolder">HOME</a></li>
                        <li className="nav-item"><a href="/menu" className="nav-a px-2 fs-2 text-warning fw-bolder">MENU</a></li>
                        <li className="nav-item"><a href="/about" className="nav-a px-2 fs-2 text-warning fw-bolder">ABOUT</a></li>
                        <li className="nav-item"><a href="/contact" className="nav-a px-2 fs-2 text-warning fw-bolder">CONTACT</a></li>
                    </ul>
                    <p className="text-center text-muted">&copy; 2023 RANDOM Foodies.in</p>
                    <p className="text-center lead">DEVELOPED BY VIKASH SHINDE</p>
                </footer>
            </div>

        </>
    )
}
