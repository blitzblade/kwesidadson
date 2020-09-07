import React, { useState } from 'react';

interface IFooter {

}

const Footer: React.FC = () => {

    const [userState, setUserState] = useState({ userName: "", tag: "" });

    // setSideBarState({ sideBarClass: props.sideBarClass }) Kwesi Dadson
    return (
        <React.Fragment>
            <footer className="footer text-center">
                <div className="container">
                    <ul className="list-inline mb-5">
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href="#!">
                                <i className="icon-social-facebook"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href="#!">
                                <i className="icon-social-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white" href="#!">
                                <i className="icon-social-github"></i>
                            </a>
                        </li>
                    </ul>
                    <p className="text-muted small mb-0">Copyright &copy; Your Website 2020</p>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;