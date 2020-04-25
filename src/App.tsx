import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import { Appointment } from './models/appointment';

function App() {
  const storedList = localStorage.getItem('appos');
  const initialList =  storedList ? JSON.parse(storedList) : [];
  const [list, setList] = useState<Appointment[]>(initialList);
  const loadList = (appo: Appointment) => setList([...list, appo]);
  const removeAppoFromList = (appoId: String) => {
    const finalList = list.filter(appo => appo.id !== appoId);
    setList(finalList);
  };
  
  useEffect(() => {
    localStorage.setItem('appos', JSON.stringify(list));
  }, [list])

  return (
    <Fragment>
      <h1>Appointments Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form loadList={loadList}/>
          </div>
          <div className="one-half column">
            <List list={list} removeAppoFromList={removeAppoFromList}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
