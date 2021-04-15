import React from 'react'
// import { graphql } from 'gatsby'
// import SEO from '../components/seo'
// import PostItem from '../components/PostItem'
// import TitlePage from '../components/TitlePage'
// import LocalizedLink from '../components/LocalizedLink'
// import useTranslations from '../components/useTranslations'

// import * as S from '../components/ListWrapper/styled'
import { Profile } from '../components/Profile'
import styled from 'styled-components'

export const S = {
    Title: styled.h1`
        font-size: 40px;
        font-weight: bold;
        line-height: 48px;
    `,
    SubTitle: styled.h3`
        font-size: 30px;
        font-weight: bold;
        line-height: 48px;
        margin: 0;
        margin-bottom: 30px;
    `,
    Email: styled.div`
        font-size: 20px;
    `,
    Occupation: styled.h2`
        font-size: 20px;
        margin: 0;
        margin-bottom: 40px;
    `,
    Experiences: styled.div``,
    Experience: styled.div`
        line-height: 32px;
        margin-bottom: 30px;
    `,
    Company: styled.div`
        font-size: 24px;
        font-weight: bold;
        margin-bottom: -10px;
    `,
    CompanyOccupation: styled.div`
        font-size: 18px;
    `,
    CompanyTime: styled.div`
        font-size: 18px;
    `,
    PostItemTag: styled.span`
        background: var(--bg-light);
        display: inline-flex;
        font-size: 1.6rem;
        margin-bottom: var(--space-sm);
        padding: 0 1rem;
        height: 2.5rem;
        margin: 0.2rem;
        border-radius: 1.2rem;
        align-items: center;
    `,
    DateTime: styled.div`
        font-size: 16px;

        + div {
            margin-bottom: 20px;
        }
    `,
    LatestProject: styled.div`
        line-height: 42px;
        margin-bottom: 40px;
    `,
    Timeline: styled.div`
        /* Styling */
        .timeline {
            position: relative;
            margin: 70px 0;
        }
        .timeline:before {
            background-color: black;
            content: '';
            margin-left: -1px;
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 100%;
        }

        .timeline-event {
            position: relative;
        }

        .timeline-event-copy {
            padding: 1em;
            position: relative;
        }
        .timeline-event-copy h3 {
            font-size: 1.75em;
        }
        .timeline-event-copy h4 {
            font-size: 1.2em;
            margin-bottom: 1.2em;
        }
        .timeline-event-copy strong {
            font-weight: 700;
        }
        .timeline-event-copy p:not(.timeline-event-thumbnail) {
            padding-bottom: 1.2em;
        }

        .timeline-event-icon {
            -moz-transition: -moz-transform 0.2s ease-in;
            -o-transition: -o-transform 0.2s ease-in;
            -webkit-transition: -webkit-transform 0.2s ease-in;
            transition: transform 0.2s ease-in;
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            background-color: black;
            outline: 10px solid white;
            display: block;
            margin: 0.5em 0.5em 0.5em -0.5em;
            position: absolute;
            top: 0;
            left: 6px;
            width: 0.5em;
            height: 0.5em;
        }

        .timeline-event-thumbnail {
            transition: box-shadow 0.5s ease-in 0.1s;
            font-size: 16px;
            box-shadow: inset 0 0 0 0em #ef795a;
            display: inline-block;
        }
    `,
}

const experiences = [
    {
        company: 'Zmes',
        occupation: 'UI Engineer',
        time: 'Dec 2020 - Present',
        technologies: [
            'React',
            'styled-components',
            'Design System',
            'Lerna',
            'Monorepo',
            'Yarn workspaces',
            'Google Cloud',
            'Vercel CI/CD',
            'BFF',
            'Unit test',
            'Integrations test',
        ],
    },
    {
        company: 'Luizalabs',
        occupation: 'Front end Engineer',
        time: 'Mar 2020 - Nov 2020',
        technologies: [
            'React',
            'Next.js',
            'SSR',
            'NodeJs',
            'styled-components',
            'Google Cloud',
            'Grafana',
            'Docker',
            'BFF',
            'Unit test',
            'Integrations test',
        ],
    },
    {
        company: 'Escale Digital',
        occupation: 'Front end Engineer',
        time: 'Mar 2019 - Mar 2020',
        technologies: [
            'React',
            'Razzle.js (SSR)',
            'Design System',
            'NodeJs',
            'GraphQL',
            'Prismic (Headless CMS)',
            'Gatsby',
            'styled-components',
            'Unit test',
            'Integrations test',
        ],
    },
    {
        company: 'UOL - Universo Online',
        occupation: 'Front end Engineer',
        time: 'Jun 2018 - Mar 2019',
        technologies: [
            'Angular',
            'React',
            'SCSS',
            'Design System',
            'NodeJs',
            'Unit test',
        ],
    },
    {
        company: 'Yapay by Locaweb',
        occupation: 'Front end Engineer',
        time: 'Sep 2015 - Jun 2018',
        technologies: [
            'VueJs',
            'Ruby on Rails',
            'SCSS',
            'Design System',
            'Figma',
            'Adobe XD',
            'Vanilla JS',
            'CSS',
            'Wordpress',
        ],
    },
    {
        company: 'G&P',
        occupation: 'Web designer',
        time: 'Out 2014 - Ago 2015',
        technologies: ['Angular', 'SCSS', 'Vanilla JS', 'CSS'],
    },
    {
        company: 'MStech',
        occupation: 'Web designer',
        time: 'May 2013 - Out 2014',
        technologies: ['HTML', 'CSS', 'Vanilla JS', 'Photoshop'],
    },
    {
        company: 'Solidum Editora',
        occupation: 'Designer',
        time: 'Jul 2008 - Jun 2013',
        technologies: [
            'Photoshop',
            'Adobe InDesign',
            'Adobe After Effects',
            'Flash',
            'HTML',
            'CSS',
        ],
    },
]

const sideProjects = [
    {
        name: 'Spotifood - Food with music',
        year: '2021',
        link: {
            github: 'https://github.com/emunhoz/spotifood',
            production: 'https://spotifood-ten.vercel.app/#/',
        },
        technologies: [
            'React',
            'styled-components',
            'Design System',
            'Figma',
            'Mobile First',
            'Lerna',
            'Monorepo',
            'Yarn workspaces',
            'Vercel CI/CD',
            'Unit test',
            'Integrations test',
        ],
    },
    {
        name: 'Whats In - Find movies',
        year: '2021',
        link: {
            github: 'https://github.com/emunhoz/find-movies',
            production: 'https://find-movies-app.vercel.app/#/',
        },
        technologies: [
            'React',
            'styled-components',
            'Design System',
            'Figma',
            'Mobile First',
            'Lerna',
            'Monorepo',
            'Yarn workspaces',
            'Vercel CI/CD',
            'Unit test',
            'Integrations test',
        ],
    },
    {
        name: 'Component library',
        year: '2020',
        link: {
            github: 'https://github.com/emunhoz/npm-react-module',
            production:
                'https://emunhoz.github.io/npm-react-module/?path=/docs',
        },
        technologies: [
            'React',
            'styled-components',
            'Rollup',
            'Netlify CI/CD',
            'Unit test',
        ],
    },
    {
        name: 'Greenthumb - Find your next green field',
        year: '2019',
        link: {
            github: 'https://github.com/emunhoz/greenthumb',
            production: 'https://emunhoz-greenthumb.netlify.app/',
        },
        technologies: [
            'React',
            'styled-components',
            'Mobile version',
            'Netlify CI/CD',
            'Unit test',
            'Integrations test',
            'e2e tests',
        ],
    },
    {
        name: 'Not Slack - Chat interface',
        year: '2019',
        link: {
            github: '',
            production: 'https://emunhoz-not-slack.netlify.app/',
        },
        technologies: ['React', 'styled-components'],
    },
]

const Resume = () => {
    return (
        <>
            <S.Title>Eder Munhoz dos Santos </S.Title>
            <S.Occupation>
                UI Engineer - edermunhozsantos@gmail.com
            </S.Occupation>

            <S.SubTitle>Experiences</S.SubTitle>

            <S.Timeline>
                <ul className='timeline'>
                    {experiences.map(
                        ({ company, occupation, time, technologies }, key) => (
                            <li className='timeline-event' key={key}>
                                <label className='timeline-event-icon'></label>
                                <div className='timeline-event-copy'>
                                    <p className='timeline-event-thumbnail'>
                                        {time}
                                    </p>
                                    <S.Company>{company}</S.Company>
                                    <S.CompanyOccupation>
                                        {occupation}
                                    </S.CompanyOccupation>
                                    <div>
                                        {technologies.map((item, key) => (
                                            <S.PostItemTag key={key}>
                                                {item}
                                            </S.PostItemTag>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </S.Timeline>

            <S.SubTitle>Last side projects</S.SubTitle>

            <div>
                {sideProjects.map(({ name, year, link, technologies }, key) => (
                    <S.LatestProject key={key}>
                        <S.DateTime>{year}</S.DateTime>
                        <S.Company>{name}</S.Company>
                        <S.CompanyOccupation>
                            Preview:{' '}
                            <a href={link.production}>{link.production}</a>
                        </S.CompanyOccupation>
                        <S.CompanyOccupation>
                            Github source:{' '}
                            <a href={link.github}>{link.github}</a>
                        </S.CompanyOccupation>
                        <div>
                            {technologies.map((item, key) => (
                                <S.PostItemTag key={key}>{item}</S.PostItemTag>
                            ))}
                        </div>
                    </S.LatestProject>
                ))}
            </div>

            {/* <S.SubTitle>Education and certifications</S.SubTitle>

            <S.Experiences>
                <S.Experience>
                    <S.Company>Degree in Marketing</S.Company>
                    <S.CompanyOccupation>
                        IESB PREVE - Bauru, São Paulo - Brazil
                    </S.CompanyOccupation>
                    <S.CompanyTime>Jan 2010 - Jan 2012</S.CompanyTime>
                </S.Experience>
                <S.Experience>
                    <S.Company>Front end apps</S.Company>
                    <S.CompanyOccupation>
                        Caelum - Ensino e Inovação
                    </S.CompanyOccupation>
                    <S.CompanyTime>Out 2015</S.CompanyTime>
                </S.Experience>
                <S.Experience>
                    <S.Company>Project management</S.Company>
                    <S.CompanyOccupation>
                        FGV - Fundação Getulio Vargas
                    </S.CompanyOccupation>
                    <S.CompanyTime>Jun 2013</S.CompanyTime>
                </S.Experience>
            </S.Experiences>

            <S.SubTitle>Contact</S.SubTitle>

            <S.Experiences>
                <S.Experience>
                    <S.Company>E-mail</S.Company>
                    <S.CompanyOccupation>
                        edermunhozsantos@gmail.com
                    </S.CompanyOccupation>
                </S.Experience>
                <S.Experience>
                    <S.Company>Tel</S.Company>
                    <S.CompanyOccupation>55 14 997-013-345</S.CompanyOccupation>
                </S.Experience>
                <S.Experience>
                    <S.Company>Blog</S.Company>
                    <S.CompanyOccupation>
                        https://edermunhozsantos.netlify.app/
                    </S.CompanyOccupation>
                </S.Experience>
            </S.Experiences> */}
        </>
    )
}

export default Resume
