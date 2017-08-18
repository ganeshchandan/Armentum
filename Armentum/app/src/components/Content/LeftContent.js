import React from 'react';

export default class LeftContent extends React.Component {
    
    generateInformation(){
        var leftPanelContent = this.props.leftPanelContent,
            informationHtml = leftPanelContent.map(function(info){
                return <div className="informationDiv">
                            <div className="headerDiv">
                                <h2 dangerouslySetInnerHTML={{ __html: info.header}}></h2>
                                <span className="labelClass">POSTED BY</span><span>{info.postedBy}</span>
                                <span className="labelClass">ON</span><span>{info.postedBy}</span>
                                <span className="labelClass">COMMENTS</span><span>(0)</span>
                            </div>
                            <div className="imageDiv">
                                <img src={info.image}/>                      
                            </div>
                            <div className="descriptionDiv">
                                <span className="descriptionSpan">{info.description}</span>
                                <span className="readMore">Read More</span>
                            </div>
                        </div>
            });
        return informationHtml;
    }
    
    render() {
        return (
            <div className="leftContent">
                {this.generateInformation()}
            </div>
        );
      }
}