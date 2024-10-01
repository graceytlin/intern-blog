import { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import Ably from "./Ably";
import emailjs from "emailjs";
import "./QuestionForm.scss";

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.addQuestion = this.addQuestion.bind(this);
    this.validator = new SimpleReactValidator({
      messages: {
        alpha_space: "Name cannot contain numbers",
        email: "Please enter a valid email",
        required: "Please enter your name, email, and question",
      },
    });

    this.state = {
      name: "",
      email: "",
      comment: "",
      showSuccessMessage: false,
    };
  }

  addQuestion = (e) => {
    e.preventDefault();

    const comment = this.state.comment;
    const name = this.state.name;

    const timestamp = Date.now();

    if (name && comment) {
      const commentObject = { name, comment, timestamp };

      const channel = Ably.channels.get("persisted:production");

      channel.publish("add_comment", commentObject, (err) => {
        if (err) {
          console.log("Unable to publish message. Err: " + err.message);
        }
      });
    }

    this.setState({ name: "" });
    this.setState({ email: "" });
    this.setState({ comment: "" });
    this.validator.hideMessages();
  };

  sendEmail = (e) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLICKEY;

    emailjs.init({
      publicKey: publicKey,
    });

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: this.state.name,
          message: this.state.comment,
          reply_to: this.state.email,
        },
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  validateForm = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      this.sendEmail(e);
      this.addQuestion(e);
      this.setState({ showSuccessMessage: true });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div className="question-form">
        <form>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                name="name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder="Your name"
              />
              {this.validator.message(
                "name",
                this.state.name,
                "required|alpha_space"
              )}
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                name="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Your email address - (will not be displayed on page)"
              />
              {this.validator.message(
                "email",
                this.state.email,
                "required|email"
              )}
            </div>
          </div>

          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                name="comment"
                value={this.state.comment}
                onChange={(e) => this.setState({ comment: e.target.value })}
                placeholder="What's your question?"
              ></textarea>

              {this.validator.message(
                "comment",
                this.state.comment,
                "required|min:10"
              )}
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="submit" onClick={this.validateForm}>
                Submit
              </button>
            </div>
          </div>

          {this.state.showSuccessMessage && <p className="success">Your question has been received!</p>}
        </form>
      </div>
    );
  }
}

export default QuestionForm;
