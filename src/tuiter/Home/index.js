//import PostListItem from "./PostListItem"
import TuitListItem from "../tuits/tuititem"
import WhatsHappening from "./whats-happening"
import {useSelector} from "react-redux";

const HomeComponent = () => {
    const posts = useSelector(state => state.tuits)
    return (
        <>
            <h1>Home</h1>
            <WhatsHappening/>
            <div className="list-group wd-post-list-group">
                {
                    posts.map(post => {
                        return (<TuitListItem posts={post}/>);
                    })
                }
            </div>
        </>
    );
}

export default HomeComponent;