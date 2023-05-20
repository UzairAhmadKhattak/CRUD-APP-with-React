import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

const main_file = <App/>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(main_file)
