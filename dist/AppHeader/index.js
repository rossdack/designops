

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _core = require('@material-ui/core');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    tooltext: {
      paddingLeft: theme.spacing(55),
    },
  };
});

var AppHeader = function AppHeader(props) {
  var classes = useStyles();

  return _react2.default.createElement(
    _core.AppBar,
    { position: 'fixed', className: classes.appBar },
    _react2.default.createElement(
      _core.Toolbar,
      { className: 'toolContainer' },
      _react2.default.createElement(
        'div',
        { className: 'toolBar' },
        _react2.default.createElement('img', {
          src: 'https://assets-global.website-files.com/5eb0a0358a376a75f540e0ea/605bc8ff5dd0b052c46e6d37_RXP%20group-Endorsed_svg_White.svg',
          width: '150',
          alt: 'RXP Group',
        }),
        '  ',
      ),
      _react2.default.createElement(
        _core.Typography,
        { variant: 'h6', className: classes.tooltext },
        'Demo Project',
      ),
    ),
  );
};

exports.default = AppHeader;
