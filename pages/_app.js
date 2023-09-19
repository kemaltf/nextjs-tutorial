// `pages/_app.js`
// karena css gloabl ini akan mengubah secara global maka kita cuman bisa import di app.js
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}