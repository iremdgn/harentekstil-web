import React, { useEffect, useState } from "react";
import { Collapse, Spinner } from "react-bootstrap";

export default function Preloader(props) {
  const { preloader } = props;
  const [preloaderShow, setPreloaderShow] = useState(true);


  useEffect(() => {
    setLoad();
  }, [preloader]);

  const setLoad = async () => {
    console.log("preloader", preloader);
    if (!preloader) {
      setTimeout(() => {
        setPreloaderShow(false);
      }, 1000);
    } else {
      setPreloaderShow(true);
    }
  };

  return (
    <Collapse in={preloaderShow}>
      <div className={`preloader justify-content-center align-item-center`}>
        <div className=" w-100 h-100 d-flex flex-column justify-content-center align-item-center">
          <div className="d-flex flex-column justify-content-center align-item-center m-auto">
            <Spinner className="mx-auto mb-4" animation="grow" />
            <h4>{"Haren Tekstil".toUpperCase()}</h4>
          </div>
        </div>
      </div>
    </Collapse>
  );
}
