import Chevron from './icons/chevron'

const Form = ({ className, ...props }) => {
  return (
    <div className="container">
      <div className={`form-container ${className}`} {...props}>
        <form
          action="https://formspree.io/rockyspiker.contact@gmail.com"
          method="POST"
        >
          <div className="info">
            <InputBlock label="Name" name="name" type="text" required />
            <InputBlock label="Email" name="mail" type="mail" required />
            <InputBlock label="Company" name="company" type="text" />
            <InputBlock label="Phone" name="phone" type="tel" />
            <input type="hidden" name="_next" value="/contact" />
          </div>
          <TextBlock label="Message" name="message" required />
          <div className="submit-container">
            <button className="button is-primary" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const InputBlock = ({ label, name, placeholder, type, ...props }) => {
  return (
    <div className="input-block">
      <label>
        {label}
        <span className="required">{props.required ? ' * ' : ''}</span>
      </label>
      <br></br>
      <input type="text" name={name} {...props}></input>
      <Chevron />
    </div>
  )
}

const TextBlock = ({ label, name, placeholder, type, ...props }) => {
  return (
    <div className="text-block">
      <label>
        {label}
        <span className="required">{props.required ? ' * ' : ''}</span>
      </label>
      <br></br>
      <textarea name={name} {...props}></textarea>
      <Chevron />
    </div>
  )
}

export default Form
