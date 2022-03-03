import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer id="footer">
            <div className="container-fluid mb-0">
                <div className="row">
                    <div className="col-lg-3">
                        <h1>BTR </h1>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4>INFORMATION</h4>
                        <ul>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#!">Event</a></li>
                            <li><a href="#!">Search </a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h4>HELPLINE</h4>
                        <ul>
                            <li><a href="#!">Tours</a></li>
                            <li><a href="#!">Supports</a></li>
                            <li><a href="#!">Privacy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h4>CONTACTS</h4>
                        <ul>
                            <li><a href="mailto:swrangpilton@gmail.com">swrangpiltonp@gmail.com</a></li>
                            <li><a href="#!">+91 863 837 2701</a></li>
                            <li><a href="#!">+91 123 768 4091</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h4>FOLLOW US</h4>
                        <ul className="d-flex">
                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center pt-3">
                        <p className="mb-1"> {year} &copy; All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
