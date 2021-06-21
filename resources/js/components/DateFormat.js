import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';

function DateFormat(date_time) {
    const obj_date = new Date(date_time);
    const year = obj_date.getFullYear();
    const month = obj_date.getMonth()+1;
    const day = obj_date.getDate();
    return year + "/" + month + "/" + day;
}
export default DateFormat;
