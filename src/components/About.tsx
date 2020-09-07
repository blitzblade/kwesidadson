import React, { useState } from 'react';
import AboutItem from '../components/AboutItem';
import '../assets/css/About.css';
interface IAbout {
    aboutRows: Array<AboutRow>;
    toggleAbout: (index: number) => void;
}

const About: React.FC<IAbout> = (props: IAbout) => {

    const [userState, setUserState] = useState({ userName: "", tag: "" });

    // setSideBarState({ sideBarClass: props.sideBarClass }) Kwesi Dadson
    return (
        <React.Fragment>
            <div className="">
                <div className="about">
                    {
                        props.aboutRows.map(
                            (row, i) => (
                                <div>
                                    <AboutItem aboutRow={row} toggleAbout={props.toggleAbout} />
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;