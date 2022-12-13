import React, { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'


const Header = lazy(() => import("../components/Header/index"))
const Footer = lazy(() => import("../components/Footer/index"))

export default function MainLayout() {
    return (
        <Suspense fallback={ <p>Loading...</p> }>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Suspense>
    )
}
