import React from 'react'
import {
    Github,
    LinkedinSquare,
    Google,
    Blogger,
    StackOverflow,
    Behance,
} from 'styled-icons/boxicons-logos'
import { Phone } from 'styled-icons/boxicons-regular'
import styled from 'styled-components'

const getAge = birthDate =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10)

function randomColor () {
    const hex = ((Math.random() * 0xffffff) << 0).toString(16)
    return `#${hex}`
}

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
        margin-bottom: 10px;
    `,
    Email: styled.div`
        font-size: 20px;
    `,
    AboutMe: styled.section`
        margin-bottom: 40px;
    `,
    AboutMeAge: styled.div`
        font-size: 18px;
    `,
    MoreAboutMe: styled.section`
        margin-bottom: 40px;
    `,
    MoreAboutMeDescription: styled.p`
        font-size: 18px;
        margin-bottom: 16px;
    `,
    Occupation: styled.h2`
        font-size: 20px;
        margin: 0;
        margin-bottom: 40px;
    `,
    Experiences: styled.section`
        page-break-before: always;
    `,
    Experience: styled.div`
        line-height: 32px;
        margin-bottom: 30px;
    `,
    DescriptionJobs: styled.ul`
        font-size: 18px;
        list-style: disc;
        padding-left: 20px;
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

        @media print {
            background-color: var(--bg-light) !important;
            -webkit-print-color-adjust: exact;
        }
    `,
    DateTime: styled.div`
        font-size: 14px;
        margin-bottom: -15px;

        + div {
            margin-bottom: 10px;
        }
    `,
    LatestProjectWrapper: styled.div``,
    LatestProject: styled.div`
        line-height: 42px;
        margin-bottom: 40px;
        break-inside: avoid;
    `,
    LatestProjectName: styled.div`
        font-size: 24px;
        font-weight: bold;
        margin-bottom: -10px;
    `,
    LatestProjectPreview: styled.div`
        font-size: 18px;
    `,
    LatestProjectTechnologies: styled.div``,
    Contact: styled.section`
        margin-bottom: 40px;
    `,
    ContactDetail: styled.div`
        font-size: 18px;
    `,
    Education: styled.section`
        page-break-before: always;
        margin-bottom: 40px;
    `,
    EducationDate: styled.time`
        font-size: 16px;
    `,
    EducationCourseName: styled.div`
        font-size: 24px;
        font-weight: bold;
        margin-bottom: -10px;
    `,
    EducationSchoolName: styled.div`
        font-size: 18px;
    `,
    ComplementaryEducation: styled.section`
        page-break-before: always;
        margin-bottom: 40px;
    `,
    WorkExpirence: styled.section`
        break-inside: avoid;
        margin-bottom: 40px;
    `,
    SideProjects: styled.section`
        page-break-before: always;
        margin-bottom: 40px;
    `,
    WrapperPagePrint: styled.div`
        page-break-before: always;
    `,
    Languages: styled.section`
        margin-bottom: 40px;
    `,
    Timeline: styled.div`
        /* Styling */
        .timeline {
            position: relative;
            margin-bottom: 60px;
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
            break-inside: avoid;
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
        company: 'Momentive.ai (SurveyMonkey)',
        occupation: 'Software Engineer',
        time: 'Sep 2022 - Present',
        label_color: randomColor(),
        technologies: [
            'React',
            'styled-components',
            'Typescript',
            'Design System',
            'Turborepo',
            'Yarn workspaces',
            'Vercel CI/CD',
            'BFF',
            'Unit test',
            'Integrations test',
            'E2E tests'
        ],
        description: [
            'Currently work on the CRM team for the GetFeedback platform. My day-to-day involves building out web experiences for automations and integrations layer',
        ],
    },
      {
        company: 'FoxBox Digital',
        occupation: 'Software Engineer',
        time: 'Aug 2021 - Apr 2022',
        label_color: randomColor(),
        technologies: [
            'React',
            'styled-components',
            'Typescript',
            'Design System',
            'Turborepo',
            'Yarn workspaces',
            'Vercel CI/CD',
            'BFF',
            'Unit test',
            'Integrations test',
            'E2E tests'
        ],
        description: [
            'As the first front end of the team, I was responsible for building new digital product from scratch. Responsible for configuring all parts of CI and CD. Translate mock-ups into fully functioning complex products. Hoodie is an analytics solution for the cannabis industry.',
        ],
    },
    {
        company: 'Zmes',
        occupation: 'Senior Software Engineer',
        time: 'Dec 2020 - Present',
        label_color: randomColor(),
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
        description: [
            'Helping built a new product from scratch.',
            'I helped build a design system (components, design-tokens) using Figma, design pages',
            'Working as front end lead in an application using continuous delivery and best practices',
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
        description: [
            'Translate mock-ups into fully functioning complex products',
            'Working closely designers',
            'Improved the existing software and implemented new ones',
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
            'Circle CI',
        ],
        description: [
            'First front end of the team (Zelas Conecta)',
            'Working closely designers',
            'I had the chance to define front end architectures for large projects',
            'I had the chance to build a design system from scratch',
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
            'BFF with NodeJs',
            'Design System',
            'NodeJs',
            'Unit test',
        ],
        description: [
            'Working in a large-scale product that impact more than millions people',
            'Working closely designers',
            'Improved the existing software and implemented new ones',
        ],
    },
    {
        company: 'Yapay by Locaweb',
        occupation: 'Front end Engineer',
        time: 'Sep 2015 - Jun 2018',
        technologies: [
            'VueJs',
            'React',
            'Ruby on Rails',
            'SCSS',
            'Design System',
            'Figma',
            'Adobe XD',
            'Vanilla JS',
            'CSS',
            'Wordpress',
        ],
        description: [
            'First front end of the team o/',
            'Translate mock-ups into fully functioning complex products',
            'Working closely designers',
        ],
    },
    {
        company: 'G&P',
        occupation: 'Web designer',
        time: 'Out 2014 - Ago 2015',
        technologies: ['Angular', 'SCSS', 'Vanilla JS', 'CSS'],
        description: [
            'Helped build interfaces for government software',
            'Interfaces for websites, HTML and CSS using W3C standards, wireframe, navigable prototypes, user experience / interface improvements',
        ],
    },
    {
        company: 'MStech',
        occupation: 'Web designer',
        time: 'May 2013 - Out 2014',
        technologies: ['HTML', 'CSS', 'Vanilla JS', 'Photoshop'],
        description: [
            'Front end apps for online classes',
            'Design coverbooks, magazines, web layouts, book layout',
        ],
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
        description: [
            'Covers books, magazines, newspapers, layout, folders, visual identities, e-mail marketing, vectorizations and others graphic works.',
        ],
    },
]

const sideProjects = [
    {
        name: 'Monorepo Fullstack Boilerplate',
        year: '2021',
        link: {
            github: 'https://github.com/emunhoz/monorepo-boilerplate',
            production: 'https://monorepo-boilerplate-web.vercel.app/',
        },
        technologies: [
            'React',
            'styled-components',
            'Monorepo',
            'Lerna',
            'Vercel CI/CD',
            'NodeJS',
            'Unit test',
            'Integrations test',
        ],
    },
    {
        name: 'Spotifood - Food with music',
        year: '2021',
        link: {
            github: 'https://github.com/emunhoz/spotifood',
            production: 'https://spotifood-ten.vercel.app/#/',
            figma:
                'https://www.figma.com/file/OIo3gx7ydjfIOC6oSI9A0a/Spotifood?node-id=0%3A1',
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
            <S.AboutMe>
                <S.Title>Eder Munhoz dos Santos </S.Title>
                <S.Occupation>Software Engineer (UI Engineer)</S.Occupation>
            </S.AboutMe>

            <S.Contact>
                <S.ContactDetail>
                    <Google size='20' />{' '}
                    <a href='mailto:edermunhozsantos@gmail.com'>
                        edermunhozsantos@gmail.com
                    </a>
                </S.ContactDetail>
                <S.ContactDetail>
                    <Phone size='20' />{' '}
                    <a href='tel:+31685319197'> +31 6 85 31 91 97</a>
                </S.ContactDetail>
                <S.ContactDetail>
                    <LinkedinSquare size='20' />{' '}
                    <a href='https://www.linkedin.com/in/eder-munhoz-dos-santos-52965b66'>
                        Linkedin
                    </a>
                </S.ContactDetail>
                <S.ContactDetail>
                    <Github size='20' />{' '}
                    <a href='https://github.com/emunhoz'>Github</a>
                </S.ContactDetail>
                <S.ContactDetail>
                    <Blogger size='20' />{' '}
                    <a href='https://edermunhozsantos.netlify.app/'>
                        Personal blog
                    </a>
                </S.ContactDetail>
                <S.ContactDetail>
                    <StackOverflow size='20' />{' '}
                    <a href='https://stackoverflow.com/users/10135827/eder'>
                        StackOverflow
                    </a>
                </S.ContactDetail>
                <S.ContactDetail>
                    <Behance size='20' />{' '}
                    <a href='https://www.behance.net/edermunhoz1384'>
                        Portifolio
                    </a>
                </S.ContactDetail>
            </S.Contact>

            <S.MoreAboutMe>
                <S.SubTitle>A bit about me</S.SubTitle>
                <S.MoreAboutMeDescription>
                    Brazilian, {getAge('1991-09-23')} years. I have a degree in Marketing (2010-2012) and experience as designer, Front end and now a bit of Backend as well.
                </S.MoreAboutMeDescription>
                <S.MoreAboutMeDescription>
                  I like to work closely with designers because I believe that this experience of getting to know a little about both areas can have a more agile impact on product development.
                </S.MoreAboutMeDescription>
                <S.MoreAboutMeDescription>
                  In the last couple of years, I've been working on new products from scratch, using some interface editors (Figma, AdobeXD) to set up all components, design tokens, and pages. Check out my portfolio: {' '}
                    <a href='https://www.behance.net/edermunhoz1384'>
                        my personal portifolio
                    </a>
                    .
                </S.MoreAboutMeDescription>
                <S.MoreAboutMeDescription>
                    Then, I started building the front-end application using the best technologies for the product context. Check out my last side projects as a Front end engineer:{' '}
                    <a href='#last-side-projects'>
                        my last side projects as Front end engineer
                    </a>
                    .
                </S.MoreAboutMeDescription>
                <S.MoreAboutMeDescription>
                    Main technologies I use for front-end applications:
                    <S.PostItemTag>React</S.PostItemTag>
                    <S.PostItemTag>Vue</S.PostItemTag>
                    <S.PostItemTag>GraphQL</S.PostItemTag>
                    <S.PostItemTag>Apollo</S.PostItemTag>
                    <S.PostItemTag>PostgreSQL</S.PostItemTag>
                    <S.PostItemTag>Prisma</S.PostItemTag>
                    <S.PostItemTag>NodeJs</S.PostItemTag>
                    <S.PostItemTag>styled-components</S.PostItemTag>
                    <S.PostItemTag>Design System</S.PostItemTag>
                    <S.PostItemTag>Monorepo</S.PostItemTag>
                    <S.PostItemTag>NextJs</S.PostItemTag>
                    <S.PostItemTag>AWS</S.PostItemTag>
                    <S.PostItemTag>Google Cloud</S.PostItemTag>
                    <S.PostItemTag>Vercel</S.PostItemTag>
                    <S.PostItemTag>Jest</S.PostItemTag>
                    <S.PostItemTag>Testing library</S.PostItemTag>
                    <S.PostItemTag>Cypress</S.PostItemTag>
                    <S.PostItemTag>BFF with NodeJs</S.PostItemTag>
                    <S.PostItemTag>Micro-frontends</S.PostItemTag>
                </S.MoreAboutMeDescription>
            </S.MoreAboutMe>

            <S.Education>
                <S.SubTitle>Education</S.SubTitle>
                <div>
                    <S.EducationDate>Jan 2010 - Jan 2012</S.EducationDate>
                    <S.EducationCourseName>
                        Degree in Marketing
                    </S.EducationCourseName>
                    <S.EducationSchoolName>
                        IESB PREVE - Bauru, São Paulo - Brazil
                    </S.EducationSchoolName>
                </div>
                <div>
                    <S.EducationDate>Out 2015</S.EducationDate>
                    <S.EducationCourseName>
                        Front end web apps
                    </S.EducationCourseName>
                    <S.EducationSchoolName>
                        Caelum - Ensino e Inovação
                    </S.EducationSchoolName>
                </div>
                <div>
                    <S.EducationDate>Jun 2013</S.EducationDate>
                    <S.EducationCourseName>
                        Project management
                    </S.EducationCourseName>
                    <S.EducationSchoolName>
                        FGV - Fundação Getulio Vargas
                    </S.EducationSchoolName>
                </div>
            </S.Education>

            <S.Languages>
                <S.SubTitle>Languages</S.SubTitle>
                <div>
                    <S.EducationCourseName>Portuguese</S.EducationCourseName>
                    <S.EducationSchoolName>Native</S.EducationSchoolName>
                </div>
                <div>
                    <S.EducationCourseName>English</S.EducationCourseName>
                    <S.EducationSchoolName>
                      <a href='https://www.efset.org/cert/NzQz78'>
                        EFSET English Certificate 58/100 (B2 Upper Intermediate)
                      </a>
                    </S.EducationSchoolName>
                </div>
            </S.Languages>

            <S.ComplementaryEducation>
                <S.SubTitle>Complementary courses</S.SubTitle>
                <div>
                    <S.EducationDate>2021 - 2022</S.EducationDate>
                    <S.EducationCourseName>
                        English Classes
                    </S.EducationCourseName>
                    <S.EducationSchoolName>Cambly</S.EducationSchoolName>
                </div>
                <div>
                    <S.EducationDate>2020</S.EducationDate>
                    <S.EducationCourseName>
                        NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID
                    </S.EducationCourseName>
                    <S.EducationSchoolName>
                        https://www.udemy.com/course/tdd-com-mango/
                    </S.EducationSchoolName>
                    <S.EducationSchoolName>Udemy</S.EducationSchoolName>
                </div>
                <div>
                    <S.EducationDate>2019</S.EducationDate>
                    <S.EducationCourseName>
                        JS com TDD na Prática
                    </S.EducationCourseName>
                    <S.EducationSchoolName>
                        https://www.udemy.com/course/js-com-tdd-na-pratica/
                    </S.EducationSchoolName>
                    <S.EducationSchoolName>Udemy</S.EducationSchoolName>
                </div>
            </S.ComplementaryEducation>

            <S.WorkExpirence>
                <S.SubTitle>Experiences</S.SubTitle>

                <S.Timeline>
                    <ul className='timeline'>
                        {experiences.map(
                            (
                                {
                                    company,
                                    occupation,
                                    time,
                                    technologies,
                                    description,
                                },
                                key
                            ) => (
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
                                        <div style={{ marginBottom: '20px' }}>
                                            {technologies.map((item, key) => (
                                                <S.PostItemTag key={key}>
                                                    {item}
                                                </S.PostItemTag>
                                            ))}
                                        </div>
                                        <S.DescriptionJobs>
                                            {description.map((item, key) => (
                                                <li key={key}>{item}</li>
                                            ))}
                                        </S.DescriptionJobs>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </S.Timeline>
            </S.WorkExpirence>

            <S.SideProjects>
                <S.SubTitle id='last-side-projects'>
                    Last side projects
                </S.SubTitle>

                <S.LatestProjectWrapper>
                    {sideProjects.map(
                        ({ name, year, link, technologies }, key) => (
                            <S.LatestProject key={key}>
                                <S.DateTime>{year}</S.DateTime>
                                <S.LatestProjectName>
                                    {name}
                                </S.LatestProjectName>
                                <S.LatestProjectPreview>
                                    Preview: <a href={link.production}>Live</a>
                                </S.LatestProjectPreview>
                                {link.figma && (
                                    <S.LatestProjectPreview>
                                        Figma interface:{' '}
                                        <a href={link.figma}>interface</a>
                                    </S.LatestProjectPreview>
                                )}
                                <S.LatestProjectPreview>
                                    Github source:{' '}
                                    <a href={link.github}>Code</a>
                                </S.LatestProjectPreview>
                                <S.LatestProjectTechnologies>
                                    {technologies.map((item, key) => (
                                        <S.PostItemTag key={key}>
                                            {item}
                                        </S.PostItemTag>
                                    ))}
                                </S.LatestProjectTechnologies>
                            </S.LatestProject>
                        )
                    )}
                </S.LatestProjectWrapper>
            </S.SideProjects>
        </>
    )
}

export default Resume
