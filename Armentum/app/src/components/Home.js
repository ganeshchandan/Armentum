import React from 'react';
import HeaderComponent from './Header/HeaderComponent';
import connect from 'redux-connect-decorator'
import ContentComponent from './Content/ContentComponent';
import FooterComponent from './Footer/FooterComponent';
import {upadteTabSelection,upadteLinkSelection} from '../action/UserAction';
 @connect((state) =>{
     return {
         tabHeader : state.tabHeader,
         linkHeader : state.linkHeader,
         rightSideContent : state.rightSideContent,
         leftPanelContent : state.leftPanelContent,
         selectedHeaderTab : state.selectedHeaderTab,
         selectedLink : state.selectedLink
     }
 })
export default class Home extends React.Component {

    constructor(){
        super();
    }

    updateSelectedHeaderTab(value){
    	this.props.dispatch(upadteTabSelection(value));
    }
    
    updateSelectedLink(value){
        this.props.dispatch(upadteLinkSelection(value));
    }
 
    render() {
        return (
          <div className='main'>
            <HeaderComponent    tabHeader={this.props.tabHeader} 
                                selectedHeaderTab={this.props.selectedHeaderTab} 
                                updateSelectedHeaderTab={this.updateSelectedHeaderTab.bind(this)}
                                linkHeader = {this.props.linkHeader}
                                selectedLink = {this.props.selectedLink}
                                updateSelectedLink ={this.updateSelectedLink.bind(this)}/>
            <ContentComponent selectedLink={this.props.selectedLink} rightSideContent ={this.props.rightSideContent} leftPanelContent ={this.props.leftPanelContent}/>
            <FooterComponent />
          </div>
        );
    }
}