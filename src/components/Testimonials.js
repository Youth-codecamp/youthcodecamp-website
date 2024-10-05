import React from "react";
import '../styles/testimonials.css';
import { Icon } from "@iconify/react/dist/iconify.js";
import profile1 from "../assets/gisele.png"; 
import profile2 from "../assets/caleb.jpg"; 
import profile3 from "../assets/chaste.jpg"; 


const Testimonials = () => {
    return (
        <section className="container">
            <div className="test-head">
                <div className="test-header">TESTIMONIALS</div>
                <div className="saying">
                    <div className="saying-hero">See What Others Have <br/>to Say About Us</div>
                </div>
            </div>
            <div className="test-body">
                {/* Testimonial 1 */}
                <div className="test-body-first">
                    <div className="test-text">
                        <div className="test-icon"><Icon style={{ fontSize: '45px' }} icon="raphael:quote" /></div>
                        <div>Youth Code Camp is an amazing platform for young programmers to learn and grow. I’m proud to work with Shyaka Chaste, the CEO, as his Vice President. Together, we’ve turned our ideas into something special, and it’s exciting to see students build great projects</div>
                    </div>
                    <Icon id="icon-message-vector-one" icon="carbon:triangle-down-solid" color="#F7F9FC" style={{ fontSize: "30px" }} />
                    <div className="test-who">
                        <div className="profile-pic"><img src={profile1} alt="Profile 1" /></div>
                        <div className="profile-details">
                            <div className="details-name">Akuzwe Gisele</div>
                            <div className="details-position">Vice President at YCC</div>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="test-body-second">
                    <div className="test-text-on">
                        <div className="test-icon"><Icon style={{ fontSize: '45px' }} icon="raphael:quote" /></div>
                        <div>Youth Code Camp has been an incredible experience for me. It’s a fantastic place where young programmers can learn new skills and collaborate on exciting projects. I’ve made great friends and feel more confident in my coding abilities thanks to this amazing community!</div>
                    </div>
                    <Icon id="icon-message-vector-two" icon="carbon:triangle-down-solid" color="#4EB8B9" style={{ fontSize: "30px" }} />
                    <div className="test-who">
                        <div className="profile-pic"><img src={profile2} alt="Profile 2" /></div>
                        <div className="profile-details">
                            <div className="details-name">Caleb Tola</div>
                            <div className="details-position">Club Member</div>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="test-body-third">
                    <div className="test-text">
                        <div className="test-icon"><Icon style={{ fontSize: '45px' }} icon="raphael:quote" /></div>
                        <div>Youth Code Camp helps young people learn to code. I am happy to lead this community and see everyone grow their skills. It is exciting to watch our members build projects and become more confident in coding. Together, we are making a better future!"</div>
                    </div>
                    <Icon id="icon-message-vector-three" icon="carbon:triangle-down-solid" color="#F7F9FC" style={{ fontSize: "30px" }} />
                    <div className="test-who">
                        <div className="profile-pic"><img src={profile3} alt="Profile 3" /></div>
                        <div className="profile-details">
                            <div className="details-name">Shyaka Chaste</div>
                            <div className="details-position">CEO at YCC</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;