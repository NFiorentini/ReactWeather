const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({

  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  componentDidMount: function () {
    const {title, message} = this.props;

    const modalMarkup = (
      <div id="error-modal"
          className="reveal tiny text-center"
          data-reveal="">

        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    const $modal = $(ReactDOMServer.renderToString(
        modalMarkup));

    $(ReactDOM.findDOMNode(this)).html($modal);

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function () {
    return (
      <div>

      </div>
    );
  }
});

module.exports = ErrorModal;
