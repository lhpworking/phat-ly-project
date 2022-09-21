import React, { useEffect } from 'react'

import "./project.scss"

export function ProjectDetail1() {
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <main>
            <section className='project section'>
                <div className="container">
                    <figure className='project__img'>
                        <img src="/img/pokemon-project.png" alt="pokemon-project" />
                        <figcaption className='heading --h1'>
                            Pokemon Project
                        </figcaption>
                        <a href="https://pokemon-project-kxytac3ix-lhngpht.vercel.app/" target="_blank">
                            visit
                        </a>
                    </figure>
                    <div className="project__content">
                        <div className="des">
                            <h3 className='heading --h3 dot'>Overview</h3>
                            <p>Website about pokemon, you can search and view information about your favorite pokemon. Data pokemon is got from <a href="https://pokeapi.co/" target="_blank">https://pokeapi.co/</a></p>
                        </div>
                        <div className="tech">
                            <h3 className='heading --h3  dot'> Technologies</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS/SCSS</li>
                                <li>JAVASCRIPT/REACT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export function ProjectDetail2() {
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <main>
            <section className='project section'>
                <div className="container">
                    <figure className='project__img'>
                        <img src="/img/retheater-project.png" alt="pokemon-project" />
                        <figcaption className='heading --h1'>
                            Retheater Project
                        </figcaption>
                        <a href="https://retheater.vercel.app/" target="_blank">
                            visit
                        </a>
                    </figure>
                    <div className="project__content">
                        <div className="des">
                            <h3 className='heading --h3 dot'>Overview</h3>
                            <p>A movie website that you can watch Tv series and Movies .It's always get new ,popular and hot trend movies , tv series .Then, you also preview description , trailer , author, cast , score about movies and tv series from the website .Data movies and tv series is got from <a href="https://www.themoviedb.org/">https://www.themoviedb.org/</a>   </p>
                        </div>
                        <div className="tech">
                            <h3 className='heading --h3  dot'> Technologies</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS/SCSS</li>
                                <li>JAVASCRIPT/REACT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export function ProjectDetail3() {
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <main>
            <section className='project section'>
                <div className="container">
                    <figure className='project__img'>
                        <img src="/img/shopper-project.png" alt="shopper-project" />
                        <figcaption className='heading --h1'>
                            Shopper Project
                        </figcaption>
                        <a href="https://shopper-project.vercel.app/" target="_blank">
                            visit
                        </a>
                    </figure>
                    <div className="project__content">
                        <div className="des">
                            <h3 className='heading --h3 dot'>Overview</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat quo voluptatum fugit nam optio eligendi repellat modi mollitia, aut omnis hic rem consequatur cumque similique enim blanditiis sed culpa.</p>
                        </div>
                        <div className="tech">
                            <h3 className='heading --h3  dot'> Technologies</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS/SCSS</li>
                                <li>JAVASCRIPT/REACT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

