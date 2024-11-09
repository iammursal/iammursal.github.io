import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import { Image } from '../image';
import { useTheme } from '../theme-provider';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
    const id = useId();
    const { theme } = useTheme()
    const clipId = `${id}monogram-clip`;

    return <Image src="/icon.svg"
        style={{
            width: '50px !important',
            filter: theme === 'dark' ? 'invert(100%)' : ''
        }}
    />

    return (
        <svg
            aria-hidden
            className={classes(styles.monogram, className)}
            width="48"
            height="29"
            viewBox="0 0 48 29"
            ref={ref}
            {...props}
        >
            <defs>
                <clipPath id={clipId}>
                    <path d="m48 29h-6.5q-0.8 0-1.6-0.2-0.7-0.2-1.4-0.6-0.7-0.5-1.3-1-0.5-0.6-0.9-1.3l-7.7-13.9-4 9 4.4 8h-6.5q-0.8 0-1.6-0.2-0.7-0.2-1.4-0.6-0.7-0.5-1.3-1-0.5-0.6-0.9-1.3l-8.8-15.9 4.5-10 10.5 19 8.5-19zm-43.5-10l5.5 10h-7q-0.5 0-0.9-0.3-0.4-0.2-0.7-0.7-0.2-0.4-0.3-0.9 0-0.5 0.2-0.9z" />
                </clipPath>
            </defs>
            <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
            {highlight && (
                <g clipPath={`url(#${clipId})`}>
                    <rect className={styles.highlight} width="100%" height="100%" />
                </g>
            )}
        </svg>
    );
});
