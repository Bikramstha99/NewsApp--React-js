import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
   
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
          <div className="card" style={{ width: '18rem' }}>
        <img src={imageUrl?imageUrl:"https://cdn.vox-cdn.com/thumbor/5hOIBDCuxlh1MnIDzu_CsObw1h4=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/25331615/VST_0311_Site_Post.jpg"} className="card-img-top" alt=".."/>
            <div className="card-body">
                <h5 className="card-title">Top news {title}...</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-primary">Read More</a>
        </div>
     </div>
      </div>
    )
  }
}

export default NewsItem
