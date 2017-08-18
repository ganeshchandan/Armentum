import React from 'react';
import LinkHeader from './LinkHeader';
import HeaderTab from './HeaderTab';

export default class HeaderComponent extends React.Component {

  render() {
    return (
       	<header className="headerComponent">
            <div className="topHeader">
            </div>
            <LinkHeader linkHeader = {this.props.linkHeader}
                        selectedLink = {this.props.selectedLink}
                        updateSelectedLink ={this.props.updateSelectedLink}/>
            <HeaderTab tabHeader={this.props.tabHeader} selectedHeaderTab={this.props.selectedHeaderTab} updateSelectedHeaderTab={this.props.updateSelectedHeaderTab}/>
        </header>
    );
  }
}