import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function New() {

    const data=[
        {
          "department": "customer_service",
          "sub_departments": [
            "support",
            "customer_success"
          ]
        },
        {
          "department": "design",
          "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
          ]
        }
      ]
      console.log(data);


    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
      setChecked([event.target.checked, event.target.checked]);
    };
  
    const handleChange2 = (event) => {
      setChecked([event.target.checked, checked[1]]);
    };
  
    const handleChange3 = (event) => {
      setChecked([checked[0], event.target.checked]);
    };

    const children = (
        

        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label="Support"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="Customer Success"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </Box>
      );
  return (
    <>
     <div>
      <FormControlLabel
        label="Customer Service"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
    
    
    </>
  )
}
