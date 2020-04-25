import React, { Fragment } from "react";
import { Appointment } from "../models/appointment";
import PropTypes from 'prop-types';

interface propstypes {
  list: Appointment[];
  removeAppoFromList: Function;
}

const List = ({ list, removeAppoFromList }: propstypes) => {
  return (
    <Fragment>
      <h2>Your Appointments</h2>
      {!list || list.length === 0 ? (
        <p className="alerta-error">There are not Appointments</p>
      ) : (
        list.map((appo) => (
          <div key={appo.id} className="cita">
            <p>
              Pet: <span>{appo.pet}</span>
            </p>
            <p>
              PetOwner: <span>{appo.petOwner}</span>
            </p>
            <p>
              Date: <span>{appo.date}</span>
            </p>
            <p>
              Time: <span>{appo.time}</span>
            </p>
            <p>
              Symptoms: <span>{appo.symptoms}</span>
            </p>
            <input
              type="button"
              className="button eliminar u-full-width"
              value="Remove &times;"
              onClick={() => removeAppoFromList(appo.id)}
            />
          </div>
        ))
      )}
    </Fragment>
  );
};

List.propTypes = {
    list: PropTypes.array.isRequired,
    removeAppoFromList: PropTypes.func.isRequired
}

export default List;
