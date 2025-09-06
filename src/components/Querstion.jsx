"use client"
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { questionData } from "@/utils/Data";

export default function Question() {
  return (
  
    <div className="p-28 space-y-10  bg-[url(/faq_bg.png)]  w-full bg-right-bottom bg-auto bg-no-repeat ">


      <div>
        <div className="text-center text-black max-w-[1200px] mt-6">
          <span className="text-2xl font-semibold leading-6 text-blue-600">
            Have Questions?
          </span>
          <h1 className=" text-[40px] font-semibold leading-11 py-2.5">
            Don't worry we are{" "}
            <span className="text-red-500">here to Help You</span>
          </h1>
        </div>

      </div>

      {questionData.map((ques)=>(
          <div key={ques.id} className="space-y-7 bg-white ">
        <Accordion sx={{padding:"10px", transitionDelay:"0.5s"}} defaultExpanded={ques.id === 1}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              sx={{ fontSize: "20px", fontWeight: 600, transition: "color 0.2s",
        "&:hover": { color: "#F10E28" }}}component="span">{ques.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: "16px"  }}>{ques.ans}</AccordionDetails>
        </Accordion>
          </div>
        ))}
    
    </div>
  );
}
