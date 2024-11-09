import { lazy, useState } from 'react';
import backgroundSfcLarge from '~/assets/sfc-background-large.jpg';
import backgroundSfcPlaceholder from '~/assets/sfc-background-placeholder.jpg';
import backgroundSfc from '~/assets/sfc-background.jpg';
import imageSfcLessonBuilderDarkLarge from '~/assets/sfc-dark-large.jpg';
import imageSfcLessonBuilderDarkPlaceholder from '~/assets/sfc-dark-placeholder.jpg';
import imageSfcLessonBuilderDark from '~/assets/sfc-dark.jpg';
import imageSfcFaceVerificationLarge from '~/assets/sfc-face-verification-large.jpg';
import imageSfcFaceVerificationPlaceholder from '~/assets/sfc-face-verification-placeholder.jpg';
import imageSfcFaceVerification from '~/assets/sfc-face-verification.jpg';
import imageSfcIdVerificationLarge from '~/assets/sfc-id-verification-large.jpg';
import imageSfcIdVerificationPlaceholder from '~/assets/sfc-id-verification-placeholder.jpg';
import imageSfcIdVerification from '~/assets/sfc-id-verification.jpg';
import imageSfcLessonBuilderLightLarge from '~/assets/sfc-light-large.jpg';
import imageSfcLessonBuilderLightPlaceholder from '~/assets/sfc-light-placeholder.jpg';
import imageSfcLessonBuilderLight from '~/assets/sfc-light.jpg';
import imageSfcBackgroundVolcanismLarge from '~/assets/sfc-background-volcanism-large.jpg';
import imageSfcBackgroundVolcanismPlaceholder from '~/assets/sfc-background-volcanism-placeholder.jpg';
import imageSfcBackgroundVolcanism from '~/assets/sfc-background-volcanism.jpg';
import imageSfcDesignSystemDarkLarge from '~/assets/sfc-design-system-dark-large.png';
import imageSfcDesignSystemDarkPlaceholder from '~/assets/sfc-design-system-dark-placeholder.png';
import imageSfcDesignSystemDark from '~/assets/sfc-design-system-dark.png';
import imageSfcDesignSystemLightLarge from '~/assets/sfc-design-system-light-large.png';
import imageSfcDesignSystemLightPlaceholder from '~/assets/sfc-design-system-light-placeholder.png';
import imageSfcDesignSystemLight from '~/assets/sfc-design-system-light.png';
import videoSfcMotionLarge from '~/assets/sfc-motion-large.jpg';
import videoSfcMotionPlaceholder from '~/assets/sfc-motion-placeholder.jpg';
import videoSfcMotion from '~/assets/sfc-motion.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
    ProjectBackground,
    ProjectContainer,
    ProjectHeader,
    ProjectImage,
    ProjectSection,
    ProjectSectionColumns,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './safety-first-consulting.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
    import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Occupational, Miner and Safety Online Training, Assessment And Certification';
const description =
    'I embarked on the exciting journey of creating Safety First Consulting’s web application from scratch. The goal was to build a secure platform that not only provided valuable safety training but also safeguarded user data and ensured identity verification. In this case study, I’ll share the process, challenges, and outcomes of this project.';
const roles = [
    'UX Design',
    'Front-End Development',
    'Back-End Development & Database Design',
    'Database Design',
    'Security Implementation',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const SafetyFirstConsulting = () => {
    const [verificationImageType, setVerificationImageType] = useState('id');
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    const themes = ['dark', 'light'];

    const handleVerificationImageChange = index => {
        setVerificationImageType(t => t === 'id' ? 'face' : 'id')
    };

    return (
        <>
            <ProjectContainer>
                <ProjectBackground
                    opacity={isDark ? 0.5 : 0.8}
                    src={backgroundSfc}
                    srcSet={`${backgroundSfc} 1080w, ${backgroundSfcLarge} 2160w`}
                    placeholder={backgroundSfcPlaceholder}
                />
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://safetyfirstconsulting.org/"
                    roles={roles}
                />
                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <ProjectImage
                            raised
                            key={theme}
                            srcSet={
                                isDark
                                    ? `${imageSfcLessonBuilderDark} 1280w, ${imageSfcLessonBuilderDarkLarge} 2560w`
                                    : `${imageSfcLessonBuilderLight} 1280w, ${imageSfcLessonBuilderLightLarge} 2560w`
                            }
                            width={1280}
                            height={800}
                            placeholder={
                                isDark
                                    ? imageSfcLessonBuilderDarkPlaceholder
                                    : imageSfcLessonBuilderLightPlaceholder
                            }
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                            alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>The problem</ProjectSectionHeading>
                        <ProjectSectionText>
                            <p>Safety First Consulting faced several critical requirements:</p>
                            <br />

                            <p>
                                <strong>Identity Verification:</strong>
                                <br />
                                During account creation, users had to verify their identity using driver’s license.
                                Face verification was necessary to prevent cheating during course assessments.
                            </p>
                            <p>
                                <strong>Security and Data Encryption:</strong>
                                <br />
                                User data had to be stored securely, ensuring confidentiality and integrity.
                                Encryption was essential to protect sensitive information.
                            </p>
                            <p>
                                <strong>Training Courses and Certification:</strong>
                                <br />
                                Users needed access to training materials (text, images, videos) for various safety topics.
                                After completing a course assessment, users should receive a certificate.
                            </p>
                        </ProjectSectionText>

                    </ProjectTextRow>
                </ProjectSection>
                <ProjectSection light={isDark}>
                    <ProjectSectionContent>
                        <Image
                            key={theme}
                            srcSet={
                                verificationImageType === 'face'
                                    ? `${imageSfcFaceVerification} 1024w, ${imageSfcFaceVerificationLarge} 2048w`
                                    : `${imageSfcIdVerification} 1024w, ${imageSfcIdVerificationLarge} 2048w`
                            }
                            width={1024}
                            height={800}
                            placeholder={
                                verificationImageType === 'face'
                                    ? imageSfcFaceVerificationPlaceholder
                                    : imageSfcIdVerificationPlaceholder
                            }
                            alt={`A set of ${theme} themed components for the aero design system`}
                            sizes="100vw"
                        />
                        <ProjectTextRow>
                            <SegmentedControl
                                currentIndex={verificationImageType === 'id' ? 0 : 1}
                                onChange={handleVerificationImageChange}
                            >
                                <SegmentedControlOption>ID Verification</SegmentedControlOption>
                                <SegmentedControlOption>Face Verification</SegmentedControlOption>
                            </SegmentedControl>
                        </ProjectTextRow>
                        <ProjectTextRow>
                            <ProjectSectionHeading>User Identify Verification</ProjectSectionHeading>
                            <ProjectSectionText>
                                The integration of driver's license and facial verification through the Microsoft Face API during account registration significantly bolstered the identity verification process. This enhancement has played a critical role in mitigating the risk of fraudulent activities. By leveraging advanced facial recognition technology, the system ensures a higher level of accuracy and reliability in authenticating user identities. The implementation of these verification measures not only streamlines the registration process but also fortifies security protocols, thereby safeguarding the platform against potential fraud. This approach underscores the importance of incorporating cutting-edge technology in identity verification processes to maintain the integrity and trustworthiness of digital platforms. Consequently, the adoption of the Microsoft Face API for driver's license and face verification represents a substantial advancement in the efforts to combat fraud, providing a robust framework for secure and reliable user authentication.
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionContent>
                        <Image
                            raised
                            key={theme}
                            srcSet={
                                !isDark
                                    ? `${imageSfcDesignSystemDark} 1280w, ${imageSfcDesignSystemDarkLarge} 2560w`
                                    : `${imageSfcDesignSystemLight} 1280w, ${imageSfcDesignSystemLightLarge} 2560w`
                            }
                            width={1280}
                            height={800}
                            placeholder={
                                !isDark
                                    ? imageSfcDesignSystemDarkPlaceholder
                                    : imageSfcDesignSystemLightPlaceholder
                            }
                            alt="The homepage of the aero design system docs website linking to principles and components."
                            sizes="100vw"
                        />
                        <ProjectTextRow>
                            <ProjectSectionHeading>Data Encryption & Security</ProjectSectionHeading>
                            <ProjectSectionText>
                                We chose Laravel as the framework for its web application due to its robust security features and extensive ecosystem of packages.
                                The application used Laravel Fortify for authentication, enabling secure user registration, login, and password reset functionalities.
                                We utilize Laravel's built-in encryption, specifically AES-256, alongside accessors and mutators to automatically encrypt user data stored in the database, thereby ensuring data confidentiality and integrity.
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
                <ThemeProvider theme="dark" data-invert>
                    <ProjectSection
                        backgroundOverlayOpacity={0.5}
                        backgroundElement={
                            <Image
                                srcSet={`${imageSfcBackgroundVolcanism} 1280w, ${imageSfcBackgroundVolcanismLarge} 2560w`}
                                width={1280}
                                height={900}
                                placeholder={imageSfcBackgroundVolcanismPlaceholder}
                                alt="A dramatic ocean scene with lava forming a new land mass."
                                sizes="100vw"
                            />
                        }
                    >
                        <ProjectSectionColumns width="full">
                            <ProjectSectionContent width="full">
                                <ProjectTextRow width="s">
                                    <ProjectSectionHeading>Anti cheat system</ProjectSectionHeading>
                                    <ProjectSectionText>
                                        The application utilized Microsoft Face API for face verification during training course tests, enabling real-time verification of user identity
                                        during assessment. The Face API provides AI algorithms to detect, recognize, and analyze human faces in images.
                                        During training course tests, the Face API can verify a user’s identity by comparing their face with the trained face model created using face data provided during account creation.
                                        This real-time verification helps prevent cheating and ensures the integrity of assessments.
                                    </ProjectSectionText>
                                </ProjectTextRow>
                            </ProjectSectionContent>
                            <Image
                                raised
                                className={styles.video}
                                srcSet={`${videoSfcMotion} 1280w, ${videoSfcMotionLarge} 2560w`}
                                width={1280}
                                height={800}
                                placeholder={videoSfcMotionPlaceholder}
                                alt="A learning developer building and deploying an interactive lesson on volcanism using the app."
                                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                            />
                        </ProjectSectionColumns>
                    </ProjectSection>
                </ThemeProvider>
                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
                            <ProjectSectionText>
                                Ultimately the project was successful after Safety First Consulting
                                was able to launch their online training platform. The application
                                was able to provide valuable safety training to users while ensuring
                                the security of user data and identity verification.
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </>
    );
};
