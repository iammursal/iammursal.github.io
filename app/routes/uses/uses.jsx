import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
    ProjectBackground,
    ProjectContainer,
    ProjectHeader,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
    return baseMeta({
        title: 'Uses',
        description: 'A list of hardware and software I use to do my thing',
    });
};

export const Uses = () => {
    return (
        <>
            <ProjectContainer className={styles.uses}>
                <ProjectBackground
                    src={usesBackground}
                    placeholder={usesBackgroundPlaceholder}
                    opacity={0.7}
                />
                <ProjectHeader
                    title="Uses"
                    description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things."
                />
                <ProjectSection padding="none" className={styles.section}>
                    <ProjectSectionContent>
                        <ProjectTextRow width="m">
                            <ProjectSectionHeading>Design</ProjectSectionHeading>
                            <ProjectSectionText as="div">
                                <List>
                                    <ListItem>
                                        <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                                        UI design these days. It’s fast, easy to use, and has great collaboration features.
                                        Also, the generous free tier is a big plus.
                                    </ListItem>
                                    <ListItem>
                                        When ever I need to do some quick edits to images, <Link href="https://www.photopea.com/">Photopea</Link> is
                                        my tool of choice. Great alternate to Photoshop for basic photo editing.
                                    </ListItem>
                                </List>
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection padding="none" className={styles.section}>
                    <ProjectSectionContent>
                        <ProjectTextRow width="m">
                            <ProjectSectionHeading>Development</ProjectSectionHeading>
                            <ProjectSectionText as="div">
                                <List>
                                    <ListItem>
                                        I use <Link href="https://code.visualstudio.com/">VSCode</Link> as my text
                                        editor, with the Monokai Pro theme and Operator Mono Lig as my typeface of
                                        choice.
                                    </ListItem>
                                    <ListItem>
                                        <Link href="https://brave.com/">Brave</Link> is my main browser on my macbook for both development and general use.
                                        On windows I still prefer <Link href="https://www.microsoft.com/en-us/edge/">Edge</Link> as it's stable and feature rich.
                                    </ListItem>
                                    <ListItem>
                                        For back-end development I use <Link href="https://laravel.com/">Laravel</Link> for most of my projects.
                                        It’s a battery included <Link href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">MVC</Link> framework that’s easy to use and has a great community.
                                        Learing <Link href="https://nodejs.org/en/">Node.js</Link> and <Link href="https://hono.dev/">Hono</Link> is also on my to-do list.
                                    </ListItem>
                                    <ListItem>
                                        <Link href="https://nextjs.org/">Next.js</Link> is my front end
                                        Javascript library of choice. It’s a great way to build React apps with
                                        server side rendering and other performance optimizations out of the box.  <Link href="https://inertiajs.com//">Inertia</Link> is also a great tool for React + Laravel.
                                    </ListItem>
                                    <ListItem>
                                        {/* db */}
                                        <Link href="https://www.mysql.com/">MySQL</Link> is my database of choice for most projects.
                                        I am interested in learning <Link href="https://www.postgresql.org/">PostgresSQL</Link>, an all in one database.
                                    </ListItem>
                                    <ListItem>
                                        I utilize <Link href="https://tailwindcss.com/">Tailwind CSS</Link> for styling. This utility-first framework is user-friendly and delivers excellent performance.
                                    </ListItem>
                                    <ListItem>
                                        For mobile app development, I utilize <Link href="https://reactnative.dev/">React Native</Link>, an effective framework for creating cross-platform applications using JavaScript. This approach leverages my existing proficiency in React.
                                    </ListItem>
                                </List>
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection padding="none" className={styles.section}>
                    <ProjectSectionContent>
                        <ProjectTextRow width="m">
                            <ProjectSectionHeading>Deployment</ProjectSectionHeading>
                            <ProjectSectionText as="div">
                                <List>
                                    {/* <ListItem>
                                        I prefer  <Link href="https:://www.cypress.io">Cypress</Link> for end-to-end testing as it’s easy to use and has great documentation.
                                    </ListItem> */}
                                    <ListItem>
                                        I prefer  <Link href="https://github.com/features/actions">Github Actions</Link> for CI/CD as it has a great free tier and is easy to use.
                                    </ListItem>
                                    <ListItem>
                                        <Link href="https://www.cloudflare.com/">Cloudflare</Link> is my go-to for DNS and CDN.
                                    </ListItem>
                                </List>
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection padding="none" className={styles.section}>
                    <ProjectSectionContent>
                        <ProjectTextRow stretch width="m">
                            <ProjectSectionHeading>Hardware</ProjectSectionHeading>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableHeadCell>Desktop</TableHeadCell>
                                        <TableCell>Custom built</TableCell>
                                    </TableRow>
                                    {/* <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Arch Linux (by the way)</TableCell>
                  </TableRow> */}
                                    {/* <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow> */}
                                    <TableRow>
                                        <TableHeadCell>Keyboard</TableHeadCell>
                                        <TableCell>Fnatic STREAK65 LP</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeadCell>Mouse</TableHeadCell>
                                        <TableCell>Logitech G502</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeadCell>Laptop</TableHeadCell>
                                        <TableCell>Macbook Pro M1 Pro (14″, 2021)</TableCell>
                                    </TableRow>
                                    {/* <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Audio Technica ATH-M50x/Apple Airpods</TableCell>
                  </TableRow> */}
                                    {/* <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow> */}
                                </TableBody>
                            </Table>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </>
    );
};
