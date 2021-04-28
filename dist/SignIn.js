"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignInSide;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _LockOutlined = _interopRequireDefault(require("@material-ui/icons/LockOutlined"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      height: '100vh'
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});

function SignInSide() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    component: "main",
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: false,
    sm: 4,
    md: 7,
    className: classes.image
  }), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 8,
    md: 5,
    component: _Paper.default,
    elevation: 6,
    square: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    className: classes.avatar
  }, /*#__PURE__*/_react.default.createElement(_LockOutlined.default, null)), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "h1",
    variant: "h5"
  }, "Sign in"), /*#__PURE__*/_react.default.createElement("form", {
    className: classes.form,
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password"
  }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      value: "remember",
      color: "primary"
    }),
    label: "Remember me"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit
  }, "Sign In"), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "#",
    variant: "body2"
  }, "Forgot password?")), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "#",
    variant: "body2"
  }, "Don't have an account? Sign Up")))))));
}