import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ImagBox extends Component {
    constructor(props){
        super(props);
        this.state = {imagesCollection:''};
    }
    render(){
        const { value, onIncrement, onDecrement } = this.props
return(
    <div>
    <div className="col-md-3 col-sm-6 graphics ads">
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
                obj
            ]};
    }
        eachImages(item,i){
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
            const { value, onIncrement, onDecrement } = this.props
        return(
            <div>
                <div onClick={onIncrement} >yesss {value}</div>
                {this.state.images.map (this.eachImages)}
            </div>
        );
        }

}
ImagBoxRender.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
export default ImagBoxRender;