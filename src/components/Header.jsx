import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../src/utils/theme-toggle.js";
import { onClick } from '../../src/utils/theme-toggle.js';
import "../../src/utils/toggle-theme.scss";
import { HOME_PATH, PROJECT_PATH } from '../constants/api';

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
                    <li>
                        <button
                            className="theme-toggle"
                            id="theme-toggle"
                            title="Toggles light & dark"
                            aria-label="auto"
                            aria-live="polite"
                            onClick={ onClick }
                        >
                            <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                                <mask className="moon" id="moon-mask">
                                    <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
                                    <circle cx="24" cy="10" r="6" fill="black"></circle>
                                </mask>
                                <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"></circle>
                                <g className="sun-beams" stroke="currentColor">
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </g>
                            </svg>
                        </button>
                    </li>
                    <li><Link className='link' to={ PROJECT_PATH }>Projects</Link></li>
                </ul>
            </div>
        </header>
    )
}
