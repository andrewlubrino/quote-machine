import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var that = this;
    fetch("https://api.quotable.io/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        that.setState({
          quote: data.content,
          author: data.author
        });
      });
  }

  handleClick = () => {
    var that = this;
    fetch("https://api.quotable.io/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        that.setState({
          quote: data.content,
          author: data.author
        });
      });
  };

  render() {
    return (
      <div className="body-class">
        <div className="quote-class">
          <p className="content-class">
            <FontAwesomeIcon icon={faQuoteLeft} /> {this.state.quote}
          </p>
          <p className="author-class">- {this.state.author}</p>
          <Button callBack={this.handleClick} />
          <a
            className="link-style"
            href="https://twitter.com/intent/tweet"
            title="Tweet this quote!"
          >
            <FontAwesomeIcon className="font-awesome-style" icon={faTwitter} />
          </a>
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  onTrigger = (event) => {
    this.props.callBack();
  };

  render() {
    return (
      <button type="button" className="button-class" onClick={this.onTrigger}>
        New Quote
      </button>
    );
  }
}

export default QuoteMachine;
