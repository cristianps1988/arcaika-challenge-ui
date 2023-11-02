import { Route } from 'react-router-dom'
import React from 'react'
import { Routes } from 'react-router-dom'
import { HomePage, Feed } from '../home/pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/feed' element={<Feed />} />
        </Routes>
    )
}
