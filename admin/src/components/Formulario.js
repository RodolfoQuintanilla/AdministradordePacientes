import React, { Fragment, useState } from 'react';

const Formulario = () => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const actualizarState = (e) => {

        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    const { mascota, propietario, fecha, hora, sintomas } = cita;


    return (

        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre macota</label>
                <input
                    type="text"
                    name="masota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Nombre Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}

                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                >

                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agrerar Cit</button>
            </form>
        </Fragment>

    );

};

export default Formulario;