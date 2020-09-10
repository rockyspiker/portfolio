import { useEffect } from 'react'
import Chevron from './icons/chevron'

const Form = ({ className, ...props }) => {
  useEffect(() => {
    let form = document.getElementById('contact-me')
    let status = document.getElementById('contact-me-status')

    let showStatus = (stat) => {
      if (stat) {
        form.reset()
        status.innerHTML = '<p>The form was submitted!</p>'
      } else status.innerHTML = '<p>Oops! There was a problem.</p>'
    }

    let ajax = (method, url, data) => {
      let xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.setRequestHeader('Accept', 'application/json')
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        showStatus(xhr.status === 200)
      }
      xhr.send(data)
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault()
      let data = new FormData(form)
      ajax(form.method, form.action, data)
    })
  }, [])

  return (
    <div className="container">
      <div className={`form-container ${className}`} {...props}>
        <form
          action="https://formspree.io/mnqgkwzo"
          id="contact-me"
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
            <button
              className="button is-primary"
              id="contact-me-submit"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
        <div className="container">
          <p id="contact-me-status"></p>
        </div>
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
