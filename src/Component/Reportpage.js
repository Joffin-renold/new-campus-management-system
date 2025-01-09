import React from "react";
import Style from './Attendancepage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    return (
        <>
            <div className={Style.side}>
                <nav className={Style.inner}>
                    <p >Dashboard</p>
                    <p  >Mark Attendance</p>
                    <p >Leave Request</p>
                    <p >Report</p>
                </nav>
            </div>
        </>
    );
}


export default function repo(){
    return(<>
        <Sidebar/>
      
    </>)
}