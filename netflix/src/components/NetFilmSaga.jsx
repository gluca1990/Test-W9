import React from "react";
import {Dropdown} from 'react-bootstrap';
import NetCreateList1 from "./NetCreateList1";
import NetCreateList2 from "./NetCreateList2";
import NetCreateList3 from "./NetCreateList3";
export default class NetFilmSaga extends React.Component {

    render() {
        return (
            <>
                <div className="d-flex align-items-center container-fluid p-4 bg-dark">
                    <h1 className="fs-2 fw-bold text-light">Film Series</h1>
                    <Dropdown >
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Genres
                        </Dropdown.Toggle>

                        <Dropdown.Menu id="square" className="bg-dark">
                            <Dropdown.Item className="text-light" href="#">Comedy</Dropdown.Item>
                            <Dropdown.Item className="text-light" href="#">Drama</Dropdown.Item>
                            <Dropdown.Item className="text-light" href="#">Thriller</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div id ="main" className="container-fluid p-4 my-4">
                    <h2 className="text-light">Pirates Of The Caribbean</h2>
                    <NetCreateList1 key="pirates"/>

                </div>
                <div id ="main" className="container-fluid p-4 my-4">
                    <h2 className="text-light">Transformers</h2>
                    <NetCreateList2 key="transformers" />

                </div>
                <div id ="main" className="container-fluid p-4 my-4">
                    <h2 className="text-light">MCU</h2>
                    <NetCreateList3 key="Avengers"/>

                </div>

            </>
        );
    }
}