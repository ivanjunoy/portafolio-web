import { marked } from "marked"
import { postsObj } from "./postObj"
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import styles from './Post.module.css';

const blockedProtocols = ['javascript'];

const sanitizeHtml = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    doc.querySelectorAll("script, iframe, object, embed, link, style").forEach((el) => el.remove());

    doc.querySelectorAll("*").forEach((el) => {
        [...el.attributes].forEach((attr) => {
            const name = attr.name.toLowerCase();
            const value = attr.value.toLowerCase().trim();
            const hasBlockedHref = name === "href" && blockedProtocols.some((protocol) => value.startsWith(`${protocol}:`));

            if (name.startsWith("on") || name === "style" || hasBlockedHref) {
                el.removeAttribute(attr.name);
            }
        });
    });

    return doc.body.innerHTML;
};

const Posts = () => {
    return (
        <main className={styles.page}>
            <Link to="/blog" className={styles.backLink}><FiArrowLeft aria-hidden="true" /> Volver a referencias</Link>
            {
                postsObj.map((post) => {
                    const markdownText = sanitizeHtml(marked(post.textPost));
                    return (
                        <article key={post.id} className={styles.container}>
                            <div className={styles.containerPost}>
                                    <div className={styles.postMeta}><span>REFLEXIONES / {String(post.id).padStart(2, '0')}</span><time dateTime="2024-04">ABRIL, 2024</time></div>
                                    <h1>{post.title}</h1>
                                    <div className={styles.lols} dangerouslySetInnerHTML={{ __html: markdownText }}></div>
                            </div>
                        </article>
                    )
                })
            }
        </main>
    )
}

export default Posts
