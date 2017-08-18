import React from 'react';

export default class FooterComponent extends React.Component {
        
    render() {
        return (
            <div className="footerComponent">
                <div className="footerContent">
                    <div className="footerTopDiv">
                        <div className="mapDiv">
                            <img src={require("../../../images/Blog_Map.jpg")}/>
        `                   <div className="followUS">
                                <span> FOLLOW US</span>
                                <div className="imageCircle"><img src={require("../../../images/facebook_Blk_icon.png")}/></div>
                                <div className="imageCircle"><img src={require("../../../images/Twitter_Blk_icon.png")}/></div>
                                <div className="imageCircle"><img src={require("../../../images/Linkedin_Blk_icon.png")}/></div>
                                <div className="imageCircle"><img src={require("../../../images/Youtube_Blk_icon.png")}/></div>
                            </div>
                        </div>
                        <div className="QuickLinks">
                            <h3>QUICK LINKS</h3>
                            <ul>
                                <li>Existing Members? Login</li>
                                <li>Blogs</li>
                                <li>Webinars</li>
                                <li>Videos</li>
                                <li>eBooks</li>
                                <li>Customer Service</li>
                            </ul>
                        </div>
                        <div className="downloadFreeBook">
                            <h3>DOWNLOAD FREE EBOOK</h3>
                            <div className="borderBottomNone inputBox"><img src={require("../../../images/User_icon.png")}/>
                            <input type="text" /></div>
                            <div className="inputBox"><img src={require("../../../images/Mail_icon.png")}/>
                            <input type="text" /></div>
                            <button className="downloadBook">DOWNLOAD BOOK</button>
                        </div>
                    </div>
                    2017 C All Rights Reserved
                </div>
            </div>
        );
    }
}