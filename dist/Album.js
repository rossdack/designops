"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _PhotoCamera = _interopRequireDefault(require("@material-ui/icons/PhotoCamera"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      marginRight: theme.spacing(2)
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      paddingTop: '56.25%' // 16:9

    },
    cardContent: {
      flexGrow: 1
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  };
});
var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var Album = function Album(_ref) {
  var Heading = _ref.Heading,
      SubContent = _ref.SubContent;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    position: "relative"
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, null, /*#__PURE__*/_react.default.createElement(_PhotoCamera.default, {
    className: classes.icon
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    color: "inherit",
    noWrap: true
  }, "Album layout"))), /*#__PURE__*/_react.default.createElement("main", null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.heroContent
  }, /*#__PURE__*/_react.default.createElement(_Container.default, {
    maxWidth: "sm"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "h1",
    variant: "h2",
    align: "center",
    color: "textPrimary",
    gutterBottom: true
  }, Heading), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    paragraph: true
  }, SubContent))), /*#__PURE__*/_react.default.createElement(_Container.default, {
    className: classes.cardGrid,
    maxWidth: "md"
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 4
  }, cards.map(function (card) {
    return /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      key: card,
      xs: 12,
      sm: 6,
      md: 4
    }, /*#__PURE__*/_react.default.createElement(_Card.default, {
      className: classes.card
    }, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
      className: classes.cardMedia,
      image: "https://source.unsplash.com/random",
      title: "Image title"
    }), /*#__PURE__*/_react.default.createElement(_CardContent.default, {
      className: classes.cardContent
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      gutterBottom: true,
      variant: "h5",
      component: "h2"
    }, "Heading"), /*#__PURE__*/_react.default.createElement(_Typography.default, null, "This is a media card. You can use this section to describe the content.")), /*#__PURE__*/_react.default.createElement(_CardActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
      size: "small",
      color: "primary"
    }, "View"), /*#__PURE__*/_react.default.createElement(_Button.default, {
      size: "small",
      color: "primary"
    }, "Edit"))));
  })))));
};

var _default = Album;
exports.default = _default;