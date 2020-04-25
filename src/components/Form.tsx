import React, { Fragment, useState, FormEvent } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({loadList}: {loadList: Function}) => {
    const initialstate = {
        id: "",
        pet: "Berlin",
        petOwner: "Davo",
        date: "2020-04-02",
        time: "15:15:00",
        symptoms: "fasfasfa",
      };
  const [appointment, setAppointment] = useState(initialstate);
  const [formError, setFormError] = useState(false);

  const handleChange = (e: any) =>
    setAppointment({ ...appointment, [e.target.name]: e.target.value });

  const { pet, petOwner, date, time, symptoms } = appointment;

  const validateForm = () => {
    if (
      pet.trim() === "" ||
      petOwner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
        setFormError(true);
    }
    setFormError(false);
  };
  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
    validateForm();
    appointment.id = uuidv4();
    loadList(appointment);
    setAppointment(initialstate);
  };
  return (
    <Fragment>
      <h2>Create Appointment</h2>
      <form onSubmit={formSubmit}>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="your pet name"
          value={pet}
          onChange={handleChange}
        />
        <label>Pet Owner</label>
        <input
          type="text"
          name="petOwner"
          className="u-full-width"
          placeholder="your name"
          value={petOwner}
          onChange={handleChange}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          value={date}
          onChange={handleChange}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          value={time}
          onChange={handleChange}
        />
        <label>Symptoms</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          value={symptoms}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add Appointment
        </button>
      </form>
      {formError ? <div className="alerta-error">All fields are required!</div> : null}
    </Fragment>
  );
};

Form.propTypes = {
    loadList: PropTypes.func.isRequired
}

export default Form;
