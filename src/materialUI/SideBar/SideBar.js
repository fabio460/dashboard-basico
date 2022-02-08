import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import './SideBar.css'

import {useHistory} from 'react-router-dom'
const background = 'rgb(37, 37, 56)'
const color ='white'
function NestedList1() {
  
  const h = useHistory()

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, background: background,color:color}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{background:background}}>
          Nested List Items
        </ListSubheader>
      }
    >

      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{color:color}}>
          <InboxIcon sx={{color:color}}/>
        </ListItemIcon>
        <ListItemText primary="Principal" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{color:color}}>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText sx={{color:color}} primary="Home" onClick={()=> h.push('/')}/>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{color:color}}>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText primary="Usuarios" onClick={()=>h.push('/users')} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}


function NestedList2() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, background:background,color:color}}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    >

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon sx={{color:color}}/>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{color:color}}>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText primary="Starred" sx={{color:color}}/>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{color:color}}>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText primary="Starred" sx={{color:color}} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

function NestedList3() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, background: background, color:'white'}}
      component="nav"
      aria-labelledby="nested-list-subheader"  >

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon sx={{color:color}}/>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{color:color}}/>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

export default function NestedList(){
  return <>
     <div className='NestedList'>
        <NestedList1/>
        <NestedList2/>
        <NestedList3/>
     </div>
  </>
}