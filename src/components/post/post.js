import React, { Component } from 'react';
import './post.css';
import img from '../../images/download.png';

class Post extends Component {
  render() {
    return (
      <div className="contain">
        <div className="col-md-1" />
        <div className="col-md-6 post-container">
          <div className="complete-post">
            <div className="post-header">
              <img className="post-img" src={img} />
              <div className="bio">
                Arslan Shakoor
                <span className="text-style-1">5 days ago</span>
              </div>
            </div>

            <div className="post-text">
              My bestfriends came to visit me, They looking amazing
            </div>
            <div className="post-footer">
              <span className="comments">4 comments</span>
              <span className="share">share</span>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="photo">
            <div className="content">
              <div className="exclusive-head"> Exlusive Content</div>
              <div className="exclusive-detail">
                {' '}
                Support Petra and her work to see{' '}
              </div>
              <div className="exclusive-detail"> content</div>
              <button className="exlusive-button">
                <div className="button-content">Support Petra</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
