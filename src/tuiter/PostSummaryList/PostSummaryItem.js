const PostSummaryItem = ({post}) => {
    return(
        <div className="list-group-item position-relative row p-0" style={{"bottom": "60px"}}>
            <div className="row">
                <div className="col-xxl-10 col-xl-8 col-lg-8 col-sm-8">
                    <span className="wd-gray-color">{post.topic}</span><br></br>
                    <span className="wd-font-color" ><b>{post.userName}</b></span>
                    <i className="fa fa-circle fa-inverse"></i>
                    <span className="wd-gray-color" >&nbsp;. {post.time}</span><br></br>
                    <span className="wd-font-color">{post.title}</span>
                </div>
                <div className="m-xxl-0 col-xxl-2 col-xl-2 offset-xl-2 col-lg-2  offset-lg-2 col-md-2 offset-md-2 col-sm-3 offset-sm-1">
                    <div className="card" style={{width: "5em", marginTop:"4px", marginBottom:"4px"}}>
                        <img src={post.image} alt="img" className="card-img-top" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostSummaryItem;