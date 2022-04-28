import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  // phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
  });

  initialValues = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSubmit = (values, { resetForm }) => {
    this.state.contacts.push(values);
    console.log(this.state.contacts);
    resetForm();
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <section>
          <h2>Phonebook</h2>
          <Formik
            initialValues={this.initialValues}
            validationSchema={this.schema}
            onSubmit={this.handleSubmit}
          >
            <Form autoComplete="off">
              <label htmlFor="name">
                Name
                <Field type="text" name="name" id={this.nameInputId} />
                <ErrorMessage name="name" />
              </label>
              <label htmlFor="number">
                Number
                <Field type="tel" name="number" id={this.numberInputId} />
                <ErrorMessage name="number" />
              </label>
              <button type="submit">Add contact</button>
            </Form>
          </Formik>
        </section>
        <section>
          <h2>Contacts</h2>
          {contacts.map(({ id, name, number }) => (
            <ul>
              <li>
                <span>
                  {name}: {number}
                </span>
                <button type="button">Delete</button>
              </li>
            </ul>
          ))}
        </section>
      </>
    );
  }
}
