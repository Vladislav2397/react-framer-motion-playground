import React from "react";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { ContactsPage } from "./AboutPage/ContactsPage/ContactsPage";
import { ArticleListPage } from "./ArticleListPage";
import { ArticlePage } from './ArticlePage'
import { BlogPage } from "./BlogPage/BlogPage";

export const routes = [
    {
        name: "Home",
        path: "/",
        element: React.createElement(HomePage),
    },
    {
        name: "About",
        path: "/about",
        element: React.createElement(AboutPage),
        children: [
            {
                name: "Contacts",
                path: "/about/contacts",
                element: React.createElement(ContactsPage),
            }
        ]
    },
    {
        name: 'ArticleList',
        path: "/articles",
        element: React.createElement(ArticleListPage),
        children: [
            {
                name: "Article",
                path: "/articles/:articleId",
                element: React.createElement(ArticlePage),
            }
        ]
    },
    {
        name: 'Blog',
        path: "/blog",
        element: React.createElement(BlogPage),
    },
]
