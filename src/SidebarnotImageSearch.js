import React from 'react'
import {NavLink} from 'react-router-dom'
import AlbumIcon from '@material-ui/icons/Album'
import MusicIcon from '@material-ui/icons/MusicNote'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import SearchRender from './SearchRender'

export default function SidebarnotImageSearch({code}) {
    return (
        <>
        <div  style={{display:"flex"}}>
                <div style={{ height:"100vh", width:"27.05%", backgroundColor:"black", display:"inline-block"}}>
                    <nav aria-label="Main menu" className="navbar navbar-desktop" style={{ marginTop:"40px"}}/>
                    <NavLink to='/' className="btn btn-default mt-2" style={{color:"white", marginRight:"82px", marginLeft:"30px", display:"flex"}}><MusicIcon /><span style={{fontSize:"20px", marginLeft:"10px"}}> MUSIFY</span></NavLink>
                    <ul>
                    <li className="navbar__menu--item" style={{listStyleType:"none"}}>
                        <NavLink to='/dashboard' className="btn btn-default mt-4" style={{marginRight:"82px",color:"white", display:"flex"}}>
                            <HomeIcon />
                            <span style={{marginLeft:"10px"}}>DASHBOARD</span>
                        </NavLink>
                    </li>
                    <li className="navbar__menu--item" style={{listStyleType:"none"}}>
                        <NavLink to='/favourites' className="btn btn-default mt-4" style={{marginRight:"82px", color:"white", display:"flex"}}>
                            <FavoriteBorderIcon />
                            <span style={{marginLeft:"10px"}}>FAVOURITES</span>
                        </NavLink>
                    </li>
                    <li className="navbar__menu--item" style={{listStyleType:"none"}}>
                        <NavLink to="/discover" className="btn btn-default mt-4" style={{marginRight:"82px" ,color:"white", display:"flex"}}>
                            <AlbumIcon />
                            <span style={{marginLeft:"10px"}}>DISCOVER</span>
                        </NavLink>
                    </li>
                    <li className="navbar__menu--item" style={{listStyleType:"none"}}>
                        <NavLink to="/search" className="btn btn-default mt-4" style={{marginRight:"82px", color:"white", display:"flex"}}>
                            <SearchIcon />
                            <span style={{marginLeft:"10px"}}>SEARCH</span>
                        </NavLink>
                    </li>
                    </ul>
                </div>
                <div style={{backgroundColor:"#101010", width:"100%"}}>
                    <SearchRender code={code}/>
                </div>
        </div>
        </>
    )
}
