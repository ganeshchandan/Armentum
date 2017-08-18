import React from 'react';
import RightContent from './RightContent';
import LeftContent from './LeftContent';

export default class ContentComponent extends React.Component {
  render() {
    return (
      <section className='contentSection'>
        <div className="contentSectionContent">
            <div className="conetentSectionHeader"><span className="pageLabel">HOME&nbsp;/</span><span className="subPageLabel">&nbsp;{this.props.selectedLink}</span></div>
            <div className="conetentSectionSection">
                <LeftContent leftPanelContent={this.props.leftPanelContent}/>
                <RightContent rightSideContent={this.props.rightSideContent}/>
            </div>
        </div>
      </section>
    );
  }
}