import React from "react";

export default class NetCreateList extends React.Component {
    state={
        imgArr : ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18"]
    } 
    render() {
        return (
            <div className="container-fluid p-4">{
                this.state.imgArr.map((ele) => {
                 <img alt={ele} src='../img/{ ele }.png'/>
                    console.log(`../img/${ele}.png`)
                })
                    
                }
            </div>
        );
    }
}