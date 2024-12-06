
import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "../layout/LayoutPublic";
import { Blog, AllBlog, AddBlog, DetailBlog, NotFound, Home, Escudo } from "../pages"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/escudo',
                element: <Escudo />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/blog/todos',
                element: <AllBlog />,
            },
            {
                path: '/blog/:id',
                element: <DetailBlog />,
            },
            {
                path: '/agregarblog',
                element: <AddBlog />,
            },
        ]
    },


])