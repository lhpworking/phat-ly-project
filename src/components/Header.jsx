import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_PATH, HOME_PATH, PROJECT_PATH } from '../constants/api';

export default function Header() {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {


        document.addEventListener('scroll', (e) => {
            const scrollY = window.scrollY,
                headerHeight = document.querySelector("header").scrollTop
            // console.log(scrollY);
            if (scrollY > headerHeight) {
                setScroll(1)
            } else {
                setScroll(0)
            }

        })
    }, [])
    return (
        <header className={ classNames(scroll ? 'active' : '') }>
            <div className="container-fluid">
                <Link className={ classNames('logo', scroll ? 'wavy' : '') } to={ HOME_PATH }> Phat Ly</Link>
                <ul>
                    <li><Link className='link' to={ PROJECT_PATH }>Projects</Link></li>
                    <li><Link className='link' to={ CONTACT_PATH }>Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}
