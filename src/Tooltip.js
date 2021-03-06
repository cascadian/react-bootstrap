import React from 'react';
import classNames from 'classnames';
import BootstrapMixin from './BootstrapMixin';

const Tooltip = React.createClass({
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
    ])
  },

  getDefaultProps() {
    return {
      placement: 'right'
    };
  },

  render() {
    const classes = {
      'tooltip': true,
      [this.props.placement]: true,
      'in': this.props.positionLeft != null || this.props.positionTop != null
    };

    const style = {
      'left': this.props.positionLeft,
      'top': this.props.positionTop
    };

    const arrowStyle = {
      'left': this.props.arrowOffsetLeft,
      'top': this.props.arrowOffsetTop
    };

    return (
        <div {...this.props} className={classNames(this.props.className, classes)} style={style}>
          <div className="tooltip-arrow" style={arrowStyle} />
          <div className="tooltip-inner">
            {this.props.children}
          </div>
        </div>
      );
  }
});

export default Tooltip;
