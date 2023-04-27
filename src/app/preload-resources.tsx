"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  // @ts-expect-error
  ReactDOM.preconnect("https://fonts.googleapis.com");
  // @ts-expect-error
  ReactDOM.preconnect("https://fonts.gstatic.com", { crossOrigin: true });
  // @ts-expect-error
  ReactDOM.preload(
    "https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;500;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&display=swap",
    { rel: "stylesheet" }
  );
}
