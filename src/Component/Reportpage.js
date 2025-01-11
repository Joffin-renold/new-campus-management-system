import React from "react";
import Style from './Attendancepage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';
import { useEffect, useRef } from "react";

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

const Barcharts = () => {
    const ref1 = useRef(null);//to manipulate dom
    const reff = useRef(null);//reffernce of ref1 
    useEffect(() => {
        const bars = ref1.current.getContext("2d");
        reff.current = new Chart(bars, {
            type: 'bar',
            data: {
                labels: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'],
                datasets: [{
                    label: 'Present students',
                    data: [75, 65, 100, 40, 55, 35],
                    backgroundColor: '#1dd1a1',
                }]
            },
        })
        return () => {//cleanup code
            if (reff.current) { reff.current.destroy(); }
        }//to avoid multiple generation of chart,so destroy already occur

    }, [])
    return (<canvas ref={ref1} style={{ width: '300px', height: '250px' }}></canvas>);
}

const Piecharts = () => {
    const ref2 = useRef(null);
    const reff2 = useRef(null);
    useEffect(() => {
        const pies = ref2.current.getContext("2d");
        reff2.current = new Chart(pies, {
            type: 'pie',
            data: {
                labels: ['Present', 'Absent'],
                datasets: [{
                    data: [73, 27],
                    backgroundColor: ['#54a0ff', '#ff6b6b']

                }]
            },

        })
        return () => { //cleanup code
            if (reff2.current) { reff2.current.destroy(); }
        }//to avoid multiple generation of chart,so destroy already occur
    }, [])
    return (<canvas ref={ref2} style={{ width: '300px', height: '250px', marginLeft: '50px' }}></canvas>);
}

export default function board() {
    return (
        <>
            <Sidebar />
            <div style={{ marginLeft: '300px' }}>
                <h1>welcome</h1>
                <div className="card" style={{ width: '500px', height: '400px', marginTop: '150px' }}>
                    <Barcharts />
                </div>
                <div className="card" style={{ width: '500px', height: '400px', float: 'right', marginRight: '200px', marginTop: '-400px' }}>
                    <Piecharts />
                </div>

            </div>
        </>
    )

}
