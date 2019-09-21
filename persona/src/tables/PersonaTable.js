import React from 'react';
import moment from 'moment';

const birthDateCalc = (birth) => {
  let aux;
  const now = moment(new Date(Date.now() - 864e5))
  const aux1 = moment(new Date(birth))
  aux = now.diff(aux1, 'years');
  return aux 
}

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido Paterno</th>
        <th>Apellido Materno</th>
        <th>Sexo</th>
        <th>Estado de nacimiento</th>
        <th>Ciudad</th>
        <th>Fecha de nacimiento</th>
        <th>Edad</th>
        <th>Actions</th>
      </tr>
    </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname1}</td>
              <td>{user.surname2}</td>
              <td>{user.gender}</td>
              <td>{user.birthplace}</td>
              <td>{user.city}</td>
              <td>{moment(new Date(user.birthDate)).format('DD/MM/YYYY')}</td>
              <td>{birthDateCalc(user.birthDate)}</td>
              <td>
                <button onClick={()=> props.editRow(user) } className="button muted-button">Edit</button>
                <button onClick={()=> props.deleteUser(user.id)} className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ):(
          <tr>
            <td colSpan={3}>
                No users
            </td>
        </tr>
        )}
      </tbody>
  </table>
)

export default UserTable