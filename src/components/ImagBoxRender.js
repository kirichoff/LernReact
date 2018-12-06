import React, { Component } from 'react';
import {connect} from 'react-redux';
class ImagBox extends Component {
    constructor(props){
        super(props);
    }
    render(){
return(
    <div>
    <div className="col-md-2 col-sm-2 graphics ads">
        <a href="single-project.html" className="portfolio_item">
        <img src={this.props.imgway} alt="image" className="img-responsive"/>
         <div className="portfolio_item_hover">
                <div className="portfolio-border clearfix">
                   <div className="item_info">
                     <span>{this.props.main_text}</span>
                     <em>{this.props.button_text}</em>
                </div>
            </div>
        </div>
    </a>
</div>
    </div>
        );
    }
}
class ImagBoxRender extends  Component {
    constructor(props){
        super(props);
        var obj = {img_src:'./img/icon.png', main_text: 'Mobile devices', button_text: 'Graphics / Ads'}
        this.state = {images: [
               obj,
                obj,
                obj,
                obj,
                obj
                ,obj

            ]};
    }
        eachImages(item,i){
        //console.log(this.props.ls)
           return(
               <ImagBox
                   key = {i}
                   index = {i}
                   imgway = {item.img_src}
                   main_text = {item.main_text}
                   button_text = {item.button_text}
               />
           )
            }

        render(){
        var i = 0;
        return(
            <div>
              <div>
                  {this.props.ls.todos.map(ls => { i++; return <ImagBox
                           key ={i}
                          imgway={ls.img_src}
                          main_text={ls.main_text}
                          button_text={ls.button_text}
                      />;
                  })}
              </div>
            </div>
        );
        }

}

function  mapStateToProps  (state){
    return( {
        ls: state
    })
}

export default connect(mapStateToProps) (ImagBoxRender);