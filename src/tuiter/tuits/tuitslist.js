import TuitItem from "./tuititem";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <div className="list-group wd-list-group">
            {
                tuitsArray.map(tuit => {
                    return (
                        <TuitItem
                            key={tuit._id}
                            tuit={tuit}
                        />
                    );
                })
            }
        </div>
    );
}

export default TuitList;