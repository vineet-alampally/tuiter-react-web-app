import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return (
        <div className="list-group wd-list-group">
            <div className="list-group-item">
                <div className="row">
                    <span className="wd-font-white" style={{fontSize:"20px", fontWeight:"bold"}}>Who to follow</span>
                </div>
            </div>
            {
                who.map(value => {
                    return (
                        <WhoToFollowListItem who={value}/>
                    );
                })
            }
        </div>
    );
}

export default WhoToFollowList;