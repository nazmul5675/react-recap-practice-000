import './post.css';

export default function Post({ post }) {
    const { title, body, id, userId } = post;
    return (
        <div className="post">
            <h5>Title: {title}</h5>
            <p>User Id: {userId}</p>
            <p><small>Post Id: {id}</small></p>
            <p>{body}</p>
        </div>
    );
}
