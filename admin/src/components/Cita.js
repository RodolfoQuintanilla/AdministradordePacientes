import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {

    //const [state, setstate] = useState(initialState);

    return (

        <Fragment>
            <div className="cita">
                <p>Mascota:<span>{cita.mascota}</span> </p>
                <p>Propietario:<span>{cita.propietario}</span> </p>
                <p>Fecha:<span>{cita.fecha}</span> </p>
                <p>Sintomas:<span>{cita.sintomas}</span> </p>

                <button
                    className=" button eliminar u-full-width"
                    onClick={() => eliminarCita(cita.id)}
                >Eliminar &times;</button>

            </div>
        </Fragment>

    );

};
Cita.propTypes = {
    crearCita: PropTypes.object.isRequired,
}
export default Cita;