import  PostSummaryItem from "./PostSummaryItem";
import posts from "./posts"
const PostSummaryList = () => {
    return (
        <div className="list-group wd-list-group">
            {
                posts.map(post => {
                    return(
                        <PostSummaryItem post={post}/>
                    );
                })
            }
        </div>
    ); }

export default PostSummaryList;