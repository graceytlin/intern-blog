import { Component } from "react";
import { FaUserCircle } from "react-icons/fa";

class Question extends Component {
  constructor(params) {
    super(params);
    this.messageDate = this.messageDateGet();
  }

  messageDateGet() {
    const date = new Date(this.props.comment.timestamp);
    const dateTimeFormatOptions = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const localeString = date.toLocaleString(undefined, dateTimeFormatOptions);

    return localeString;
  }

  render() {
    return (
      <div className="comment">
        <p className="user-name">
          <FaUserCircle /> {this.props.comment.name}
        </p>

        <p className="comment-body">- "{this.props.comment.comment}"</p>

        <p className="comment-footer">{this.messageDate}</p>
      </div>
    );
  }
}

export default Question;
