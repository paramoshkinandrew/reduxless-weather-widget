import * as React from 'react';
import './loader.css';

export const Loader = ({ className }) => (
  <div className={`lds-roller${className ? ` ${className}` : ''}`}>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
    <div/>
  </div>
);
