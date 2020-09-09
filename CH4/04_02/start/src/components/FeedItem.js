import React from 'react';

const FeedItem = (props) => {
  return (
    <div className="row marketing">
      <div className="col-lg-12">
          <a href={props.feed.link}>
            <h4>{props.feed.title}</h4>
          </a>
          <p>{props.feed.description}</p>
      </div>
    </div>
  );
}

export default FeedItem; 
