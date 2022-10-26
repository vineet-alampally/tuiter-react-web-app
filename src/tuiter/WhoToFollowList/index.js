import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);
    return (

        <div className="list-group wd-list-group">
            <div className="list-group-item">
                <div className="row">
                    <span className="wd-font-white" style={{fontSize:"20px", fontWeight:"bold"}}>Who to follow</span>
                </div>
            </div>
            {
                whoArray.map(value => {
                    return (
                        <WhoToFollowListItem who={value}/>
                    );
                })
            }
        </div>
    );
}

export default WhoToFollowList;