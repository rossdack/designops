

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _core = require('@material-ui/core');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
    toolBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      height: '100%',
      position: 'absolute',
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: theme.spacing(0, 3),
    },
  };
});

var AppHeader = function AppHeader(props) {
  var classes = useStyles();
  var _props$title = props.title,
    title = _props$title === undefined ? 'Demo Page' : _props$title,
    _props$logoSource = props.logoSource,
    logoSource =
      _props$logoSource === undefined
        ? 'https://assets-global.website-files.com/5eb0a0358a376a75f540e0ea/605bc8ff5dd0b052c46e6d37_RXP%20group-Endorsed_svg_White.svg'
        : _props$logoSource;

  return _react2.default.createElement(
    _core.AppBar,
    { position: 'fixed', className: classes.appBar },
    _react2.default.createElement(
      _core.Toolbar,
      { className: (0, _classnames2.default)('bg-primary', classes.toolBar) },
      _react2.default.createElement(
        'div',
        { className: classes.logo },
        _react2.default.createElement('img', {
          'data-testid': 'image',
          src: logoSource,
          width: '150',
          alt: 'RXP Group',
        }),
      ),
      _react2.default.createElement(
        _core.Typography,
        { 'data-testid': 'title', variant: 'h6' },
        title,
      ),
    ),
  );
};

exports.default = AppHeader;
