import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import School from '@mui/icons-material/School';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/klee-one';
import { Button } from '@mui/material';

function TopBar({auth, user}) {


    const handleMenu = (event) => {

    };

    const handleProfileMenuOpen = (event) => {

    };

    const handleMobileMenuClose = () => {

    };

    const navigateHome = () => {
            
        window.location.href = '/';
    
    };

    const navigateLessons = () => {

        window.location.href = '/lessons';

    };

    const navigateDiary = () => {

        // Authenticated users can access the Diary page

        //Not Implemented Yet

        //For now just navigate to the Diary page

        window.location.href = '/diary';

    };





    return(

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar disableGutters sx={{marginLeft: '1rem', display: 'flex', alignItems: 'center'}}>
                    <img src= "JouzuLogo.png" 
                    alt="Jouzu Logo" 
                    width="100" 
                    height="75"
                    onClick={() => navigateHome()}
                    />

                    <Box sx={{ display: { xs: 'none', md: 'flex', marginLeft: '1rem' }}}>
                        <Button color="inherit"
                        sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'klee one', fontSize: '1rem', marginRight: '1rem' }}

                        onClick={() => navigateLessons()}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <School sx={{marginRight: '0.75rem'}}/>
                                Lessons
                            </Box>
                        </Button>
                        <Button color="inherit"
                            sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'klee one', fontSize: '1rem' }}

                            onClick={() => navigateDiary()}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <MenuBookIcon sx={{marginRight: '0.75rem'}}/>
                                Diary
                            </Box>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>


    );


}

export default TopBar;

