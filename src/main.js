import React from "react";
import { render } from "react-dom";
import "./main.css";
import Counter from "./components/reactive/counter/Counter";

const counterEl = document.getElementById('counter');
counterEl && render(<Counter />, counterEl);
