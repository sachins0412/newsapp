import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  articles = [
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera Staff",
      title: "Pakistanis slam ‘shameful’ cricket board video omitting Khan",
      description:
        "Cricket fans, experts denounce PCB’s attempt to omit Khan from video celebrating country’s cricket history.",
      url: "http://www.aljazeera.com/sports/2023/8/15/pakistanis-slam-shameful-cricket-board-video-omitting-khan",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/04/GettyImages-1245332.jpg?resize=1920%2C1440",
      publishedAt: "2023-08-15T13:51:34Z",
      content:
        "Pakistani cricket fans have slammed the countrys cricket board for omitting former captain and Prime Minister Imran Khan from a social media video celebrating the national teams successes since the c… [+4303 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = { articles: this.articles, loading: false };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Trending now</h2>
        <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div key={ele.url} className="col-md-4 mb-3 mt-2">
                <Newsitem
                  title={
                    ele.title.length > 35
                      ? ele.title.slice(0, 35) + "..."
                      : ele.title
                  }
                  description={
                    ele.description.length > 100
                      ? ele.description.slice(0, 100) + "..."
                      : ele.description
                  }
                  img_url={ele.urlToImage}
                  url={ele.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
