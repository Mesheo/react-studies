import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import './style.css';

import Board from './App'

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Board />
    </StrictMode>
)