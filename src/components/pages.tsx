'use client'
'use strict'
import { Home } from './carousel/page'
import { Services } from './services/page'
import { Projects } from './projects/page'
import { ContactUs } from './contact/page'
import { AboutUs } from './about/pages'
import React, { useState } from 'react';
import { AboutOverview } from './about/overview/pages'
import { OurTeam } from './about/team/page'
import { Speacilization } from './about/specialization/page'


export const DefaultComponents = () => {
    const [viewComponents, setViewComponents] = useState('/'); 
    return (
        <>
            { viewComponents === '/' && (
                <>
                    <Home />
                    <Services />
                    <Projects />
                    <ContactUs />
                    <AboutUs setViewComponents = { setViewComponents }/>
                </>
            )}
            { viewComponents === 'overview' && (
                <>
                    <AboutOverview />
                </>
            )}
            { viewComponents === 'our-team' && (
                <>
                    <OurTeam />
                </>
            )}
            { viewComponents === 'specializations' && (
                <>
                    <Speacilization />
                </>
            )}
        </>
    )
}