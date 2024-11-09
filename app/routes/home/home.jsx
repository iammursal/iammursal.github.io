import { useEffect, useRef, useState } from 'react';
import sliceTextureLarge from '~/assets/kcst-large.jpg';
import sliceTexturePlaceholder from '~/assets/kcst-placeholder.jpg';
import sliceTexture from '~/assets/kcst.jpg';
import propnexVomTexture2Large from '~/assets/propnexVom-list-large.jpg';
import propnexVomTexture2Placeholder from '~/assets/propnexVom-list-placeholder.jpg';
import propnexVomTexture2 from '~/assets/propnexVom-list.jpg';
import propnexVomTextureLarge from '~/assets/propnexVom-login-large.jpg';
import propnexVomTexturePlaceholder from '~/assets/propnexVom-login-placeholder.jpg';
import propnexVomTexture from '~/assets/propnexVom-login.jpg';
import sfcTextureLarge from '~/assets/sfc-dark-large.jpg';
import sfcTexturePlaceholder from '~/assets/sfc-dark-placeholder.jpg';
import sfcTexture from '~/assets/sfc-dark.jpg';
import { Footer } from '~/components/footer';
import config from '~/config.json';
import { baseMeta } from '~/utils/meta';
import styles from './home.module.css';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';

// Prefetch draco decoader wasm
export const links = () => {
    return [
        {
            rel: 'prefetch',
            href: '/draco/draco_wasm_wrapper.js',
            as: 'script',
            type: 'text/javascript',
            importance: 'low',
        },
        {
            rel: 'prefetch',
            href: '/draco/draco_decoder.wasm',
            as: 'fetch',
            type: 'application/wasm',
            importance: 'low',
        },
    ];
};

export const meta = () => {
    return baseMeta({
        title: 'Full stack web and mobile app developer',
        description: `Portfolio of ${config.name} — a product developer working on web & mobile apps with a focus on performance, security, and accessibility`
    });
};

export const Home = () => {
    const [visibleSections, setVisibleSections] = useState([]);
    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
    const intro = useRef();
    const projectOne = useRef();
    const projectTwo = useRef();
    const projectThree = useRef();
    const details = useRef();
    useEffect(() => {
        const sections = [intro, projectOne, projectTwo, projectThree, details];

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target;
                        observer.unobserve(section);
                        if (visibleSections.includes(section)) return;
                        setVisibleSections(prevSections => [...prevSections, section]);
                    }
                });
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
        );

        const indicatorObserver = new IntersectionObserver(
            ([entry]) => {
                setScrollIndicatorHidden(!entry.isIntersecting);
            },
            { rootMargin: '-100% 0px 0px 0px' }
        );

        sections.forEach(section => {
            sectionObserver.observe(section.current);
        });

        indicatorObserver.observe(intro.current);

        return () => {
            sectionObserver.disconnect();
            indicatorObserver.disconnect();
        };
    }, [visibleSections]);

    return (
        <div className={styles.home}>
            <Intro
                id="intro"
                sectionRef={intro}
                scrollIndicatorHidden={scrollIndicatorHidden}
            />
            <ProjectSummary
                id="project-1"
                sectionRef={projectOne}
                visible={visibleSections.includes(projectOne.current)}
                index={1}
                title="Occupational, Miner and Safety Online Training, Assessment And Certification"
                description="Development for a online training, assessment and certification platform"
                buttonText="View project"
                buttonLink="/projects/safety-first-consulting"
                model={{
                    type: 'laptop',
                    alt: 'Safety First Consulting Training & Certification',
                    textures: [
                        {
                            srcSet: `${sfcTexture} 1280w, ${sfcTextureLarge} 2560w`,
                            placeholder: sfcTexturePlaceholder,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-2"
                alternate
                sectionRef={projectTwo}
                visible={visibleSections.includes(projectTwo.current)}
                index={2}
                title="Agent performance tracking"
                description="Design and development for a Agent performance tracking app built in React Native"
                buttonText="App Store"
                buttonLink="https://apps.apple.com/in/app/propnex-vom/id1605953608"
                buttonTextTwo="Play Store"
                buttonLinkTwo="https://play.google.com/store/apps/details?id=com.propnexvom.app"
                model={{
                    type: 'phone',
                    alt: 'App login screen',
                    textures: [
                        {
                            srcSet: `${propnexVomTexture} 375w, ${propnexVomTextureLarge} 750w`,
                            placeholder: propnexVomTexturePlaceholder,
                        },
                        {
                            srcSet: `${propnexVomTexture2} 375w, ${propnexVomTexture2Large} 750w`,
                            placeholder: propnexVomTexture2Placeholder,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-3"
                sectionRef={projectThree}
                visible={visibleSections.includes(projectThree.current)}
                index={3}
                title="Kuwait College of Science and Technology"
                description="Backend and frontend development for a university website"
                buttonText="View project"
                buttonLink="#"
                onClick={() => window.open('https://kcst.edu.kw/', '_blank')}
                target="_blank"
                noreferrer
                model={{
                    type: 'laptop',
                    alt: 'Kuwait College of Science and Technology',
                    textures: [
                        {
                            srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
                            placeholder: sliceTexturePlaceholder,
                        },
                    ],
                }}
            />
            <Profile
                sectionRef={details}
                visible={visibleSections.includes(details.current)}
                id="details"
            />
            <Footer />
        </div>
    );
};
