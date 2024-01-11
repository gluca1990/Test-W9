import React from "react";

export default class NetFooter extends React.Component {

    render() {
        return (
            <footer className="bg-dark pt-3">
                 <div className="row text-center mx-auto mt-3">
                    <div className="col-6 offset-3">
                        <div className="row">
                            <div className="col col-12 text-left mb-5">
                                <i class="mx-1 text-secondary bi bi-facebook"></i>
                                <i class="mx-1 text-secondary bi bi-instagram"></i>
                                <i class="mx-1 text-secondary bi bi-twitter"></i>
                                <i class="mx-1 text-secondary bi bi-youtube"></i>
                            </div>
                        </div>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"
                        >
                            <div className="col">
                                <div className="row">
                                    <div className="col col-11 footer-links">
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Audio and Subtitles</a>
                                        </p>
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Media Center</a>
                                        </p>
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Privacy</a>
                                        </p>
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Contact us</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col col-11 footer-links">
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Audio Description</a>
                                        </p>
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Investor Relations</a>
                                        </p>
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Legal Notices</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col col-11 footer-links">
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Help Center</a>
                                        </p>
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Jobs</a>
                                        </p>
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Cookie Preferences</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col col-11 footer-links">
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Gift Cards</a>
                                        </p>
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Terms of Use</a>
                                        </p>
                                        <p>
                                            <a className="text-secondary fw-semibold" href="#" alt="footer link">Corporate Information</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="row">
                            <div className="text-start col col-12 text-left mb-2">
                                <button
                                    type="button"
                                    className="text-secondary btn btn-sm footer-button rounded-0 mt-3 border border-secondary"
                                >
                                    Service Code
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-secondary text-start col col-12 text-left mb-2 mt-3 copyright">
                                © 1997-2022 Netflix, Inc.
                            </div>
                        </div> 
                    </div>
                </div> 
            </footer>
        )
    }
}