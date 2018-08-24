/**
 * Created by kurosaki on 2018/8/23.
 */
import React,{Component} from 'react'
import ProductImage from './ProductImage'
import Typography from '@material-ui/core/Typography';

class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.updateImagePosition = this.updateImagePosition.bind(this)
        this.setShowImage = this.setShowImage.bind(this)
        this.state = {
            viewport: {
                showImage: false
            }
        }
    }
    render() {
        return (
                <div class="diycontainer">
                    <Typography variant="body2">{this.props.title}</Typography>
                    <ProductImage
                        showImage={this.state.showImage}
                        imageSrc={this.props.image}
                        viewport={this.props.viewport}
                        updateImagePosition={this.updateImagePosition}
                    />
                </div>
        )
    }
    updateImagePosition(top,height) {
        if(this.state.image) {
            return;
        }
        const {viewTop,viewBottom} = this.props.viewport;
        const imageScope = top + height;

        if(imageScope >= viewTop && imageScope <= viewBottom) {
            this.setShowImage(true)
        }
    }
    setShowImage(flag) {
        this.setState({
            showImage: !!flag
        })
    }
    componentWillMount() {
        if(this.props.showImage) {
            this.setShowImage(true)
        }
    }
}

ProductItem.defauleProps = {
    title: '',
    image: '',
    showImage: false
}

export default ProductItem