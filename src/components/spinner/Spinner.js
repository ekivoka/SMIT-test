import React from 'react'
import './spinner.css'

class Spinner extends React.Component {

    render() {

        return (
           <div className="spinner-wrapper">
               
               <div className = "spinner-cube"></div>
               <div className = "spinner-cube"></div>
               <div className = "spinner-cube"></div>
               <div className = "spinner-cube"></div>

               <div className="spinner-man">
                    <div className="spinner-hair">
                        <div className="spinner-hair2"></div>
                        <div className="spinner-hair3"></div>
                    </div>
                    <div className="spinner-head">
                        <div className="spinner-eye-left">
                            <div className='spinner-eye-left-pupil'></div>
                        </div>
                        <div className="spinner-eye-right">
                        <div className='spinner-eye-right-pupil'></div>
                        </div>
                        <div className="spinner-nose"></div>
                        <div className="spinner-mouth">
                            <div className="spinner-mouth-hole"></div>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

export default Spinner