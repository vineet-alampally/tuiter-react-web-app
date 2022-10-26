import  PostSummaryItem from "./PostSummaryItem";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return (
        <div className="list-group wd-list-group">
            {
                postsArray.map(post => {
                    return(
                        <PostSummaryItem post={post}/>
                    );
                })
            }
        </div>
    ); }

export default PostSummaryList;