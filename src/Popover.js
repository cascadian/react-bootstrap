import React from 'react';
import classNames from 'classnames';
import BootstrapMixin from './BootstrapMixin';

const Popover = React.createClass({
  mixins: [BootstrapMixin],

  propTypes: {
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    positionLeft: React.PropTypes.number,
    positionTop: React.PropTypes.number,
    arrowOffsetLeft: React.PropTypes.oneOfType([
      React.PropTypes.number, React.PropTypes.string
    ]),
    arrowOffsetTop: React.PropTypes.oneOfType([
      React.PropTypes.number, React.PropTypes.string
    ]),
    title: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      placement: 'right'
    };
  },

  render() {
    const classes = {
      'popover': true,
      [this.props.placement]: true,
      'in': this.props.positionLeft != null || this.props.positionTop != null
    };

    const style = {
      'left': this.props.positionLeft,
      'top': this.props.positionTop,
      'display': 'block'
    };

    const arrowStyle = {
      'left': this.props.arrowOffsetLeft,
      'top': this.props.arrowOffsetTop
    };

    return (
      <div {...this.props} className={classNames(this.props.className, classes)} style={style} title={null}>
        <div className="arrow" style={arrowStyle} />
        {this.props.title ? this.renderTitle() : null}
        <div className="popover-content">
          {this.props.children}
        </div>
      </div>
    );
  },

  renderTitle() {
    return (
      <h3 className="popover-title">{this.props.title}</h3>
    );
  }
});

export default Popover;
