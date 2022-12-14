import React ,{useState} from "react";
import {Tabs , Tab} from "@mui/material"
import { Animal } from "./Animal";
import { Fruits } from "./Fruits";
import { AnimalPic } from "../Animalpic";

export const Home = () => {
  const [val,setval]=useState("animal");
  return (
    <div className="sub">
      <h1>Home</h1>
      <Tabs value={val} onChange={(e,value)=>setval(value)}>
        <Tab label="Animal" value="animal" />
        <Tab label="Fruits" value="fruits"/>
        <Tab label="Articles" value="articals" />
        <Tab label="Animal Gallary" value="animalpic"/>
        <Tab label="Fruits Gallary" value="fruitpic"/>
        <Tab label="Articles Gallary" value="articlepic" />
      </Tabs>
      {val === "animal" && <Animal/>}
      {val === "fruits" && <Fruits/>}
      {val === "animalpic" && <AnimalPic/>}


    </div>
  );
};
