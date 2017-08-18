import React from 'react';

export default class RightContent extends React.Component {
    
    generatePopluarPosts(){
        var rightSideContent = this.props.rightSideContent,
            popluarPostsHtml = rightSideContent.map(function(post,index){
                return <div className="popularPostImage" key={index}>
                            <img src={post.image}/>
                            <div className="popluarPostHeader"><span>{post.header}</span></div>
                            <div className="popluarPostContent"><span>{post.content}</span></div>
                        </div>
            });
        return popluarPostsHtml;
    }
    
    render() {
        return (
           <div className="rightContent">
                <div className="popularPost">
                    <h1>Popular Posts</h1>
                    {this.generatePopluarPosts()}
                </div>
                <div className="tasks">
                    <h1>Tasks</h1>
                    <div className= "taksContent">
                        <span>Inestments</span>
                        <span>Finance</span>
                        <span>Tradings</span>
                        <span>Insurance</span>
                        <span>Webinars</span>
                        <span>Financial Planning</span>
                        <span>Mutual Funds</span>
                        <span>eBooks</span>
                        <span>Memberships</span>
                    </div>
                </div>
            </div>
        );
      }
}