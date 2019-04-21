import React, { Component } from 'react';

import ImageDetails from './imageDetails';

class CinemaMode extends Component {
    constructor() {
        super();
        this.state = {
            showDetails: false,
            hideRightChevon: false,
            landscape: false,
        }
        this.handleDetails = this.handleDetails.bind(this);
        this.handleNewImage = this.handleNewImage.bind(this);
    };

    handleDetails() {
        this.setState({
            showDetails: !this.state.showDetails, 
        })
    }

    handleNewImage(click, currentImage) {
        const { imageDetails } = this.props;

        if (click === 'right' && currentImage < imageDetails.length) {
            this.setState({
                image: currentImage + 1,
            });
        } else if (click === 'right' && currentImage === imageDetails.length) {
            this.setState({
                image: 1,
            });
        } else {
            this.setState({
                image: currentImage - 1,
            });
        }
    }

    render() {
        const { imageId, imageDetails, dismiss, imagePath } = this.props;
        const { showDetails } = this.state;
        const currentImage = parseInt(this.state.image) || imageId;
        const image = imagePath[currentImage]

        return (
            <React.Fragment>
                <div className='hide-bg'
                    style={{
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <div className="button-close" onClick={dismiss}></div>
                    <div style={{ position: 'relative' }}>
                        <img
                            style={{ height: '85vh' }} 
                            id={'cinemaImage' + imageId}
                            src={require(`../../images/optimized/${image}`)}
                        />
                        <div className="slide">
                            <div
                                className='left'
                                value={currentImage}
                                onClick={() => this.handleNewImage('left', currentImage)}
                            ></div>
                            <div
                                className='right'
                                value={imageId}
                                onClick={() => this.handleNewImage('right', currentImage)}
                            ></div>
                        </div>
                        <p style={{ position: 'absolute', left: 0, right: 0, color: '#3a3a3a', textAlign: 'center', marginTop: '10px' }}>{currentImage}</p>
                    </div>
                    {showDetails &&
                        <ImageDetails 
                            imageDetails={imageDetails}
                            imageId={imageId}
                            handleDetails={this.handleDetails}
                        />
                    }
                </div>
            </React.Fragment>
        )
    }
 }
 export default CinemaMode;
