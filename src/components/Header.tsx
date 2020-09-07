import React, { useState } from 'react';

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    const [userState, setUserState] = useState({ userName: "", tag: "" });

    // setSideBarState({ sideBarClass: props.sideBarClass }) Kwesi Dadson
    return (
        <React.Fragment>
            <header className="masthead d-flex">
                <div className="container text-center my-auto">
                    <div className="landing-info rounded">
                        <h1 className="mb-1">{props.userName}</h1>
                        <h3 className="mb-5">
                            <em>{props.tag}</em>
                        </h3>
                    </div>
                </div>
                <div className="overlay"></div>
            </header>
        </React.Fragment>
    );
}

export default Header;