import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import IconButton from '@mui/material/IconButton';
import {useSelector} from "react-redux";

import {Link} from "react-router-dom";

const Profile = () => {

    const profile = useSelector((state) => state.profile);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        <>
            <div className="row">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <IconButton children={<ArrowBackIcon/>} style={{"color": "black"}}/>
                </div>
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10">
                    <span style={{
                        "color": "black",
                        "font-family": "bold",
                        "fontSize": "1.5em"
                    }}>{profile.firstName}&nbsp;{profile.lastName}</span><br/>
                    <span className="wd-gray-color">122 Tweets</span>
                </div>
            </div>
            <div className="row">
                <img src={process.env.PUBLIC_URL + profile.bannerPicture} alt="..." className="img-fluid"
                     width="100%" height="200px"/>
            </div>
            <div className="row">
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-90">
                    <img src={process.env.PUBLIC_URL + profile.profilePicture} alt="..."
                         className="wd-rounded-images position-relative" height="100px"
                         width="100px" style={{"bottom": "1rem"}}/>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1">
                    <Link to="/tuiter/edit">
                        <div className="btn wd-edit-profile float-right" style={{
                            "background": "white",
                            "color": "black",
                            "border": "1px solid gray",
                            "borderRadius": "40px",
                            "fontWeight": "bold",
                        }}>Edit profile
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <span style={{
                    "color": "black",
                    "font-family": "bold",
                    "fontSize": "1.5em"
                }}>{profile.firstName}&nbsp;{profile.lastName}</span><br/>
                <span className="md-5 wd-gray-color">{profile.handle}</span><br/>
                <span className="md-5 wd-font-color">{profile.bio}</span><br/>
                <span className="wd-gray-color"><LocationOnIcon/>{profile.location}&nbsp;</span>
                <span className="wd-gray-color"><LocationSearchingIcon/>{" Born " +
                                                                         new Date(
                                                                             profile.dateOfBirth).toLocaleDateString(
                                                                             'en-US',
                                                                             {
                                                                                 timeZone: 'UTC',
                                                                                 year: "numeric",
                                                                                 month: "long",
                                                                                 day: "numeric",
                                                                             },
                                                                         )}&nbsp;</span>
                <span className="wd-gray-color"><CalendarMonthIcon/> {" Joined " +
                                                                      months[parseInt(
                                                                          profile.dateJoined.split(
                                                                              "/")[0]) - 1] +
                                                                      ", " +
                                                                      profile.dateJoined.split(
                                                                          "/")[1]}&nbsp;</span><br/>&nbsp;
                <span className="wd-gray-color"><span style={{
                    "color": "black",
                    "font-family": "bold"
                }}>{profile.followingCount}</span>&nbsp; Following</span>&nbsp;&nbsp;
                <span className="wd-gray-color"><span style={{
                    "color": "black",
                    "font-family": "bold"
                }}>{profile.followersCount}</span>&nbsp; Followers</span>
            </div>

        </>
    );
}
export default Profile;