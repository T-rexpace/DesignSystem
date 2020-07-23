import React from 'react'
import '../../scss/molecules/ModalBirthday.scss'

import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Checkbox from '../atoms/Checkbox'

const ModalBirthday = () => {
    return(
        <div className="modalBirthday">
            <Button type="outline" title="Logotipo" />
            <p>
                Los que cumplen en (mes) tienen su propio asteroide. ¡Obtén el tuyo!
            </p>
            <Input label="Nombre completo" />
            <Input label="Correo electronico" />
            <Checkbox label="Suscribirme" />
            <Button type="normal" />
        </div>
    )
}

export default ModalBirthday