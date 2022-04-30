import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    const { addContact } = this.props;
    const { resetForm } = this;
    e.preventDefault();
    addContact(name, number);
    resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        Name
        <input type="text" name="name" onChange={handleChange} value={name} />
        <label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
