import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { PROJECT_DETAIL_PATH } from '../../constants/config';

export default function Projects() {
    return (
        <section className="projects section">
            <h2 className='heading --h2 dot'>project</h2>
            <div className="container">
                <div className='card'>
                    <figure className='card__img '>
                        <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                            slug: "p-1"
                        }) }>
                            <div className="box-photo">
                                <p></p>
                                <img src="/img/pokemon-project.png" alt="pokemon" />
                            </div>
                        </Link>
                    </figure>
                    <div className='card__content'>
                        <h3 className='heading --h3'>
                            <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                                slug: "p-1"
                            }) }>Pokemon Project</Link>
                        </h3>
                        <div className="card__content--tag">
                            <ul >
                                <li className='tag-item --react'> <span>react</span></li>
                                <li className='tag-item --html'> <span>html</span></li>
                                <li className='tag-item --scss'> <span>scss</span></li>
                                <li className='tag-item --js'> <span>js</span></li>
                            </ul>
                        </div>
                        <p>Website about pokemon, you can search and view information about your favorite pokemon. Data pokemon is got from <a href="https://pokeapi.co/" target="_blank">https://pokeapi.co/</a></p>
                    </div>
                </div>
                <div className='card'>
                    <figure className='card__img'>
                        <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                            slug: "p-2"
                        }) }>
                            <div className="box-photo">
                                <img src="/img/retheater-project.png" alt="retheater" />
                            </div>
                        </Link>
                    </figure>
                    <div className='card__content'>
                        <h3 className='heading --h3'>
                            <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                                slug: "p-2"
                            }) }>Retheater Project</Link>
                        </h3>
                        <div className="card__content--tag">
                            <ul >
                                <li className='tag-item --react'> <span>react</span></li>
                                <li className='tag-item --html'> <span>html</span></li>
                                <li className='tag-item --scss'> <span>scss</span></li>
                                <li className='tag-item --js'> <span>js</span></li>
                            </ul>
                        </div>
                        <p>A movie website that you can watch Tv series and Movies .It's always get new ,popular and hot trend movies , tv series .Then, you also preview description , trailer , author, cast , score about movies and tv series from the website .Data movies and tv series is got from <a href="https://www.themoviedb.org/">https://www.themoviedb.org/</a> </p>
                    </div>
                </div>
                <div className='card'>
                    <figure className='card__img'>
                        <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                            slug: "p-3"
                        }) }>
                            <div className="box-photo">
                                <img src="/img/shopper-project.png" alt="shopper" />
                            </div>
                        </Link>
                    </figure>
                    <div className='card__content'>
                        <h3 className='heading --h3'>
                            <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                                slug: "p-3"
                            }) }>Shopper Project</Link>
                        </h3>
                        <div className="card__content--tag">
                            <ul >
                                <li className='tag-item --react'> <span>react</span></li>
                                <li className='tag-item --html'> <span>html</span></li>
                                <li className='tag-item --scss'> <span>scss</span></li>
                                <li className='tag-item --js'> <span>js</span></li>
                            </ul>
                        </div>
                        <p>Shopper website provide product that you need and free shipping worldwide.</p>
                    </div>
                </div>
                <div className='card'>
                    <figure className='card__img'>
                        <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                            slug: "p-4"
                        }) }>
                            <div className="box-photo">
                                <img src="/public/img/todo-project.png" alt="shopper" />
                            </div>
                        </Link>
                    </figure>
                    <div className='card__content'>
                        <h3 className='heading --h3'>
                            <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                                slug: "p-4"
                            }) }>Todos Project</Link>
                        </h3>
                        <div className="card__content--tag">
                            <ul >
                                <li className='tag-item --react'> <span>react</span></li>
                                <li className='tag-item --html'> <span>html</span></li>
                                <li className='tag-item --scss'> <span>scss</span></li>
                            </ul>
                        </div>
                        <p>Todos app is helping you to plan your work, your life,...</p>

                    </div>
                </div>
            </div >
        </section >

    );
}
