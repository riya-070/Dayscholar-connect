import React from "react"
import DevCards from "../components/DevCards"

export default function ReachOut(){

    

    return(
        <div className="reachout">
        <h1>Meet The Developer</h1>
        <div className="dev_main">
            <DevCards name="Riya Garg" skill="Full-Stack Developer" descp=" As a full-stack developer, and technical writer, Riya brings strong expertise in the MERN Stack . She's well-versed in various frontend frameworks and passionate about simplifying complex technical topics." linkedin="https://www.linkedin.com/in/riya-garg070/" github="https://github.com/riya-070" />
            
            {/* <DevCards name="Divya Bajaj" skill="AI/ML & Backend Developer" descp="an AI/ML developer experienced in NLP, backend (Node & FastAPI), data cleaning, sentiment analysis, neural networks, data science, Python, C++, DSA, and data analysis. Driven by a relentless pursuit of innovation, Divya Bajaj consistently delivers impactful results, pushing boundaries in the field of AI/ML and leveraging their diverse skill set for cutting-edge solutions." linkedin="https://www.linkedin.com/in/di/" github="https://github.com/kli"/> */}
        </div>
        </div> 
    )
}