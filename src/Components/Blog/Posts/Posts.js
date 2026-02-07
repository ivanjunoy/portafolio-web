import { marked } from "marked"
import { postsObj } from "./postObj"

import styles from './Post.module.css';

const sanitizeHtml = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    doc.querySelectorAll("script, iframe, object, embed, link, style").forEach((el) => el.remove());

    doc.querySelectorAll("*").forEach((el) => {
        [...el.attributes].forEach((attr) => {
            const name = attr.name.toLowerCase();
            const value = attr.value;
            if (name.startsWith("on") || name === "style" || (name === "href" && value.toLowerCase().startsWith("javascript:"))) {
                el.removeAttribute(attr.name);
            }
        });
    });

    return doc.body.innerHTML;
};

const Posts = () => {
    return (
        <>
            {
                postsObj.map((post) => {
                    const markdownText = sanitizeHtml(marked(post.textPost));
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
