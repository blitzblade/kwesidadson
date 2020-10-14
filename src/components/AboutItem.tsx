import React from 'react';

interface IAboutItem {
    aboutRow: AboutRow;
    toggleAbout: (index: number) => void;
}

const AboutItem: React.FC<IAboutItem> = (props: IAboutItem) => {
    return (
        <div key={props.aboutRow.id}
            className={"about-item " + props.aboutRow.status}
            onClick={() => props.toggleAbout(props.aboutRow.id)}>
            <h5 className="about-item-heading">{props.aboutRow.heading}</h5>
            <div className="about-item-description">{props.aboutRow.description}</div>
        </div>
    )
}

export default AboutItem;