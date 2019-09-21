import React, { useState } from "react";
import moment from 'moment';

const EditPersonaForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <div className="row">
        <div className="column">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
          <label>Apellido Paterno</label>
          <input
            type="text"
            name="surname1"
            value={user.surname1}
            onChange={handleInputChange}
          />
          <label>Apellido Materno</label>
          <input
            type="text"
            name="surname2"
            value={user.surname2}
            onChange={handleInputChange}
          />

          <label>Sexo</label>
          <div className="radio-container">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                label="male"
                checked={user.gender === "male"}
                onChange={handleInputChange}
              />
              male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                label="female"
                checked={user.gender === "female"}
                onChange={handleInputChange}
              />
              female
            </label>
          </div>
          <label>Estado de nacimiento</label>
          <select name="birthplace" onChange={handleInputChange}>
            {props.stateCity.length > 0 &&
              props.stateCity.map(aux => (
                <option value={aux.state}>{aux.state}</option>
              ))}
          </select>
          <label>Ciudad</label>
          <select name="city" onChange={handleInputChange}>
            {props.stateCity.length > 0 &&
              props.stateCity.map(aux => (
                <option value={aux.city}>{aux.city}</option>
              ))}
          </select>

          <label>Fecha de nacimiento</label>

          <input
            type="date"
            name="birthDate"
            value={moment(new Date(user.birthDate)).format('YYYY-MM-DD')}
            onChange={handleInputChange}
          />
          
          <button>Update user</button>
          <button
            onClick={() => props.setEditing(false)}
            className="button muted-button"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditPersonaForm;
