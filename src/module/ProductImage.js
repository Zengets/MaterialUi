/**
 * Created by kurosaki on 2018/8/23.
 */
import React,{Component} from 'react'

class ProductImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showImage:false
        }
    }
    render() {
        const imageSrc = this.props.showImage && this.state.showImage ? this.props.imageSrc : this.props.loadImage;
        return (
            <div className="product-image" ref="image">
                <img src={imageSrc} />
            </div>
        )
    }
    updatePosition() {
        const el = this.refs.image;
        this.props.updateImagePosition(el.offsetTop,el.offsetHeight)
    }
    componentDidUpdate(prevProps) {
        if(!this.props.showImage && prevProps.viewport) {
            this.updatePosition()
        }else {
            if(!this.state.showImage) this.loadImage();
        }
    }
    loadImage() {
        const img = new Image()
        img.onload = () => {
            this.setState({showImage: true})
        }
        img.src = this.props.imageSrc
    }

}

ProductImage.defaultProps = {
    showImage: false,
    loadImage: './assets/images/load.gif'
}

export default ProductImage;