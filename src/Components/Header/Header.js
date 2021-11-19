import React from 'react';
import logo from '../../images/logo.jpeg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../Login/Login';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Register from '../Register/Register';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import AddService from '../AddService/AddService';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import PurchaseDetails from '../PurchaseDetails/PurchaseDetails';
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import MyOrders from '../MyOrders/MyOrders';
import MoreProducts from '../MoreProducts/MoreProducts';
import Reviews from '../Reviews/Reviews';
import Review from '../Review/Review';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import Partners from '../Partners/Partners';
import ManageProducts from '../ManageProducts/ManageProducts';
const Header = () => {
    const { user, logOut, admin } = useAuth();
    return (
        <div className="justify-content-between">


            <img src={logo} className="w-25" alt="" />



            <Router>
                <nav className="navBar">
                    <Link to="/Home">Home</Link>
                    <Link to="/moreProducts">More Products</Link>

                    {
                        user.email ?
                            <button onClick={logOut}>Logout</button>

                            :
                            <Link to="/login">Login</Link>
                    }

                    {admin && <Link to="/addService">Add Product</Link>}
                    {admin && <Link to="/manageAllOrders">Manage All Orders</Link>}

                    {admin && <Link to="/makeAdmin">Make Admin</Link>}

                    {admin && <Link to="/manageProduct">Manage Product</Link>}


                    {user.email &&
                        <Link to="/MyOrders">My Orders</Link>}

                    {user.email && <Link to="/review">Add Review</Link>}

                    {user.email && <Link to="/payment">Payment</Link>}






                    <p>{user.email}</p>

                </nav>
                <Switch>
                    <Route path="/login">
                        <Login></Login>

                    </Route>
                    <Route path="/Home">
                        <Banner></Banner>
                        <Products></Products>
                        <FeaturedProducts></FeaturedProducts>
                        <Reviews></Reviews>
                        <Partners></Partners>
                    </Route>
                    <Route path="/register">
                        <Register></Register>


                    </Route>
                    <Route path="/moreProducts">
                        <MoreProducts></MoreProducts>
                    </Route>

                    <PrivateRoute path="/MyOrders">
                        <MyOrders></MyOrders>
                    </PrivateRoute>


                    <PrivateRoute path="/review">
                        <Review></Review>
                    </PrivateRoute>


                    <PrivateRoute path="/payment">
                        <Payment></Payment>
                    </PrivateRoute>


                    <PrivateRoute path="/Details/:detailsId">
                        <PurchaseDetails></PurchaseDetails>
                    </PrivateRoute>
                    <Route path="/addService">
                        <AddService></AddService>

                    </Route>

                    <PrivateRoute path="/manageAllOrders">
                        <ManageAllOrders></ManageAllOrders>
                    </PrivateRoute>


                    <PrivateRoute path="/manageProduct">
                        <ManageProducts></ManageProducts>
                    </PrivateRoute>

                    <PrivateRoute path="/makeAdmin">
                        <MakeAdmin></MakeAdmin>
                    </PrivateRoute>

                    <Route exact path="/">
                        <Banner></Banner>
                        <Products></Products>
                        <FeaturedProducts></FeaturedProducts>
                        <Reviews></Reviews>
                        <Partners></Partners>

                    </Route>
                </Switch>

            </Router>
        </div>




    );
};

export default Header;