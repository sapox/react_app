import React, { useState } from "react";
import moment from "moment";

const AddPersonaForm = props => {
  const initialFormState = {
    id: null,
    name: "",
    surname1: "",
    surname2: "",
    gender: "",
    birthplace: "",
    city: "",
    birthDate: "",
    age: ""
  };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || (!user.surname1 && !user.surname2)) return;

        props.addUser(user);
        setUser(initialFormState);
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
                value="female"
                name="gender"
                label="female"
                checked={user.gender === "female"}
                onChange={handleInputChange}
              />
              Femenino
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                label="male"
                checked={user.gender === "male"}
                onChange={handleInputChange}
              />
              Masculino
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
            value={user.birthDate}
            min="1900-01-01"
            step="1"
            max={moment(new Date(Date.now() - 864e5)).format("YYYY-MM-DD")}
            onChange={handleInputChange}
          />

          <button>Add new user</button>
        </div>
      </div>
    </form>
  );
};

export default AddPersonaForm;
