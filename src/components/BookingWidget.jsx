import React, { useEffect, useRef } from "react";

function BookingWidget() {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//widget.simplybook.me/v2/widget/widget.js";
    script.onload = () => {
      new SimplybookWidget({
        widget_type: "iframe",
        url: "https://siabakarini.simplybook.me",
        theme: "creative",
        theme_settings: {
          timeline_show_end_time: "0",
          timeline_modern_display: "as_slots",
          timeline_hide_unavailable: "1",
          index_page_content_grid:
            '[{"template":"col_25_50_25","items":[null,null,null]},{"template":"col_50_50","items":["timetable","contacts"]}]',
          hide_past_days: "0",
          sb_base_color: "#75b9e0",
          display_item_mode: "block",
          booking_nav_bg_color: "#75b9e0",
          body_bg_color: "#ffffff",
          sb_review_image: "",
          dark_font_color: "#202929",
          light_font_color: "#ffffff",
          btn_color_1: "#66a3ad",
          hide_img_mode: "1",
          show_sidebar: "1",
          sb_busy: "#c7b3b3",
          sb_available: "#e2eaec",
        },
        timeline: "modern",
        datepicker: "top_calendar",
        is_rtl: false,
        app_config: {
          clear_session: 0,
          allow_switch_to_ada: 0,
          predefined: [],
        },
        container_id: "sbw_nx6o6n",
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="sbw_nx6o6n" ref={widgetContainerRef}></div>;
}

export default BookingWidget;
