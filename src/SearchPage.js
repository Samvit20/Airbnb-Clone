import React from 'react';
import './SearchPage.css';
import {Button} from '@material-ui/core';
import SearchResult from './SearchResult.js';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 April to 30 April . 2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at the spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1.5 kitchen . Wifi . Kitchen . Free parking . Washing machine"
                star={4.73}
                price="₹1200/night"
                total="₹5000 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at the spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1.5 kitchen . Wifi . Kitchen . Free parking . Washing machine"
                star={4.73}
                price="₹1200/night"
                total="₹5000 total"
            />
        </div>
    )
}

export default SearchPage;
