import React from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';

import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/Movielist';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
    return (
        <div>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>
            </div>

            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>
            </div>

            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV Shows</h2>
                        <Link to='/tv'>
                            <OutlineButton className='small'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>
            </div>

            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV Shows</h2>
                        <Link to='/tv'>
                            <OutlineButton className='small'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>
            </div>
        </div>
    )
}

export default Home
