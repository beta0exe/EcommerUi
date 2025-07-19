import {ThumbsUp ,ThumbsDown } from "lucide-react"
import "../css/CommentBox.css"
function CommentBox({info}) {
    return (
        <div className="commentBox">
            <div className="commentBox-first-row">
                <div className="commentBox-first-row-imagebox">
                    <img src={info.picture} alt="profile-picture"/>
                    <div className="commentBox-first-row-info-title">
                        <h3 className="commentBox-first-row-info-name">{info.name}</h3>
                        <p className="commentBox-first-row-info-joined">{info.joined}</p>
                    </div>
                </div>
                <div className="commentBox-first-row-score">
                    <img src={info.rate} alt="profile-picture"/>
                </div>
            </div>
            <div className="commentBox-sec-row">
                <div className="commentBox-comment">{info.comment}</div>
            </div>
            <div className="commentBox-third-row">
                <div className="commentBox-comment-third-row-links">
                    <a href="#" className="commentBox-comment-third-row-link">Show More<img src="../public/ProductDetailsPublic/arrow-down.png"/></a>
                </div>
                <div className="commentBox-comment-link-boxes">
                    <div className="commentBox-comment-third-row-likes">
                        <ThumbsUp />
                    </div>
                    <div className="commentBox-comment-third-row-dislikes">
                        <ThumbsDown />
                    </div>
            </div>
                </div>
        </div>
    )
};


export default CommentBox;