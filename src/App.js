import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Courses from './Components/Course/Courses';
import Home from './Components/Home/Home';
import Footer from './Components/layout/Footer/Footer';
import NotFound from './Components/layout/NotFound/NotFound.jsx';
import Header from './Components/layout/Header/Header.jsx';
import ForgetPassword from './Components/Auth/ForgetPassword.jsx';
import ResetPassword from './Components/Auth/ResetPassword.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Request from './Components/Request/Request.jsx';
import About from './Components/About/About.jsx';
import Subscribe from './Components/Payments/Subscribe.jsx';
import PaymentSuccess from './Components/Payments/PaymentSuccess.jsx';
import PaymentFail from './Components/Payments/PaymentFail.jsx';
import CoursePage from './Components/CoursePage/CoursePage.jsx';
import Profile from './Components/Profile/Profile.jsx';
import ChangePassword from './Components/Profile/ChangePassword.jsx';
import UpdateProfile from './Components/Profile/UpdateProfile.jsx';
import Dashboard from './Components/Admin/Dashboard/Dashboard.jsx';
import CreateCourse from './Components/Admin/CreateCourse/CreateCourse.jsx';
import Users from './Components/Admin/Users/Users.jsx';
import Admin_Course from './Components/Admin/Courses/Admin_Course.jsx';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './Components/layout/Loader/Loader.jsx';
import { loadUser } from './Redux/action/user.js';

function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  const dispatch = useDispatch();
  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );

  // Load user only if authenticated

  // Handle errors and messages
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} user={user} />
            <Route
              path="/courses/:id"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect="/login"
                >
                  <CoursePage user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />

            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect="/login"
                >
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect="/login"
                >
                  <ChangePassword />
                </ProtectedRoute>
              }
            />

            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect="/login"
                >
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/forgetpassword"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ForgetPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/requestcourse" element={<Request />} />
            <Route path="/aboutus" element={<About />} />
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect="/login"
                >
                  <Subscribe user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} isAuthenticated={isAuthenticated}/>
            <Route path="/paymentfail" element={<PaymentFail />} isAuthenticated={isAuthenticated} />

            {/* {Admin Routes} */}

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                    
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <Admin_Course />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <Users />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 5000,
            }}
          />
          <Footer />
        </>
      )}
    </Router>
  );
}
export default App;
