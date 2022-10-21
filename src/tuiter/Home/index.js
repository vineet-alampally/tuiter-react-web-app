import PostListItem from "./PostListItem"
import posts from "./postitems.json";

const HomeComponent = () => {
    return (
        <>
            <div className="list-group wd-post-list-group">
                {
                    posts.map(post => {
                        return (<PostListItem posts={post}/>);
                    })
                }
            </div>
        </>
    );
}

export default HomeComponent;