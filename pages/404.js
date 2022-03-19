import Link from "next/link";
import React, { useEffect } from "react";

export default function NotFound(props) {
  const { setPreloader } = props;

  useEffect(() => {
    setPreloader(false);
  }, []);

  return   (<div className="error-page mainbox">
  <div className="err">4</div>
  <i className="far fa-question-circle fa-spin"></i>
  <div className="err2">4</div>
  <div className="msg">
      Sayfa bulunamadı...
      <p>Bu linkten <Link href="/">anasayfamıza</Link> ulaşabilirsiniz.</p>
  </div>
</div>);
}
