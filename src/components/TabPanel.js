import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Latex from 'react-latex';
import { useState , useRef} from 'react';
import { useTheme } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid} from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { addStyles ,EditableMathField } from 'react-mathquill';
addStyles();
function TabPanel(props) {
  const lamdaVal = `$$$\\beta$`;

const [lamdaValue ,setLamdaValue] = useState('1')

  
  const { children, value, index, ...other } = props;

  return (
    <React.Fragment>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  </React.Fragment>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function onClickLambda(){
    
    //const [lamdaValue, setValue] = React.useState();
   //setLamdaValue('lamda')
    console.log("Button clicked")
    
}



export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [latex, setLatex] = useState("");
  const mathfield = useRef(null);

  const addText = (p) => {
    mathfield.current.cmd(p);
    mathfield.current.focus();
  };
 
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 } } align="center">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Latin" {...a11yProps(0)} />
          <Tab label="Math Operator" {...a11yProps(1)} />
          <Tab label="Arrows" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Latin
          <br/>
          <Button variant="outlined"  onClick={() => addText("\\Omega")}>&Omega;</Button>  
          <Button variant="outlined"  onClick={() => addText("\\Pi")}>&Pi;</Button>
          <Button variant="outlined"  onClick={() => addText("\\pi")}>&pi;</Button>
          <Grid container spacing={2}>
          <Grid item xs={12}>
          <div>
        <EditableMathField
          id="my"
          style={{
            width: "100%",
            height:"70%",
          }}
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex());
          }}
          config={{
            spaceBehavesLikeTab: true,
          }}
          mathquillDidMount={(mf) => {
            mathfield.current = mf;
          }}
        />
        <p>{latex}</p>
      </div>
        </Grid>
        <Grid item xs={4}></Grid>
        </Grid>
        </TabPanel>

        
        <TabPanel value={value} index={1} dir={theme.direction}>
          Math Operator
          <br/>
          <Button variant="outlined" onClick={() => addText("\\radic")}>&radic;</Button>
          <Button variant="outlined" onClick={() => addText("\\prop")}>&prop;</Button>   
          <Button variant="outlined" onClick={() => addText("\\infin")}>&infin;</Button>
          <Grid container spacing={2}>
          <Grid item xs={12}>
          <div>
        <EditableMathField
          id="my"
          style={{
            width: "100%",
            height:"70%",
          }}
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex());
          }}
          config={{
            spaceBehavesLikeTab: true,
          }}
          mathquillDidMount={(mf) => {
            mathfield.current = mf;
          }}
        />
        <p>{latex}</p>
      </div>
        </Grid>
        <Grid item xs={4}></Grid>
        </Grid>
        </TabPanel>





        <TabPanel value={value} index={2} dir={theme.direction}>
          Arrows
          <br/>
          <Button variant="outlined" onClick={() => addText("\\larr")}>&larr;</Button>
          <Button variant="outlined" onClick={() => addText("\\uarr")}>&uarr;</Button>   
          <Button variant="outlined" onClick={() => addText("\\rarr")}>&rarr;</Button>
          <Grid container spacing={2}>
          <Grid item xs={12}>
          <div>
        <EditableMathField
          id="my"
          style={{
            width: "100%",
            height:"70%",
          }}
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex());
          }}
          config={{
            spaceBehavesLikeTab: true,
          }}
          mathquillDidMount={(mf) => {
            mathfield.current = mf;
          }}
        />
        <p>{latex}</p>
      </div>
        </Grid>
        <Grid item xs={4}></Grid>
        </Grid>
          
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}