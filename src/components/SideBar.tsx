import React, { useState } from 'react';

const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => {

    const [sideBarState, setSideBarState] = useState({ sideBarClass: "" });

    // setSideBarState({ sideBarClass: props.sideBarClass })
    return (
        <React.Fragment>
            <nav id="sidebar-wrapper" className={props.sideBarClass}>
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a className="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#page-top">Home</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#services">Services</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default SideBar;