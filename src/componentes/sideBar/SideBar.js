import React from 'react';
import './sideBar.css'

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LayersIcon from '@mui/icons-material/Layers';
import AirplayTwoToneIcon from '@mui/icons-material/AirplayTwoTone';
import { color } from '@mui/system';
export default function SideBar() {

  function Dashboard({titulo,c1,c2,f1,f2}) {
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(42, 37, 48)', color:'white'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        
        <ListItemButton onClick={handleClick} sx={{ color:'white'}}>
          <ListItemIcon>
            <AirplayTwoToneIcon  sx={{ color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
          {open ? <ExpandMore /> : < NavigateNextIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary='dashboard 1' onClick={()=>{
                alert('dashboard 1')
              }}/>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary='dashboard 2' onClick={()=>{
                alert('dashboard 2 ')
              }}/>
            </ListItemButton>

          </List>
        </Collapse>
        
      </List>
    );
  }



  function Layouts() {
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(42, 37, 48)',color:'white' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick} sx={{ color:'white'}}>
          <ListItemIcon>
            <NoteAddIcon sx={{ color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Paginas" />
          {open ? <ExpandMore /> : < NavigateNextIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
              
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
              
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

          </List>
        </Collapse>
      </List>
    );
  }


  function Paginas() {
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(42, 37, 48)',color:'white' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
       
      >

        <ListItemButton onClick={handleClick} sx={{ color:'white'}}>
          <ListItemIcon>
            <AutoAwesomeMosaicIcon sx={{ color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Layouts" />
          {open ? <ExpandMore /> : < NavigateNextIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Registro" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
              
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
              
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
              
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
            
          </List>
        </Collapse>
      </List>
    );
  }
 
  function PaginasExtras() {
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(42, 37, 48)',color:'white' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick} sx={{ color:'white'}}>
          <ListItemIcon>
            <AddBoxIcon sx={{ color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Páginas extras" />
          {open ? <ExpandMore /> : < NavigateNextIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

          </List>
        </Collapse>
      </List>
    );
  }


  return <div className='sidebar'>
      <h1 className='logo'>sidebar</h1>
      <h3>Navegação</h3>
      <Dashboard/>
      <Layouts/>
      <Paginas/>
      <PaginasExtras/>
  </div>;
}
