import React from 'react';

export default class LinkHeader extends React.Component {
    
    generareTabs(){
        var self =this,
            linkHeader = this.props.linkHeader,
            selectedLink = this.props.selectedLink,
            generatedTabs = linkHeader.map(function(tab,index){
                var classNameSelceted = selectedLink === tab.value ? "selected" : "";
                return <li className={classNameSelceted} key={index} onClick={self.onClickTab.bind(self,tab.value)}>{tab.name}</li>
            });
        return generatedTabs;
    }
    
    onClickTab(value){
        this.props.updateSelectedLink(value);
    }

    render() {
        return (
            <div className="hyperLinkHeader">
                    <div className="hyperLinkContent">
                        <ul>
                            {this.generareTabs()}
                        </ul>
                        <button className="claimReprotDiv">CLAIM FREE REPORT</button>
                        <button className="loginButton">LOGIN</button>
                    </div>
                </div>
        );
    }
}