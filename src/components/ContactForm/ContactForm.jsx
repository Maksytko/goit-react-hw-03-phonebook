import { Component } from "react";
import propTypes from "prop-types";
import style from "./ContactForm.module.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
    };

    this.addToContactList = props.addToContactList;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nameForCheck = this.state.name;
    const number = this.state.number;

    this.setState({ name: "", number: "" });
    this.addToContactList(nameForCheck, number);
  };

  handleInputChange = (event) => {
    if (event.currentTarget.name === "name") {
      this.setState({
        name: event.currentTarget.value,
      });

      return;
    }

    this.setState({
      number: event.currentTarget.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label className={style.label}>
          <span>Name</span>
          <input
            className={style.input}
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleInputChange}
          />
        </label>
        <label className={style.label}>
          <span>Number</span>
          <input
            className={style.input}
            type="tel"
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
  addToContactList: propTypes.func,
};

export default ContactForm;
