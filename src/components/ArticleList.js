import React from "react";
import Article from "./Article";

function ArticleList(prop) {
    return (
        <main>
        {prop.posts.map(post => <Article {...post} key={post.id}/>)}
        </main>
    );
}

export default ArticleList;
