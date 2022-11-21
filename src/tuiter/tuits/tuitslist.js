import React, {useEffect} from "react";
import TuitItem from "./tuititem";
import {useDispatch ,useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";


const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])
    console.log(tuits)
    return (
        <div className="list-group wd-list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => {
                    return (
                        <TuitItem
                            tuit={tuit}
                        />
                    );
                })
            }
        </div>
    );
}

export default TuitList;