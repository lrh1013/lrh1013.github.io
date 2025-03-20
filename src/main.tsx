import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@/assets/scss/rany.scss";
import App from './App';

import { worker } from "@/mocks/browser";

async function enableMocking() {
  if (import.meta.env.DEV) {
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
        options: { scope: "/" },
      },
      onUnhandledRequest: "bypass",
    });
  }
}

// msw 실행 후 React 앱 렌더링
enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
