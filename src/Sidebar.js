import React from 'react'
import Image from './Asset/headphone.png'
import {NavLink} from 'react-router-dom'
import AlbumIcon from '@material-ui/icons/Album'
import MusicIcon from '@material-ui/icons/MusicNote'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import HomeIcon from '@material-ui/icons/Home'
import './Sidebar.css'
import {Button} from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search'

const Client_Id = "870aaff6b58d45c7966b777713414204"
const Spotify_Endpoint = "https://accounts.spotify.com/authorize"
const Redirect_Url = "https://accounts.spotify.com/authorize?client_id=870aaff6b58d45c7966b777713414204&response_type=code&redirect_uri=http://localhost:3000/search&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Sidebar({code}) {
    return (
        !code ? <>
        <div  style={{display:"flex"}}>
                <div style={{ height:"100vh", width:"28%", backgroundColor:"black", display:"inline-block"}}>
                    <nav aria-label="Main menu" className="navbar navbar-desktop" style={{ marginTop:"40px"}}/>
                    <NavLink to='/' className="btn btn-default mt-2" style={{color:"white", marginRight:"82px", marginLeft:"30px", display:"flex"}} onClick={e => e.preventDefault()}><MusicIcon /><span style={{fontSize:"20px", marginLeft:"10px"}}> MUSIFY</span></NavLink>
                    <ul>
                    <li className="navbar__menu--item" style={{listStyleType:"none"}}>
                        <NavLink to='/dashboard' className="btn btn-default mt-4" style={{marginRight:"82px",color:"white", display:"flex"}} onClick={e => e.preventDefault()}>
                            <HomeIcon />
                            <span style={{marginLeft:"10px"}}>DASHBOARD</span>
                        </NavLink>
                    </li>
                    <li className="navbar__menu--item" style={{listStyleType:"none"}}>
                        <NavLink to='/favourites' className="btn btn-default mt-4" style={{marginRight:"82px", color:"white", display:"flex"}} onClick={e => e.preventDefault()}>
                            <FavoriteBorderIcon />
                            <span style={{marginLeft:"10px"}}>FAVOURITES</span>
                        </NavLink>
                    </li>
                    <li className="navbar__menu--item" style={{listStyleType:"none"}}>
                        <NavLink to="/discover" className="btn btn-default mt-4" style={{marginRight:"82px" ,color:"white", display:"flex"}} onClick={e => e.preventDefault()}>
                            <AlbumIcon />
                            <span style={{marginLeft:"10px"}}>DISCOVER</span>
                        </NavLink>
                    </li>
                    <li className="navbar__menu--item" style={{listStyleType:"none"}}>
                        <NavLink to="/search" className="btn btn-default mt-4" style={{marginRight:"82px", color:"white", display:"flex"}} onClick={e => e.preventDefault()}>
                            <SearchIcon />
                            <span style={{marginLeft:"10px"}}>SEARCH</span>
                        </NavLink>
                    </li>
                    </ul>
                </div>
                <div style={{backgroundColor:"#101010"}}>
                    <img src={Image} alt="" style={{marginLeft:"320px", width:"400px", marginTop:"50px"}} />
                    <a href={Redirect_Url}><Button className="btn-default" style={{marginLeft:"450px", width:"150px", marginTop:"8px"}}>Login</Button></a>
                    <br/><small style={{color:"white", marginLeft:"360px"}}>Need an account? <a href="https://www.spotify.com/se/signup/" className="anchor" style={{textDecoration:"none", color:"white"}}>Sign up for free to start listening</a></small>
                </div>
        </div>
        </> :
        <>
        <div  style={{display:"flex"}}>
                <div style={{ height:"100vh", width:"28%", backgroundColor:"black", display:"inline-block"}}>
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
                <div style={{backgroundColor:"#101010"}}>
                    <img src={Image} alt="" style={{marginLeft:"320px", width:"400px", marginTop:"50px"}} />
                    <a href={Redirect_Url}><Button className="btn-default" style={{marginLeft:"450px", width:"150px", marginTop:"8px"}}>Login</Button></a>
                    <br/><small style={{color:"white", marginLeft:"360px"}}>Need an account? <a href="https://www.spotify.com/se/signup/" className="anchor" style={{textDecoration:"none", color:"white"}}>Sign up for free to start listening</a></small>
                </div>
        </div>
        </>
    )
}
