import React from 'react'
import { ChromePicker } from 'react-color'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class ColorPiker extends React.Component {
    state = {
        displayColorPicker: false,
        color2: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({color2: color.rgb,color:color})
        this.state.color2 = color.rgb;
        this.state.color = color;
        var style={
            color: color.hex
        }

        //this.props.onChangeComplete(this.state.color);
        this.props.updat(style)
    };

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '35px',
                    height: '35px',
                    borderRadius: '40px',
                    borderWidth: '0px',
                    borderColor: 'green',
                    background: `rgba(${ this.state.color2.r }, ${ this.state.color2.g }, ${ this.state.color2.b }, ${ this.state.color2.a })`,
                },
                swatch: {
                    padding: '0px',
                    background: '#000000',
                    borderRadius: '30px',
                    borderWidth: '0px',
                    borderColor: 'green',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div>
                <div style={ styles.swatch } onClick={ this.handleClick }>
                    <div style={ styles.color } />
                </div>
                { this.state.displayColorPicker ? <div style={ styles.popover }>
                    <div style={ styles.cover } onClick={ this.handleClose }/>
                    <SketchPicker color={ this.state.color2 } onChange={ this.handleChange } />
                </div> : null }

            </div>
        )
    }
}


export default ColorPiker