import {useDispatch } from "react-redux";
import {updateTuitThunk}
    from "../../services/tuits-thunks";
import { useState } from "react";

const TuitStats = ({stats}) => {
    const [isActive, setIsActive] = useState(stats.liked);
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        let x = 1;
        if(!isActive) {
            setIsActive(true);

        } else {
            setIsActive(false);
            x = -1;
        }


        dispatch(updateTuitThunk({
                                     ...stats,
                                     likes: stats.likes + x
                                 }));
    }

    return (<div className="row mt-2 ms-5">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <i className='fa fa-regular fa-comment wd-gray-color'></i>
            <span className='ms-1 wd-gray-color'>{stats.replies}</span>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <i className='fa fa-solid fa-retweet wd-gray-color'></i>
            <span className='ms-1 wd-gray-color'>{stats.retuits}</span>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <i onClick={likeClickHandler}
               className='fa fa-heart'
               style={{"color": `${isActive ? "red" : "gray"}`}}></i>
            <span className='ms-1 wd-gray-color'>{stats.likes}</span>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <i className='fa-solid fa-share-nodes wd-gray-color'></i>

        </div>
    </div>);
}

export default TuitStats;


