import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Register from './pages/Ragister'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import AuthorPost from './pages/AuthorPost'
import Authors from './pages/Authors'
import EditPost from './pages/EditPost'
import CategoryPost from './pages/CategoryPost'
import Logout from './pages/Logout'
import Dashboard from './pages/Dashboard'
import DeletePost from './pages/DeletePost'
import CreatePost from './pages/CreatePost'

const router = createBrowserRouter ([
  {
    path:"/",
    element:<Layout/>,
    errorElement: <ErrorPage />,
    children:[
      {index:true, element: <Home />},
      {path:"posts/:id", element: <PostDetail />},
      {path:"register", element: <Register />},
      {path:"login", element: <Login />},
      {path:"profile/:id", element: <UserProfile />},
      {path:"post/users/:id", element: <AuthorPost />},
      {path:"authors", element: <Authors />},
      {path:"posts/categories/:category", element: <CategoryPost />},
      {path:"posts/:id/edit", element: <EditPost />},
      {path:"posts/:id/delete", element: <DeletePost />},
      {path:"create", element: <CreatePost />},
      {path:"logout", element: <Logout />},
      {path:"profile/sdfsdf/myposts/:id", element: <Dashboard />},
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


