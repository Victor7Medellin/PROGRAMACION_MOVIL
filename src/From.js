import React from 'react';

// Nombre
function Form() {
  const handleNombreChange = (e) => {
    const nombre = e.target.value;
    const containsNumbers = /\d/.test(nombre);

    if (containsNumbers) {
      e.target.setCustomValidity('El nombre no puede contener números');
    } else {
      e.target.setCustomValidity('');
    }
  };
  //APELLIDO
  const handleApellidoChange = (e) => {
    const apellido = e.target.value;
    const containsNumbers = /\d/.test(apellido);

    if (containsNumbers) {
      e.target.setCustomValidity('El apellido no puede contener números');
    } else {
      e.target.setCustomValidity('');
    }
  };

  //NÚMERO
  const handleTelefonoChange = (e) => {
    const telefono = e.target.value;
    const containsLetters = /[a-zA-Z]/.test(telefono);

    if (containsLetters) {
      e.target.setCustomValidity('El teléfono no puede contener letras');
    } else {
      e.target.setCustomValidity('');
    }
  };

  return (
    <div className="container">
      <h1>Formulario</h1>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre(s)</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            onChange={handleNombreChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido(s)</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            onChange={handleApellidoChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            onChange={handleTelefonoChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <h1>Base de Datos</h1>
      <table id="tablaDatos">
        <thead>
          <tr>
            <th>Nombre(s)</th>
            <th>Apellido(s)</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Oscar Manuel</td>
            <td>Lopez</td>
            <td>6121565412</td>
            <td>oscar@gmail.com</td>
          </tr>
          <tr>
            <td>Víctor Alejandro</td>
            <td>Medellín Meza</td>
            <td>6151144797</td>
            <td>victor@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Form;
