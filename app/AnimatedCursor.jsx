import { useLocation } from '@remix-run/react'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import './animatedCursor.css'
import { useTheme } from './components/theme-provider'

function useEventListener(eventName, handler, element = document) {
    const savedHandler = useRef()

    useEffect(() => {
        savedHandler.current = handler
    }, [handler])

    useEffect(() => {
        const isSupported = element?.addEventListener
        if (!isSupported) return

        const eventListener = (event) => savedHandler.current(event)

        element.addEventListener(eventName, eventListener)

        return () => {
            element.removeEventListener(eventName, eventListener)
        }
    }, [eventName, element])
}

/**
 * Animated Cursor
 * Replaces the native cursor with a custom animated cursor.
 *
 * @author Stephen Scaff
 */
export function AnimatedCursor({
    color = {
        outer: {
            dark: '255, 255, 255',
            light: '255, 255, 255',
        },
        inner: {
            dark: '200, 200, 200',
            light: '255, 255, 255'
        }
    },
    outerAlpha = .9,
    innerSize = 8,
    outerSize = 40,
    outerScale = 2,
    innerScale = 0.7
}) {
    const { theme } = useTheme()
    const location = useLocation()
    const cursorOuterRef = useRef()
    const cursorInnerRef = useRef()
    const requestRef = useRef()
    const previousTimeRef = useRef()
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(true)
    const [isActive, setIsActive] = useState(false)
    const [isActiveClickable, setIsActiveClickable] = useState(false)
    const endX = useRef(0)
    const endY = useRef(0)

    // on navigate make outter smaller/default
    useEffect(() => {
        console.log({ location })
        setIsActive(false)
    }, [location])

    const onMouseMove = useCallback(({ clientX, clientY }) => {
        setCoords({ x: clientX, y: clientY })
        cursorInnerRef.current.style.top = `${clientY}px`
        cursorInnerRef.current.style.left = `${clientX}px`
        endX.current = clientX
        endY.current = clientY
    }, [])

    const animateOuterCursor = useCallback(
        (time) => {
            if (previousTimeRef.current !== undefined) {
                coords.x += (endX.current - coords.x - 16) / 14
                coords.y += (endY.current - coords.y - 16) / 14
                cursorOuterRef.current.style.top = `${coords.y}px`
                cursorOuterRef.current.style.left = `${coords.x}px`
            }
            previousTimeRef.current = time
            requestRef.current = requestAnimationFrame(animateOuterCursor)
        },
        [requestRef] // eslint-disable-line
    )

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animateOuterCursor)
    }, []) // Empty dependency array

    const onMouseDown = useCallback(() => setIsActive(true), [])
    const onMouseUp = useCallback(() => setIsActive(false), [])
    const onMouseEnter = useCallback(() => setIsVisible(true), [])
    const onMouseLeave = useCallback(() => setIsVisible(false), [])

    useEventListener('mousemove', onMouseMove, document)
    useEventListener('mousedown', onMouseDown, document)
    useEventListener('mouseup', onMouseUp, document)
    useEventListener('mouseenter', onMouseEnter, document)
    useEventListener('mouseleave', onMouseLeave, document)

    useEffect(() => {
        if (isActive) {
            cursorInnerRef.current.style.transform = `scale(${innerScale})`
            cursorOuterRef.current.style.transform = `scale(${outerScale})`
        } else {
            cursorInnerRef.current.style.transform = 'scale(1)'
            cursorOuterRef.current.style.transform = 'scale(1)'
        }
    }, [innerScale, outerScale, isActive])

    useEffect(() => {
        if (isActiveClickable) {
            cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`
            cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`
        }
    }, [innerScale, outerScale, isActiveClickable])

    useEffect(() => {
        if (isVisible) {
            cursorInnerRef.current.style.opacity = 1
            cursorOuterRef.current.style.opacity = 1
        } else {
            cursorInnerRef.current.style.opacity = 0
            cursorOuterRef.current.style.opacity = 0
        }
    }, [isVisible])

    useEffect(() => {
        const clickables = document.querySelectorAll(
            'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
        )
        for (const el of clickables) {
            el.style.cursor = 'none'

            el.addEventListener('mouseover', () => {
                setIsActive(true)
            })
            el.addEventListener('click', () => {
                setIsActive(true)
                setIsActiveClickable(false)
            })
            el.addEventListener('mousedown', () => {
                setIsActiveClickable(true)
            })
            el.addEventListener('mouseup', () => {
                setIsActive(true)
            })
            el.addEventListener('mouseout', () => {
                setIsActive(false)
                setIsActiveClickable(false)
            })
        }

        return () => {
            for (const el of clickables) {
                el.removeEventListener('mouseover', () => {
                    setIsActive(true)
                })
                el.removeEventListener('click', () => {
                    setIsActive(true)
                    setIsActiveClickable(false)
                })
                el.removeEventListener('mousedown', () => {
                    setIsActiveClickable(true)
                })
                el.removeEventListener('mouseup', () => {
                    setIsActive(true)
                })
                el.removeEventListener('mouseout', () => {
                    setIsActive(false)
                    setIsActiveClickable(false)
                })
            }
        }
    }, [isActive])

    const innerColor = theme === 'dark' ? color.inner.light : color.inner.dark
    const outerColor = theme === 'dark' ? color.outer.light : color.outer.dark
    const styles = {
        cursor: {
            zIndex: 999999999999999,
            position: 'fixed',
            opacity: 1,
            pointerEvents: 'none',
            transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
        },
        cursorInner: {
            zIndex: 999999999999999,
            position: 'fixed',
            borderRadius: '50%',
            width: innerSize,
            height: innerSize,
            pointerEvents: 'none',
            backgroundColor: `rgba(${innerColor}, 1)`,
            mixBlendMode: theme === 'light' ? 'difference' : 'difference',
            transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out'
        },
        cursorOuter: {
            zIndex: 999999999999999,
            position: 'fixed',
            borderRadius: '50%',
            pointerEvents: 'none',
            width: outerSize,
            height: outerSize,
            // clip background
            // backgroundClip: 'content-box',
            mixBlendMode: theme === 'dark' ? 'overlay' : 'difference',
            // filter: 'saturate(-100%)',
            backgroundColor: `rgba(${outerColor}, ${outerAlpha})`,
            transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
        }
    }

    if (theme === 'dark') {
    }



    return (
        <Fragment>
            <div ref={cursorOuterRef} style={styles.cursorOuter} />
            <div ref={cursorInnerRef} style={styles.cursorInner} />
        </Fragment>
    )
}
