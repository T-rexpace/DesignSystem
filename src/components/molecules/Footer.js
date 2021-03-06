import React, { Fragment } from 'react'

import '../../scss/organisms/Footer.scss'

const Footer = () => {
    return (
        <Fragment>
            <h1>Footer</h1>
            <hr className="hr" />
            <div className="footer">
                <p>
                    Datos de fuentes oficiales de la NASA
                </p>
                <p>
                    Hecho con ❤️ por T-<span>REX</span>PACE
                </p>
            </div>
        </Fragment>
    )
}

export default Footer