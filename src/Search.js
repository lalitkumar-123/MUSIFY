import React from 'react'
import SidebarnotImageSearch from './SidebarnotImageSearch.js'

const code = new URLSearchParams(window.location.search).get("code")

export default function Search() {
    return (
        <>
        <SidebarnotImageSearch code={code}/>
        </>
    )
}
