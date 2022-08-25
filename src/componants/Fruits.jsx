import React, { useState } from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const Fruits = () => {
  const [fruit, setFruit] = useState("Apple");
  return (
    <div className="ssub">
      <h1>Fruits Home</h1>
      <Grid container spacing={3}>
        <Grid Item xs={12}>
          <Card>
            <CardContent className="txt">{fruit}</CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Button
            onClick={() => setFruit("Orange")}
            variant="contained"
            fullWidth
            color="warning"
          >
            Orange
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setFruit("MANGO")}
            variant="contained "
            fullWidth color="error"
          >
            Mango
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setFruit("GRAPES")}
            variant="contained"
            fullWidth color="warning"
          >
            Grapes
          </Button>
        </Grid>

        <Grid item xs={2}>
            <Button 
            onClick={()=>setFruit("Cherry")}
            variant="contained" fullWidth color="success">Cherry</Button>
        </Grid>
        <Grid item xs={2}>
        <Button 
        onClick={()=>setFruit("Lichi")}
        variant="contained" fullWidth color="success">
            Lichi
        </Button>
        </Grid>
        <Grid item xs={2}>
        <Button 
        onClick={()=>setFruit("Lichi")}
        variant="contained" fullWidth color="success">
            Lichi
        </Button>
        </Grid>
        <Grid item xs={2}>
        <Button 
        onClick={()=>setFruit("Lichi")}
        variant="contained" fullWidth color="success">
            Lichi
        </Button>
        </Grid>
        <Grid item xs={2}>
        <Button 
        onClick={()=>setFruit("Lichi")}
        variant="contained" fullWidth color="success">
            Lichi
        </Button>
        </Grid>
        <Grid item xs={2}>
        <Button 
        onClick={()=>setFruit("Lichi")}
        variant="contained" fullWidth color="success">
            Lichi
        </Button>
        </Grid>
      </Grid>
    </div>
  );
};
