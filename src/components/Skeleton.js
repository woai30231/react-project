import React from 'react';

const Skeleton = (props) => {
    return ( 
    <div className="skeleton-container">
        <p>{props.discription}</p>
        {/* 头部骨架 */}
        <div className="skeleton-header" style={{ height: 60, backgroundColor: '#f0f0f0' }} />
        
        {/* 内容骨架 */}
        <div className="skeleton-content">
          <div className="skeleton-title" style={{ height: 30, width: '50%', backgroundColor: '#f0f0f0', margin: '20px 0' }} />
          <div className="skeleton-text" style={{ height: 20, width: '80%', backgroundColor: '#f5f5f5', marginBottom: 10 }} />
          <div className="skeleton-text" style={{ height: 20, width: '60%', backgroundColor: '#f5f5f5', marginBottom: 10 }} />
          <div className="skeleton-text" style={{ height: 20, width: '90%', backgroundColor: '#f5f5f5' }} />
        </div>
      </div>
      )
}

export default Skeleton;