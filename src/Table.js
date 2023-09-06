function Table(s){
    return(<>
         <div class="container">
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
  </>)
}

export default Table;