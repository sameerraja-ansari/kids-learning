import React,{useState} from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const Animal = () => {
    const [animal,setAnimal]=useState("Monkey");

    return (
    <div className="ssub">
      <h1>Animal Home</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent className="txt">{animal}</CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" 
          onClick={()=>setAnimal("CAT")}
          fullWidth color="success">
            CAT
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" 
          onClick={()=>setAnimal("TIGER")}
          fullWidth color="warning">
            TIGER
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" 
          onClick={()=>setAnimal("ZEBRA")}
          fullWidth color="error">
            ZEBRA
          </Button>
        </Grid>
        <Grid item xs={3}>
            <Button variant="contained" 
            onClick={()=>setAnimal("GOAT")}
            fullWidth color="warning">GOAT</Button>
        </Grid>
        
        <Grid item xs={3}>
            <Button variant="contained"
            onClick={()=>setAnimal("CUB")}
            fullWidth color="warning">CUB</Button>
        </Grid>
        <Grid item xs={3}>
            <Button variant="contained" 
            onClick={()=>setAnimal("ELEPHANT")}
            fullWidth color="warning">ELEPHANT</Button>
        </Grid>
        <Grid item xs={3}>
            <Button variant="contained" 
            onClick={()=>setAnimal("CHETAH")}
            fullWidth color="warning">CHETAH</Button>
        </Grid>
      </Grid>
    </div>
  );
};
