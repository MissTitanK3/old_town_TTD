import React from 'react';
import { Link } from 'react-router-dom';


// Stylesheet
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { DrawerWrap } from '../style/Wrapper';


const useStyles = makeStyles({
  list: {
    width: "100vw",
    height: "100vh",
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <DrawerWrap
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}

    >
      <div className='exit' onClick={toggleDrawer(anchor, false)}><CloseIcon /></div>
      <List>
        {['About', 'Events', 'Directory', 'News'].map((text, x) => (
          < ListItem button key={x} >
            <Link style={{ textDecoration: 'none' }} to={'/' + text.toLowerCase()} >
              <ListItemText primary={text} />
              <Divider style={{ width: '100vw', border: '1px solid white', backgroundColor: 'white' }} />
            </Link>
          </ListItem>
        ))
        }
      </List >
    </DrawerWrap >
  );

  return (
    <DrawerWrap>
      <React.Fragment key={'right'} >
        <Button className='NoBack' onClick={toggleDrawer('right', true)}><MenuIcon fontSize='large' color='disabled' /></Button>
        <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </React.Fragment>
    </DrawerWrap>
  );
}
