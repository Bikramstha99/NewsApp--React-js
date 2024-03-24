import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() +string.slice(1);
  }
  articles=[
    {
      "source": {
      "id": null,
      "name": "Yahoo Entertainment"
      },
      "author": "Kris Holt",
      "title": "Apple will allow iOS apps to be distributed on websites in the EU",
      "description": "Days after Apple started allowing iOS users in the EU to use third-party app stores\r\n, the company has announced more changes related to how developers can distribute their apps. Most significantly, those who meet certain criteria will be able to let users do…",
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_477c437f-9e45-4982-a437-c1217bfc5092",
      "urlToImage":  "https://images.macrumors.com/t/2MJuux6et0IutAiahCwjAA7_4aA=/1920x/article-new/2024/03/belgium-apple-maps-cycling-routes.jpg",
      "publishedAt": "2024-03-12T14:15:26Z",
      "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Yahoo Entertainment"
      },
      "author": "Sarah Fielding",
      "title": "You can try the IRS alternative to Turbo Tax in 12 states today",
      "description": "April is just around the corner, so if you're not stressed about filing taxes yet, it's likely coming any day now. Thanks to the lovely (read: horrible) tax lobby and the politicians who take their money, the headache taxes bring is as American as apple pie. …",
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_c0063584-15cd-472b-b945-5a3d3e0a5c60",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/402e001b5deacefd3190ea5ef0cadb0a.jpg",
      "publishedAt": "2024-03-12T12:57:57Z",
      "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
      },
      {
      "source": {
      "id": "the-verge",
      "name": "The Verge"
      },
      "author": "David Pierce",
      "title": "The 2024 Vergecast streaming draft",
      "description": "From TikTok and Instagram to Netflix and Hulu to Prime Video and Apple TV Plus, the Vergecast crew picks the best streaming services in 2024 — and looks ahead to 2025.",
      "url": "https://www.theverge.com/2024/3/12/24098343/best-streaming-services-2024-netflix-tiktok-max-disney-vergecast",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/5hOIBDCuxlh1MnIDzu_CsObw1h4=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/25331615/VST_0311_Site_Post.jpg",
      "publishedAt": "2024-03-12T12:56:57Z",
      "content": "The 2024 Vergecast streaming draft\r\nThe 2024 Vergecast streaming draft\r\n / What are the good streaming services? Why does Alex Cranz think Netflix is going to go away? What is Mubi, anyway? All the b… [+2616 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Gizmodo.com"
      },
      "author": "Thomas Germain",
      "title": "Doctors Are Using the Apple Vision Pro During Surgery",
      "description": "A medical team at Cromwell Hospital in London strapped on the $3,500 Apple Vision Pro during two spinal surgeries. Doctor’s are calling the device a “game-changing” tool, beefing up Apple’s claims that the headset has a future as a medical device.Read more...",
      "url": "https://gizmodo.com/doctors-are-using-the-apple-vision-pro-during-surgery-1851329884",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d51113d47d60aa8c1198e970216a5643.jpg",
      "publishedAt": "2024-03-12T21:50:00Z",
      "content": "A medical team at Cromwell Hospital in London strapped on the $3,500 Apple Vision Pro during two spinal surgeries. Doctors are calling the device a game-changing tool, beefing up Apples claims that t… [+2071 chars]"
      },
  ]
  constructor(props){
    super(props);
    console.log('Hello i am a constructor');
    this.state= {
      articles:this.articles,
      loading:false,
      page:1,
      totalResults:0
    }  
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-News`;
  } 
  

 
  async updateNews(){
    this.props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b979937f6ea34306b6a1b95cb7d1e7fe&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading :true});
    let data= await fetch(url);
    this.props.setProgress(30);
    let parseData= await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parseData.articles , 
      totalResults:parseData.totalResults,
      loading:false });  
      this.props.setProgress(100);
  }
  async componentDidMount(){
    this.updateNews();

  }

  handleNextClick=async()=>{
      this.setState({page:this.state.page+1});
      this.updateNews();
  }
  handlePreviousClick=async()=>{
      this.setState({page:this.state.page-1});
      this.updateNews();
  }
  fetchMoreData = async() => {
      this.setState({page:this.state.page+1
      });
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b979937f6ea34306b6a1b95cb7d1e7fe&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading :true});
    let data= await fetch(url);
    let parseData= await data.json();
    console.log(parseData);
    this.setState({ articles: this.state.articles.concat(parseData.articles) , 
      totalResults:parseData.totalResults,
      loading:false });  
  };
  render() {
    return (
      <div>
         <h1 className='text-center'>News -Top {this.capitalizeFirstLetter(this.props.category)} Headlines  </h1>
          {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
         <div className='container'>
            <div className="row">
            {this.state.articles.map((element)=>{
              return <div  className='col-md-4' key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):"" } description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://cdn.vox-cdn.com/thumbor/5hOIBDCuxlh1MnIDzu_CsObw1h4=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/25331615/VST_0311_Site_Post.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt}></NewsItem>
              </div>
            })}
            </div>
            </div>
            </InfiniteScroll>
            {/* <div className="container mt-2 d-flex justify-content-between ">
              <button disabled={this.state.page<=1} type='button' className='btn btn-dark me-2' onClick={this.handlePreviousClick}>&larr; Previous</button>
              <button disabled={this.state.page+1>Math.ceil(this.state.totalResults /20)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
      </div>

    )
  }
}

export default News
