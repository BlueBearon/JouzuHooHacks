import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Calendar from 'react-calendar';
import './Calendar.css';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Editor, EditorState } from 'draft-js';


function Diary() {

    //Default to today's date
    const [diaryDate, setDiaryDate] = React.useState(new Date());

    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

    const [darkMode, setDarkMode] = React.useState(false);

    const darkShade = '#282c34';

    const clearContent = () => {
        setEditorState(() => EditorState.createEmpty());
    };

    const save = () => {

        //Save the content of the editor to the database

        //Not Implemented Yet

    };

    const updateKanjiCount = () => {

        const content = editorState.getCurrentContent().getPlainText();

        for(let i = 0; i < content.length; i++){

            if(content.charCodeAt(i) >= 19968 && content.charCodeAt(i) <= 40869){

                uniqueKanji.add(content.charAt(i));

            }
    
        }

        return uniqueKanji.size;
    
    };

    const handleDateChange = (date) => {
        setDiaryDate(date);
    };

    const uniqueKanji = new Set();

    return(
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                
                }
            }
            >

            <Box
                sx={
                    {
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        height: '50%',
                        width: '100%',
                    }
                }
            >

                <Box
                sx={
                    {
                        width: '40vw',
                        height: '70vh',
                        marginTop: '4rem',
                        borderRadius: '1rem',
                        padding: '1rem',
                    }
                }
                >{/*Calendar Box */}

                    <Calendar
                        onChange={handleDateChange}
                        value={diaryDate}
                        
                    />

                </Box>



                <Box
                    sx={{

                        width: '50vw',
                        height: '90vh',

                    }}
                >

                    <Box
                        sx={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: '1rem',
                            }
                        }
                        >

                        <Typography variant="h5"
                            sx={{
                                fontFamily: 'klee one',
                                textAlign: 'center',
                            
                            }}
                        >
                            {diaryDate.toDateString()}
                        </Typography>

                        <Divider orientation="horizontal" flexItem/>

                        </Box>
                
                    <Box
                    sx={
                        {
                            width: '47vw',
                            height: '70vh',
                            border: darkMode ? '1px solid white' : '1px solid black',
                            marginTop: '1rem',
                            borderRadius: '1rem',
                            padding: '1rem',
                            backgroundColor: darkMode ? darkShade : 'white',
                            color: darkMode ? 'white' : 'black',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            
                        }
                    }
                    >{/*Diary Box */}

                        

                        

                        <Editor editorState={editorState} onChange={setEditorState} height="55vh"/>

    
                    </Box>

                    

                    <Box /*Stats*/ 
                    
                    sx={
                        {
                            display: 'flex',
                            flexDirection: 'row', 
                            marginTop: '1rem',
                            marginLeft: '1rem',
                            marginBottom: '1rem',
                            scrollMarginBottom: '1rem',
                        }
                    }
                    >

                    <Button
                        onClick = {clearContent}
                        sx = {{
                            marginRight: '1rem',
                        }}
                        > 
                            Clear
                    </Button>

                    <Button
                        onClcik = {save}
                        sx = {{
                            marginRight: '1rem',
                        }}
                        >
                            Save
                    </Button>


                        <Box
                        
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>

                        </Box>

                        <Box
                            sx={
                                {
                                    width: '47vw',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyItems: 'center',

                                }
                            }
                        >
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginRight: '2rem',
                            
                            }}
                            >
                                <ListItemAvatar
                                sx={{
                                    fontFamily: 'klee one',
                                    marginRight: '1rem',
                                }}>
                                    文字数
                                </ListItemAvatar>
                                <ListItemText primary="Character Count" secondary={editorState.getCurrentContent().getPlainText().length} />
                            </Box>
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            
                            }}
                            >
                                <ListItemAvatar
                                sx={{
                                    fontFamily: 'klee one',
                                    marginRight: '0.7rem',
                                }}>
                                    漢字
                                </ListItemAvatar>
                                <ListItemText primary="Unique Kanji" secondary={updateKanjiCount()} />
                            </Box>
                            
                        </Box>

                    </Box>



                </Box>

            </Box>

        </Box>
    );

}

export default Diary;