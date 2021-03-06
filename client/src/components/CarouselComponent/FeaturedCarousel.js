import React, { useState } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux'

//core components
import FeaturedEventsComponent from '../FeaturedEventsComponent/FeaturedEventsComponent'

// @material-ui/core
import Carousel from 'react-elastic-carousel'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    indicators: {
        position: "absolute",
        transform: "scale(2) rotate(90deg)",
        width: "100px",
        right: 0,
        padding: 0,
        zIndex: 1000,
        top: "80%",
        boxSizing: "border-box"
    },
})

const FeaturedCarousel = () => {
    const classes = useStyles()
    const [isActive, setIsActive] = useState(1)

    //preload featured events
    const featuredEvents = useSelector(state => state.eventsSlice.featuredEvents)

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ]

    const everyComponent = featuredEvents ? featuredEvents.map((event, i) => (
        <FeaturedEventsComponent
            key={i}
            event={event}
        />
    )) : <></>
    return (
        <>
            {featuredEvents ? <Carousel
            breakPoints={breakPoints}
            itemPadding={[0, 10, 0, 10]}
            pagination={false}
            disableArrowsOnEnd={false}
            className='rec-arrow'
            >
                {everyComponent}
            </Carousel>: null }
        </>
    );
};


export default FeaturedCarousel;

