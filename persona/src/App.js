import React, { useState } from 'react';
import PersonaTable from './tables/PersonaTable';
import AddPersonaForm from './forms/AddPersonaForm';
import EditPersonaForm from './forms/EditPersonaForm';

const App = () => {
 
  const usersData = [
    {id: 1, name: 'Diego', surname1: 'Puente', surname2: 'del Valle de Catamarca', gender: 'male', birthplace: 'Colima', city: 'Colima', birthDate: '09/19/1988'},
    {id: 2, name: 'Rodrigo', surname1: 'Moreno', surname2: 'de la Serna', gender: 'male', birthplace: 'Campeche', city: 'Campeche', birthDate: '09/04/1978' },
    {id: 3, name: 'Dardo', surname1: 'Venenoso', surname2: '', gender: 'female', birthplace: 'Nuevo León', city: 'Monterrey', birthDate: '06/13/1986'},
  ]

  const stateCityMex = [
    {state:'Aguascalientes', city: 'Aguascalientes'},
    {state:'Baja California', city: 'Mexicali'},
    {state:'Baja California Sur', city: 'La Paz'},
    {state:'Campeche', city: 'Campeche'},
    {state:'Coahuila', city: 'Saltillo'},
    {state:'Colima', city: 'Colima'},
    {state:'Chiapas', city: 'Tuxtla Gutiérrez'},
    {state:'Chihuahua', city: 'Chihuahua'},
    {state:'Distrito Federal', city: 'Ciudad de México'},
    {state:'Durango', city: 'Durango'},
    {state:'Guanajuato', city: 'Guanajuato'},
    {state:'Guerrero', city: 'Chilpancingo'},
    {state:'Hidalgo', city: 'Pachuca'},
    {state:'Jalisco', city: 'Guadalajara'},
    {state:'México', city: 'Toluca'},
    {state:'Michoacán', city: 'Morelia'},
    {state:'Morelos', city: 'Cuernavaca'},
    {state:'Nayarit', city: 'Tepic'},
    {state:'Nuevo León', city: 'Monterrey'},
    {state:'Oaxaca', city: 'Oaxaca'},
    {state:'Puebla', city: 'Puebla'},
    {state:'Querétaro', city: 'Querétaro'},
    {state:'Quintana Roo', city: 'Chetumal'},
    {state:'San Luis Potosí', city: 'San Luis Potosí'},
    {state:'Sinaloa', city: 'Culiacán'},
    {state:'Sonora', city: 'Hermosillo'},
    {state:'Tabasco', city: 'Villahermosa'},
    {state:'Tamaulipas', city: 'Ciudad Victoria'},
    {state:'Tlaxcala', city: 'Tlaxcala'},
    {state:'Veracruz', city: 'Xalapa'},
    {state:'San Luis Potosí', city: 'San Luis Potosí'},
    {state:'Yucatán', city: 'Mérida'},
    {state:'Zacatecas', city: 'Zacatecas'},
  ]

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', surname1: '', surname2: '', gender: '', birthplace: '', city: '', birthDate: '', age: '' }
  
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, surname1: user.surname1, surname2: user.surname2, gender: user.gender, birthplace: user.birthplace, city: user.city, birthDate: user.birthDate, age: user.age})
  }
  
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      
      <div className="flex-row">
        <div className="container">
        {
          editing ? (
            <div>
              <h2>Edit User</h2>
              <EditPersonaForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                stateCity={stateCityMex}
              />  
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddPersonaForm addUser={addUser} stateCity={stateCityMex} />
            </div>
          )
        }
        </div>
        <div>
          <PersonaTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App;
