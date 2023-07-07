import React, { useEffect } from 'react'
import css from '../stylesheets/DashBoard.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLogOutAsync} from '../Redux/feature/userSlice';
import { GoogleLogout } from 'react-google-login';
import LineChart from './LineChart';
import PieChart from './PieChart';
import axios from 'axios';


const DashBoard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
   const data = useSelector(e=>e);
  
  const clientId = '50662741066-i3fth4cko7tfal4ju168k766i9v1nrnt.apps.googleusercontent.com';


    const logOutHandler = (res)=>{
        dispatch(googleLogOutAsync(res))
      }

      const dashboardData = async ()=>{
    
      }

     useEffect(() => {
    if(data.user.isAuthenticated) navigate('/dashboard')
    else navigate('/')
  }, [data.user.isAuthenticated])
      



  return (
    <div id={css.dashboard}>
        <div id={css.left}>
            <h1>Board.</h1>
            <div id={css.lsection}>
                <a href="">Dashboard</a>
                <a href="">Transactions</a>
                <a href="">Schedules</a>
                <a href="">Users</a>
                <a href="">Settings</a>
            </div>
            <div id={css.lbot}>
                <a href="">Help</a>
                <a href="">Contact Us</a>
            </div>
        </div>

        <div id={css.right}>
            <botton id={css.gl}>
            <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={logOutHandler}
    />
            </botton>
        
            <div id={css.nav}>
                <h1>Dashboard</h1>
                <div id={css.navright}>
                    <input type="search" placeholder='search'/>
                </div>
            </div>
            <div id={css.rtop}>
                <div>
                    <h4>Total Revenue</h4>
                    <h2>2,109,209</h2>
                </div>
                <div>
                    <h4>Total Transaction</h4>
                    <h2>9,209</h2>
                </div>
                <div>
                    <h4>Total Likes</h4>
                    <h2>29,209</h2>
                </div>
                <div>
                    <h4>Total User</h4>
                    <h2>209</h2>
                </div>
            </div>
            <div id={css.rmid}>
            <h2>Activities</h2>
                <LineChart/>
            </div>
            <div id={css.rbot}>
                <div id={css.rbotl}>
                <h2>Top Products</h2>
                    <PieChart/>
                </div>
                <div id={css.rbotr}>
                    <div id={css.t}>
                        <h2>Today's Schedule</h2>
                    </div>
                    <div id={css.m}>
                        <div id={css.line}></div>
                       <div id={css.c}>
                       <h4>Meeting</h4>
                        <h5>14:00-15:00</h5>
                        <h6>at sunset road</h6>
                       </div>
                    </div>
                    <div id={css.b}>
                        <div id={css.line}></div>
                        <div id={css.c}>
                        <h4>Check Operation</h4>
                        <h5>18:00-20:00</h5>
                        <h6>at central jhatka</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard