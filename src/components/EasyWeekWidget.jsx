import React, { useEffect } from "react";

export const EasyWeekWidget = () => {
  // useEffect(() => {
  //   const handleMessage = (e) => {
  //     if (/(easyweek|eswk)\./.test(e.origin) && e.data?.type === "redirect") {
  //       window.location.replace(e.data.url);
  //     }
  //   };

  //   window.addEventListener("message", handleMessage);
  //   return () => {
  //     window.removeEventListener("message", handleMessage);
  //   };
  // }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,l){
        w.addEventListener("message",function(e){
          if(/(easyweek|eswk)\\./.test(e.origin) && e.data && e.data.type==="redirect"){
            l.replace(e.data.url)
          }
        })
      })(window,location);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* <iframe
        src="https://booking.easyweek.lv/sia-baka-rini"
        style={{ border: 0, maxWidth: "100%" }}
        frameBorder="0"
        referrerPolicy="origin"
        width="100%"
        height="600"
      ></iframe> */}
      <iframe
        src="https://booking.easyweek.lv/baka-rini"
        style={{ border: 0, maxWidth: "100%" }}
        frameBorder="0"
        referrerPolicy="origin"
        width="100%"
        height="600"
        title="EasyWeek Booking"
      ></iframe>
    </div>
  );
};
