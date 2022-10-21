import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <>
            <div className="row">
                <div className="list-group  wd-list-group col-xxl-12 col-xl-12 col-lg-11">
                    <div className="list-group-item">
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-user wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Tuitter</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className="list-group-item">
                        <Link to="/">
                            <div className="row">
                                <i className="fa fa-home wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Labs</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                        <Link to="/tuiter/home">
                            <div className="row">
                                <i className="fa fa-home wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Home</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                        <Link to="/tuiter/explore">
                            <div className="row">
                                <i className="fa fa-hashtag fa-inverse col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Explore</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}
                         style={{"border-top-width": "0px"}}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-bell col-xxl-2 col-xl-2 wd-font-color"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Notifications</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-envelope wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Messages</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-bookmark wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Bookmarks</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-list wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Lists</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-user wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Profile</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-user wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">More</span></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row px-3">
                <div className="btn btn-primary col-xxl-12 col-xl-12  mt-2  wd-button-bg wd-rounded-buttons"
                >Tweet
                </div>
            </div>
        </>

    );
};
export default NavigationSidebar;