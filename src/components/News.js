import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    
    return (
      <div>
        <div className='container'>
            <h2>Top news headlines</h2>
            <div className="row">
                <div  className='col-md-4'>
                <NewsItem title='bikram' description='don'></NewsItem>
                </div>
                <div  className='col-md-4'>
                <NewsItem title='bikram' description='don'></NewsItem>
                </div>
                <div  className='col-md-4   '>
                <NewsItem title='bikram' description='don'></NewsItem>
                </div>
            </div>
      </div>
     </div>
    )
  }
}

export default News
