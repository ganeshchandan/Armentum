import React from 'react';

export default class HeaderTab extends React.Component {
    
    onClickTab(value){
        this.props.updateSelectedHeaderTab(value);
    }
    
    generareTabs(){
        var self =this,
            tabHeader = this.props.tabHeader,
            selectedHeaderTab = this.props.selectedHeaderTab,
            generatedTabs = tabHeader.map(function(tab,index){
                var style={width : tab.width},
                    classNameSelceted = selectedHeaderTab === tab.value ? "selected" : "";
                return <li style={style} key={index} className={classNameSelceted} onClick={self.onClickTab.bind(self,tab.value)}>{tab.name}</li>
            });
        return generatedTabs;
    }
    
    render() {
        return (
            <div className="tabHeader">
                <div className="tabHeaderContent">
                   <ul>
                    {this.generareTabs()}
                    </ul>
                </div>
            </div>
        );
    }
}