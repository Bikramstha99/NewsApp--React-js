import React, { Component } from 'react'

export class NewsItem extends Component {
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
      "urlToImage": null,
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
      "urlToImage": null,
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
  
  constructor(){
    super();
    console.log('Hello i am a constructor');
    this.state= {
      articles:this.articles,
      loading:false
    } 
  } 
  render() {
   
    let {title,description}=this.props;
    return (
      <div>
         <div className="card" style={{width: "18rem;"}}>
        <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Top news {title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Read More</a>
        </div>
     </div>
      </div>
    )
  }
}

export default NewsItem
