import { Paper, Grid, Box, Typography } from "@mui/material";
import React from "react";

export default function Page1() {
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
                <Grid item md={12}>
                  
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
