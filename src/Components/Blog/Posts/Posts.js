import { postsObj } from "./postObj"

const Posts = () => {
    return (
        <>
            {
                postsObj.map((post) => {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.textPost}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Posts