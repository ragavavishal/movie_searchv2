import React, { Component } from 'react'

export default class ShowMovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
             click : false
        }
        this.onimgClick = this.onimgClick.bind(this)
    }

    onimgClick = () => {
        console.log(this.state.click)
        this.setState({
            click : !this.state.click
        })
        console.log(this.state.click)
    }
    
    render() {
        // console.log(this.props.movieDet.Title)








        
        // console.log(this.props.movieDet.Poster)
        
        const a = { pic_url : this.props.movieDet.Poster}
        console.log(a.pic_url)
        return (
            <div className="MovieDetails">

                <div className="poster">               
                <img onClick={this.onimgClick} className="image" src={a.pic_url} alt="poster" />
                </div>
                {this.state.click &&
                <div className="Details">
                <ul>
                    <li><b>Title : </b><i>{this.props.movieDet.Title}</i></li>
                    <li><b>Year : </b><i>{this.props.movieDet.Year}</i></li>
                    <li><b>Genre : </b><i>{this.props.movieDet.Genre}</i></li>
                    <li><b>IMDB: </b><i>{this.props.movieDet.imdbRating}</i></li>
                    <li><b>Plot : </b><i>{this.props.movieDet.Plot}</i></li>
                </ul>
                </div>
                }
            </div>
        )
    }
}
