import { Link as RouterLink } from '@remix-run/react';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { FlipWords } from '~/components/flip-words/flip-words';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import config from '~/config.json';
import { useInterval, usePrevious, useScrollToHash } from '~/hooks';
import { useHydrated } from '~/hooks/useHydrated';
import Hyperspeed from './Hyperspeed/Hyperspeed';
import styles from './intro.module.css';


// the component will fill the height/width of its parent container, edit the CSS to change this
// the options below are the default values
const DisplacementSphere = () => <Hyperspeed
    effectOptions={{
        onSpeedUp: () => { },

        onSlowDown: () => { },

        distortion: 'turbulentDistortion',

        length: 400,

        roadWidth: 8,

        islandWidth: 2,

        lanesPerRoad: 4,

        fov: 90,

        fovSpeedUp: 150,

        speedUp: 2,

        carLightsFade: 0.4,

        totalSideLightSticks: 20,

        lightPairsPerRoadWay: 40,

        shoulderLinesWidthPercentage: 0.05,

        brokenLinesWidthPercentage: 0.1,

        brokenLinesLengthPercentage: 0.5,

        lightStickWidth: [0.12, 0.5],

        lightStickHeight: [1.3, 1.7],

        movingAwaySpeed: [60, 80],

        movingCloserSpeed: [-120, -160],

        carLightsLength: [400 * 0.03, 400 * 0.2],

        carLightsRadius: [0.05, 0.14],

        carWidthPercentage: [0.3, 0.5],

        carShiftX: [-0.8, 0.8],

        carFloorSeparation: [0, 5],

        colors: {

            roadColor: 0x111111,

            islandColor: 0x111111,

            background: 0x000000,

            shoulderLines: 0xFFFFFF,

            brokenLines: 0xFFFFFF,

            leftCars: [0xD856BF, 0x6750A2, 0xC247AC],

            rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],

            sticks: 0x03B3C3,

        }

    }}

/>
// const DisplacementSphere = lazy(() =>
//     import('./displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
// );

export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
    const { theme } = useTheme();
    const { disciplines } = config;
    const [disciplineIndex, setDisciplineIndex] = useState(0);
    const prevTheme = usePrevious(theme);
    const introLabel = [disciplines.slice(0, -1).join(', '), disciplines.slice(-1)[0]].join(
        ', and '
    );
    const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
    const titleId = `${id}-title`;
    const scrollToHash = useScrollToHash();
    const isHydrated = useHydrated();

    useInterval(
        () => {
            const index = (disciplineIndex + 1) % disciplines.length;
            setDisciplineIndex(index);
        },
        5000,
        theme
    );

    useEffect(() => {
        if (prevTheme && prevTheme !== theme) {
            setDisciplineIndex(0);
        }
    }, [theme, prevTheme]);

    const handleScrollClick = event => {
        event.preventDefault();
        scrollToHash(event.currentTarget.href);
    };

    return (
        <Section
            className={styles.intro}
            as="section"
            ref={sectionRef}
            id={id}
            aria-labelledby={titleId}
            tabIndex={-1}
            {...rest}
        >
            <Transition in key={theme} timeout={3000}>
                {({ visible, status }) => (
                    <>
                        {isHydrated && (
                            <Suspense>
                                <DisplacementSphere />
                            </Suspense>
                        )}
                        <header className={styles.text}>
                            <h1 className={styles.name} data-visible={visible} id={titleId}>
                                <DecoderText text={config.name} delay={500} />
                            </h1>
                            <Heading level={0} as="h2" className={styles.title}>
                                <VisuallyHidden className={styles.label}>
                                    {`${config.role} + ${introLabel}`}
                                </VisuallyHidden>

                                <div className={styles.row}>
                                    <FlipWords
                                        words={disciplines}
                                        duration={3500}
                                    />
                                </div>
                                <span aria-hidden className={styles.row}>
                                    <FlipWords
                                        words={[config.role]}
                                        delay={1.7}
                                    />
                                    {/* <span
                                        className={styles.word}
                                        data-status={status}
                                        style={cssProps({ delay: tokens.base.durationXS })}
                                    >
                                        {config.role}
                                    </span> */}
                                    {/* <span className={styles.line} data-status={status} /> */}
                                </span>
                            </Heading>
                            <br />
                            <br />
                            <div className={styles.button} data-visible={visible}>
                                <Button iconHoverShift href='https://storage.rxresu.me/clp9fxumy8j709hun4xlr5jq1/resumes/Resume-%20Murshal%20Akhtar%20Ansari.pdf' download target="_blank"   >
                                    Download Resume <Icon
                                        className={styles.icon}
                                        data-shift={true}
                                        icon='arrow-right'
                                    />
                                </Button>
                            </div>
                        </header>
                        <RouterLink
                            to="/#project-1"
                            className={styles.scrollIndicator}
                            data-status={status}
                            data-hidden={scrollIndicatorHidden}
                            onClick={handleScrollClick}
                        >
                            <VisuallyHidden>Scroll to projects</VisuallyHidden>
                        </RouterLink>
                        <RouterLink
                            to="/#project-1"
                            className={styles.mobileScrollIndicator}
                            data-status={status}
                            data-hidden={scrollIndicatorHidden}
                            onClick={handleScrollClick}
                        >
                            <VisuallyHidden>Scroll to projects</VisuallyHidden>
                            <svg
                                aria-hidden
                                stroke="currentColor"
                                width="43"
                                height="15"
                                viewBox="0 0 43 15"
                            >
                                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
                            </svg>
                        </RouterLink>
                    </>
                )}
            </Transition>
        </Section>
    );
}
