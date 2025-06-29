import React from "react"
import Faqs from "../components/Faqs"

export default function Vision(){
    return(
        <div className="vision">
            <h1>Why DayConnect?</h1>
            <div className="vision_content">
                <p className="po">As day scholars, staying connected with the wider university community can be a challenge. We often miss out on informal networks, late-night discussions, and mentorship opportunities that hostel life naturally provides. That’s why we built DayConnect—a platform designed to bridge this gap.
                    With DayConnect, students can easily find and connect with seniors and alumni who have expertise in specific domains—whether it’s for academic support, project guidance, career mentorship, or general advice. It’s a user-friendly directory built to empower day scholars with the same access to knowledge-sharing and community support that on-campus students enjoy. DayConnect helps you learn, grow, and succeed—without needing to be there 24/7.</p>
                <img src={require("../images/mentorship.png")} alt=""/>
            </div>
            <div className="vision_content" id="vision_content2">
                <img src={require("../images/mentor2.png")} alt=""/>
                <p > By simply searching for a particular domain or skill, students can find a curated list of experts—seniors, alumni, and peers—along with their contact information, making it easy to reach out and get the guidance they need.
                    We believe DayConnect has the potential to transform how students and alumni interact and collaborate within our university. Many day scholars miss out on mentorship and society involvement simply because most activities begin after 6 PM, when they’ve already left campus.
                    DayConnect bridges that gap—empowering students to connect anytime, from anywhere. By creating a centralized, accessible platform for knowledge-sharing and support, we’re building a more cohesive, inclusive, and growth-oriented campus community.</p>
            </div>
            <Faqs />
        </div>
    )
}