import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from '../loading/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
 
  
  constructor(){
    super();

    this.state={
      articles:[],
      loading:false,
      page:1,
      totalResults:0

    }
  }

   casechange=()=>{
    let name=this.props.category;

    return name.charAt(0).toUpperCase()+name.substr(1);
  }

  componentDidMount=async()=>{
    this.props.setprogress(10)
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3935e81021114fd5ae8cfc12ff589739&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`

  let data=await fetch(url);
    
  let parsedata=await data.json()
 
  this.setState({
    articles:parsedata.articles,
    totalResults:parsedata.totalResults,
    loading:false,
   
  })
  this.props.setprogress(100)
  }

//    prevpage=async()=>{
//     console.log('deepak')
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3935e81021114fd5ae8cfc12ff589739&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
//     this.setState({loading:true})
//   let data=await fetch(url);
    
//   let parsedata=await data.json()
//   this.setState({
//     page:this.state.page-1,
//     articles:parsedata.articles,
//     loading:false
//   })
//   }
//    nextpage=async()=>{
//     console.log('deepak')
//     if(this.state.page +1 > Math.ceil(this.state.totalartical/this.props.pagesize)){

//     }else{
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3935e81021114fd5ae8cfc12ff589739&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
//     this.setState({loading:true})
//   let data=await fetch(url);
    
//   let parsedata=await data.json()
//   this.setState({
//     page:this.state.page+1,
//     articles:parsedata.articles,
//     loading:false
//   })
//   }
// }

fetchMoreData = async() => {
  this.setState({page:this.state.page+1})
  
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3935e81021114fd5ae8cfc12ff589739&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`

  let data=await fetch(url);
  let parsedata=await data.json()
  // console.log(parsedata)
  this.setState({
    articles:this.state.articles.concat(parsedata.articles),
    totalartical:parsedata.totalResults,
    loading:false
  })
}

  render() {
    return (
      <div>
       
        <h2 style={{textAlign:'center', padding:'10px 0'}}>{(`News Monkey-${this.casechange()} News`)}</h2>
        {this.state.loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalartical}
          loader={<h4><Spinner/></h4>}
        >
           <div className="container">
        <div className="row" >
          {this.state.articles.map((element)=>{
              
         return <div className="col-md-4" key={element.url} >
        <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage?element.urlToImage:'https://static.toiimg.com/thumb/msid-99085699,width-1070,height-580,imgsize-26980,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'} newsurl={element.url} author={element.author} name={element.name}/>
          </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.prevpage}>	&#8592; Prev</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalartical/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.nextpage}>Next &#8594;</button>

        </div> */}
       </div>
      
    )
  }
}
