import React, { useState } from 'react';

interface IServices {

}

const Services: React.FC = () => {
    let serviceRows = [
        {
            id: 0,
            heading: "REST APIs",
            description: "Building custom REST APIs for any purpose. Well documented and tested."
        }
    ]
    const [userState, setUserState] = useState({ userName: "", tag: "" });

    // setSideBarState({ sideBarClass: props.sideBarClass }) Kwesi Dadson
    return (
        <React.Fragment>
            <div className="container">
                <div className="content-section-heading">

                    <h2 className="mb-5">What I Offer</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="icon-screen-smartphone"></i>
                        </span>
                        <h4>
                            <strong>Responsive</strong>
                        </h4>
                        <p className="text-faded mb-0">Looks great on any screen size!</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="icon-pencil"></i>
                        </span>
                        <h4>
                            <strong>Redesigned</strong>
                        </h4>
                        <p className="text-faded mb-0">Freshly redesigned for Bootstrap 4.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="icon-like"></i>
                        </span>
                        <h4>
                            <strong>Favorited</strong>
                        </h4>
                        <p className="text-faded mb-0">Millions of users
            <i className="fa fa-heart"></i>
            Start Bootstrap!</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="icon-mustache"></i>
                        </span>
                        <h4>
                            <strong>Question</strong>
                        </h4>
                        <p className="text-faded mb-0">I mustache you a question...</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Services;