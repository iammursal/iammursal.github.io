import { createCookieSessionStorage, json } from '@remix-run/cloudflare';
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useFetcher,
    useLoaderData,
    useNavigation,
    useRouteError,
} from '@remix-run/react';
import { useEffect, useState } from 'react';
import GothamBook from '~/assets/fonts/gotham-book.woff2';
import GothamMedium from '~/assets/fonts/gotham-medium.woff2';
import { Progress } from '~/components/progress';
import { ThemeProvider, themeStyles } from '~/components/theme-provider';
import { VisuallyHidden } from '~/components/visually-hidden';
import config from '~/config.json';
import { Error } from '~/layouts/error';
import { Navbar } from '~/layouts/navbar';
import { AnimatedCursor } from './AnimatedCursor';
import globalStylesheetUrl from './global.module.css';
import resetStylesheetUrl from './reset.module.css';
import styles from './root.module.css';

export const links = () => [
    {
        rel: 'preload',
        href: GothamMedium,
        as: 'font',
        type: 'font/woff2',
        crossOrigin: '',
    },
    {
        rel: 'preload',
        href: GothamBook,
        as: 'font',
        type: 'font/woff2',
        crossOrigin: '',
    },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'shortcut_icon', href: '/shortcut.png', type: 'image/png', sizes: '64x64' },
    { rel: 'apple-touch-icon', href: '/icon-256.png', sizes: '256x256' },
    { rel: 'author', href: '/humans.txt', type: 'text/plain' },
    { rel: "stylesheet", href: globalStylesheetUrl },
    { rel: "stylesheet", href: resetStylesheetUrl }
];


export default function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [isCursor, setIsCursor] = useState(false);
    const canonicalUrl = 'iammursal.github.io';
    const fetcher = useFetcher();
    const { state } = useNavigation();


    function toggleTheme(newTheme) {
        // if (newTheme) {
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
        setTheme(localStorage.getItem('theme'));
        // } else {
        //     localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
        // }
        // fetcher.submit(
        //     { theme: newTheme ? newTheme : theme === 'dark' ? 'light' : 'dark' },
        //     { action: '/api/set-theme', method: 'post' }
        // );
    }

    useEffect(() => {
        console.info(
            `${config.ascii}\n`,
            `Taking a peek huh? Check out the source code: ${config.repo}\n\n`
        );
        setIsCursor(true);
    }, []);

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Theme color doesn't support oklch so I'm hard coding these hexes for now */}
                <meta name="theme-color" content={theme === 'dark' ? '#111' : '#F2F2F2'} />
                <meta
                    name="color-scheme"
                    content={theme === 'light' ? 'light dark' : 'dark light'}
                />
                <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
                <Meta />
                <Links />
                <link rel="canonical" href={canonicalUrl} />
            </head>
            <body data-theme={theme}>
                <div className="grain" />
                <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
                    <Progress />
                    <VisuallyHidden showOnFocus as="a" className={styles.skip} href="#main-content">
                        Skip to main content
                    </VisuallyHidden>
                    <Navbar />
                    <main
                        id="main-content"
                        className={styles.container}
                        tabIndex={-1}
                        data-loading={state === 'loading'}
                    >
                        <Outlet />
                    </main>
                    {isCursor && <AnimatedCursor />}
                </ThemeProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#111" />
                <meta name="color-scheme" content="dark light" />
                <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
                <Meta />
                <Links />
            </head>
            <body data-theme="dark">
                <Error error={error} />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
