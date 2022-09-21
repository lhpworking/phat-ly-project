import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { PROJECT_DETAIL_PATH } from '../../constants/api';

export default function Projects() {
    return (
        <section className="projects section">
            <h2 className='heading --h2 wavy dot'>project</h2>
            <div className="container">
                <div className='card'>
                    <figure className='card__img'>
                        <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                            slug: "p-1"
                        }) }>
                            <div className="box-photo">
                                <img src="/public/img/pokemon-project.png" alt="pokemon" />
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia hic dignissimos molestias enim ratione! Debitis aspernatur eius optio repudiandae rerum, sunt ducimus, nobis alias ut ipsum quia eum aliquid ea?</p>
                    </div>
                </div>
                <div className='card'>
                    <figure className='card__img'>
                        <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                            slug: "p-2"
                        }) }>
                            <div className="box-photo">
                                <img src="/public/img/retheater-project.png" alt="pokemon" />
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia hic dignissimos molestias enim ratione! Debitis aspernatur eius optio repudiandae rerum, sunt ducimus, nobis alias ut ipsum quia eum aliquid ea?</p>
                    </div>
                </div>
                <div className='card'>
                    <figure className='card__img'>
                        <Link to={ generatePath(PROJECT_DETAIL_PATH, {
                            slug: "p-3"
                        }) }>
                            <div className="box-photo">
                                <img src="/public/img/shopper-project.png" alt="pokemon" />
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia hic dignissimos molestias enim ratione! Debitis aspernatur eius optio repudiandae rerum, sunt ducimus, nobis alias ut ipsum quia eum aliquid ea?</p>
                    </div>
                </div>
            </div >
        </section >

    );
}
