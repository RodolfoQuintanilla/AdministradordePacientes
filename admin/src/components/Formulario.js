import React, { Fragment, useState } from 'react';

const Formulario = () => {

    //const [state, setstate] = useState(initialState);

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
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="masota"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                />
                <label>Nombre Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"

                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
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