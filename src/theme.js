import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiToolbar: {
      root: {
        boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.11)',
        backgroundColor: '#fff',
      },
    },
    MuiLink: {
      root: {
        color: '#1473e6',
      },
    },
    MuiButton: {
      contained: {
        minWidth: 160,
        padding: '15px 30px',
        fontSize: 21,
        fontWeight: 400,
        lineHeight: 1,
        backgroundColor: '#ffc617',
        '&:hover': {
          backgroundColor: '#f0b401',
        },
        '&:active': {
          backgroundColor: '#dba709',
        },
      },
      label: {
        textTransform: 'none',
      }
    }
  },
});

export default theme;