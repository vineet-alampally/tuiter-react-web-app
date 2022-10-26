
const TuitStats = ({stats}) => {

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
            {stats.liked ? (<i className='fa fa-regular fa-heart  wd-gray-color'></i>)
                         : (<i className='fa fa-sloid fa-heart  wd-red-color'></i>)}
            <span className='ms-1 wd-gray-color'>{stats.likes}</span>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <i className='fa-solid fa-share-nodes wd-gray-color'></i>

        </div>
    </div>);
}

export default TuitStats;


