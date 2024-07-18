import React from "react";
import "./loader.css";

export default function Loader() {
    return (
        <div class="loader-container">
            <div class="loading-wave">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
        </div>
        </div>
    )
}