import { Component } from "react";
import QuestionForm from "../../components/Questions/QuestionForm";
import Question from "../../components/Questions/Question";
import Ably from "../../components/Questions/Ably";
import "./QuestionsPage.css";

class QuestionsPage extends Component {
  constructor(props) {
    super(props);

    this.handleAddComment = this.handleAddComment.bind(this);

    this.state = {
      commentsContainer: [],
      showComments: false,
    };
  }

  componentDidMount() {
    const channel = Ably.channels.get("persisted:production");

    channel.attach();

    channel.once("attached", () => {
      channel.history((err, page) => {
        if (err) {
          console.log("Unable to retrieve questions. Err: " + err.message);
        }

        const commentsContainer = Array.from(page.items, (item) => item.data);
        this.setState({ commentsContainer });

        channel.subscribe((msg) => {
          this.handleAddComment(msg.data);
        });
      });
    });
  }

  componentWillUnmount() {
    const channel = Ably.channels.get("persisted:production");

    channel.detach();
  }

  handleAddComment(comment) {
    this.setState((prevState) => {
      return {
        commentsContainer: [comment].concat(prevState.commentsContainer),
      };
    });
  }

  render() {
    const comments = this._getComments();
    let buttonText = "Show Questions";
    let commentNodes;

    if (this.state.showComments) {
      buttonText = "Hide Questions";
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box">
        <h2>Have a question?</h2>

        <QuestionForm />
        <h3>Questions</h3>

        <p className="comment-count" style={{ paddingBottom: 10 + "px" }}>
          {this._getCommentsTitle(comments.length)}
          {comments.length > 0 && <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>}
        </p>

        {commentNodes}
      </div>
    );
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments,
    });
  }

  _getComments() {
    return this.state.commentsContainer.map((comment, index) => {
      return <Question key={comment.timestamp} comment={comment} />;
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No questions yet";
    } else if (commentCount === 1) {
      return "1 question";
    } else {
      return `${commentCount} questions`;
    }
  }
}

export default QuestionsPage;
