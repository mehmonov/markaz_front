import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { API_URL } from './Components/API/API';
import Footer from './Components/Footer';
import LogoHeader from './Components/LogoHeader';
import Sidebar from './Components/Sidebar';
import AddUser from './Pages/AddUser';
import Error from './Pages/ErrorPage/Error';
import Form from './Pages/Form';
import Groups from './Pages/Groups';
import Pupils from './Pages/Pupils';
import YangiKelganlar from './Pages/YangiKelganlar';

function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    CourcesFetching();
  }, []);

  const CourcesFetching = async () => {
    let response = await fetch(API_URL+'courses');
    response = await response.json();
    if (response) {
      dispatch({ type: "COURCES_FETCHING", payload: response });
    }
  }

  return (
    <div className='wrapper'>
      <div className="main-header">
        <LogoHeader />
        <nav className="navbar navbar-header" data-background-color="blue2"></nav>
      </div>
      <Sidebar />
      <div className="main-panel">
        <div className="content">
          <div className="panel-header bg-primary-gradient">
            <div className="page-inner py-5">
            </div>
          </div>
          <div className="page-inner mt--5">
            <Routes>
              <Route path='/' index element={<YangiKelganlar />} />
              <Route path='/form' element={<Form />} />
              <Route path='/adduser' element={<AddUser />} />
              <Route path='/groups' element={<Groups />} />
              <Route path='/pupils' element={<Pupils />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;