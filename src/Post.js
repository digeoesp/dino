function Post(props) {
    return (
        <div>
            <h1> {props.title}</h1>
            <h1>By: {props.author}</h1>
            <h1>{props.body}</h1>
            <h1>comments: {props.comments[1]}</h1>
        </div>
    )
}


export default Post;

