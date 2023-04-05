import React from 'react'
// using context
import {useAuth} from '../hooks/useAuth'

const apiUrl = 'https://www.yyy.dsgaff.com/'
// const apiUrl = 'http://127.0.0.1:8000/'


export function LogoutFromError () {
        // useStates for context
        const {authData, setAuth} =useAuth()
        setAuth(false)
}


//login function
export function auth(credentials) {
    return fetch(`${apiUrl}api/v1/auth/jwt/create/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }
    ).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}

    // http://127.0.0.1:8000/api/v1/results/results/
  // function for fetching profiles
  export function fetch_results(acc_token, appDate) {

    // const {authData, setAuth} =useAuth()
    if (appDate === "") {
        var reportDate = ""
    } else {
        reportDate= "reportDate"
    }


    return fetch(`${apiUrl}api/v1/results/results/?${reportDate}=${appDate}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${acc_token}`
        },
        // because we cannot add body to GET
        // body: JSON.stringify(player)
    }
    ).then(resp => resp.json())
    .catch( e => {
        // setAuth(null)
        console.log(e)
        LogoutFromError()
    })
} 

export function fetch_settlements(acc_token) {


    return fetch(`${apiUrl}api/v1/settlement/player`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${acc_token}`
        },
        // because we cannot add body to GET
        // body: JSON.stringify(player)
    }
    ).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
} 

export function fetch_Reports(acc_token) {


    return fetch(`${apiUrl}api/v1/results/reports`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${acc_token}`
        },
        // because we cannot add body to GET
        // body: JSON.stringify(player)
    }
    ).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
} 