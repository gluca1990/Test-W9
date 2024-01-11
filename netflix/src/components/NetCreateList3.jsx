import React from "react";
import { Row } from 'react-bootstrap';

export default class NetCreateList extends React.Component {
    /* state={url: `http://www.omdbapi.com/?apikey=33fd0420&s=${this.props.key}`} */
    state={url: `http://www.omdbapi.com/?apikey=33fd0420&s=Avengers`}
    componentDidMount() {
        fetch((this.state.url))
        .then(response => response.json())
        .then(json => this.setState({data: json}))
        .catch(err => console.log(err))
    };
    
        render() {
        return (
            console.dir(this.props),
            this.state.data&&( <>
            <Row>
                <img className="img-fluid col-md-3 col-xs-6 col-lg-2 p-2" src={this.state.data.Search[0].Poster} alt=""/>
                <img className="img-fluid col-md-3 col-xs-6 col-lg-2 p-2" src={this.state.data.Search[1].Poster} alt=""/>
                <img className="img-fluid col-md-3 col-xs-6 col-lg-2 p-2" src={this.state.data.Search[2].Poster} alt=""/>
                <img className="img-fluid col-md-3 col-xs-6 col-lg-2 p-2" src={this.state.data.Search[3].Poster} alt=""/>
                <img className="img-fluid col-md-3 col-xs-6 col-lg-2 p-2" src={this.state.data.Search[4].Poster} alt=""/>
                <img className="img-fluid col-md-3 col-xs-6 col-lg-2 p-2" src={this.state.data.Search[5].Poster} alt=""/>
            </Row>
            
            </>)
            
            
            
            
        )}}
/*     render() {
        return /* 
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */
