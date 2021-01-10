import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Testing = () => {

    
    //get data
    const getData = item => {
        axiosWithAuth()
            .get(`/insert server endpoint`)
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})
    }

    //add data
    const addData = item => {
        
    }

    //delete data
    const deleteData = item => {
        
    }

    //update data
    const updateData = item => {
        
    }


    return (
        <div>
            <h2>Dashboard Data</h2>
        </div>
    )
}

export default Testing;