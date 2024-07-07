import { marked } from "marked"
import { postsObj } from "./postObj"

import styles from './Post.module.css';

const Posts = () => {
    return (
        <>
            {
                postsObj.map((post) => {
                    const markdownText = marked(post.textPost);
                    return (
                        <div className={styles.container}>
                            <div key={post.id} className={styles.containerPost}>
                                    <hr />
                                    <h3>-{post.title}-</h3>
                                    <div className={styles.lols} dangerouslySetInnerHTML={{ __html: markdownText }}></div>
                                    <div className={styles.fecha}>04/24</div>
                                    <hr />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Posts