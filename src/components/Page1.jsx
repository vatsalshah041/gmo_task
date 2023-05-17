import { Paper, Grid, Box, Typography,TextField, Button, linkClasses } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function Page1() {
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [nerror,setNerror]=useState();
  const [perror,setPerror]=useState();
  const [eerror,setEerror]=useState();
  const [error,setError]=useState(false);
  const navigate = useNavigate();
  const submit=()=>{
    console.log(name,email,phone);
    if(name=="")
    {
      setNerror(" * Compulsory");
      setError(false);
      localStorage.setItem("error",false);
    }
    else
    {
      setNerror("");
      setError(true);
      localStorage.setItem("name",name);
      localStorage.setItem("error",true);
    }
    if(phone=="")
    {
      setPerror(" * Compulsory")
      setError(false);
      localStorage.setItem("error",false);
    }
    else
    {
      setPerror("")
      setError(true);
      localStorage.setItem("phone",phone)
      localStorage.setItem("error",true);
    }
    if(email=="")
    {
      setEerror(" * Compulsory")
      setError(false);
      localStorage.setItem("error",false);
      
    }
    else
    {
      setEerror("")
      setError(true);
      localStorage.setItem("email",email)
      localStorage.setItem("error",true);
    }
    nav();
    
  }
  const nav=()=>{
    if(localStorage.getItem("error")=='true')
    {
      navigate('/page2');
    }
  }
  return (
    <div>
      <Grid container>
        <Grid item md={4}></Grid>
        <Grid item md={4}>
          <Box sx={{ width: "30rem" }}>
            <Paper elevation={4}>
              <Grid container rowSpacing={4} sx={{paddingRight:"10px",paddingLeft:"10px"}}>
                <Grid item md={12}>
                  <Typography variant="h5" sx={{textAlign:"center"}}> Validation</Typography>
                  
                </Grid>
                <Grid item md={12} sx={{padding:"0px 10px 10px 10px"}}>
                <TextField id="outlined-basic" label="Name" required fullWidth variant="outlined" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <div className="error">{nerror}</div>
                </Grid>
                <Grid item md={12} sx={{padding:"0px 10px 10px 10px"}}>
                <TextField id="outlined-basic" label="Email" required fullWidth variant="outlined" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <div className="error">{eerror}</div>
                </Grid>
                <Grid item md={12} sx={{padding:"0px 10px 0px 10px"}}>
                <TextField id="outlined-basic" label="Phone no." required fullWidth variant="outlined" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <div className="error">{perror}</div>
                </Grid>
                <Grid item ms={12} sx={{alignContent:"center",alignItems:"center"}}>
                  <Button onClick={submit}>Submit</Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </div>
  );
}
