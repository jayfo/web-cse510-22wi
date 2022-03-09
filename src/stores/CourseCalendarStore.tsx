import * as React from 'react';

import { ReactElement } from 'react';

import { DateTime } from 'luxon';

import { Reading } from '../types/Reading';

import ContentAvailableExam from '../content/calendar/AvailableExam.mdx';
import ContentContributionsInHCI from '../content/calendar/ContributionsInHCI.mdx';
import ContentDueExam from '../content/calendar/DueExam.mdx';
import ContentDueProjectFinalReport from '../content/calendar/DueProjectFinalReport.mdx';
import ContentDueStatisticsLab from '../content/calendar/DueStatisticsLab.mdx';
import ContentExperimentalDesignAndAnalysis from '../content/calendar/ExperimentalDesignAndAnalysis.mdx';
import ContentNoReading from '../content/calendar/NoReading.mdx';
import ContentProjectMilestone from '../content/calendar/ProjectMilestone.mdx';
import ContentProjectProposal from '../content/calendar/ProjectProposal.mdx';
import ContentVisionsOfHCI from '../content/calendar/VisionsOfHCI.mdx';

type CalendarDateBase = {
    date: DateTime,
    dateTitle: string,
    virtual?: boolean,
    awayJames?: boolean,
    guest?: {
        name: string,
        link: string,
    }
    additionalResources?: Reading[],
}

type CalendarDateContentStandard = CalendarDateBase & {
    readingsStandard: {
        framing: Reading,
        instances: Reading[],
    }
}

type CalendarDateContentNonstandard = CalendarDateBase & {
    contentNonstandard: ReactElement,
}

export type CalendarDate = CalendarDateBase | CalendarDateContentStandard | CalendarDateContentNonstandard;

export class CourseCalendarStore {
    calendarDates: CalendarDate[] = [
        //
        // Week 1
        //
        {
            date: DateTime.fromISO('2022-01-04'),
            virtual: true,

            dateTitle: 'Introductions and Overview',
            contentNonstandard: <ContentNoReading />,
        },
        {
            date: DateTime.fromISO('2022-01-06'),
            virtual: true,

            dateTitle: 'Human-Computer Interaction History',
            contentNonstandard: <ContentNoReading />,
            additionalResources: [
                {
                    authorText: 'Jonathan Grudin',
                    title: 'A Moving Target - The Evolution of Human-Computer Interaction',
                    publicationText: 'Book Chapter',
                    link: 'https://canvas.uw.edu/files/85805028/'
                }
            ]
        },

        //
        // Week 2
        //
        {
            date: DateTime.fromISO('2022-01-11'),
            virtual: true,

            dateTitle: 'Visions of Human-Computer Interaction',
            contentNonstandard: <ContentVisionsOfHCI readings={
                [
                    {
                        // Because this paper is reviewed in history discussion,
                        // text below clarifies it can be read but will not be presented
                        authorText: 'Vannevar Bush',
                        title: 'As We May Think',
                        publicationText: 'The Atlantic, 1945',
                        link: 'https://theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/'
                    },
                    {
                        authorText: 'Mark Weiser',
                        title: 'The Computer for the 21st Century',
                        publicationText: 'Scientific American, 1991',
                        link: 'https://canvas.uw.edu/files/85803917/'
                    },
                    {
                        authorText: 'Roy Want, Andy Hopper, Veronica Falcão, Jonathan Gibbons',
                        title: 'The Active Badge Location System',
                        publicationText: 'TOIS 1992',
                        link: 'https://canvas.uw.edu/files/85803915/'
                    },
                    {
                        authorText: 'James D. Hollan, Scott Stornetta',
                        title: 'Beyond Being There',
                        publicationText: 'CHI 1992',
                        link: 'https://canvas.uw.edu/files/85803912/'
                    },
                    {
                        authorText: 'Pierre Wellner',
                        title: 'Interacting with Paper on the DigitalDesk',
                        publicationText: 'CACM 1993',
                        link: 'https://canvas.uw.edu/files/85803918/'
                    },
                    {
                        authorText: 'Benjamin B. Bederson, James D. Hollan',
                        title: 'Pad++: A Zooming Graphical Interface for Exploring Alternate Interface Physics',
                        publicationText: 'UIST 1994',
                        link: 'https://canvas.uw.edu/files/85803910/'
                    },
                    {
                        authorText: 'Hiroshi Ishii, Brygg Ullmer',
                        title: 'Tangible Bits: Towards Seamless Interfaces between People, Bits and Atoms',
                        publicationText: 'CHI 1997',
                        link: 'https://canvas.uw.edu/files/85803914/'
                    },
                    {
                        authorText: 'Eric Horvitz',
                        title: 'Principles of Mixed-Initiative User Interfaces',
                        publicationText: 'CHI 1999',
                        link: 'https://canvas.uw.edu/files/85803913/'
                    },
                    {
                        authorText: 'Ken Hinckley, Jeff Pierce, Mike Sinclair, Eric Horvitz',
                        title: 'Sensing Techniques for Mobile Interaction',
                        publicationText: 'UIST 2000',
                        link: 'https://canvas.uw.edu/files/85803911/'
                    },
                    {
                        authorText: 'Claudio S. Pinhanez',
                        title: 'The Everywhere Displays Projector: A Device to Create Ubiquitous Graphical Interfaces',
                        publicationText: 'UbiComp 2001',
                        link: 'https://canvas.uw.edu/files/85804223/'
                    },
                    {
                        authorText: 'Saul Greenberg, Chester Fitchett',
                        title: 'Phidgets: Easy Development of Physical Interfaces through Physical Widgets',
                        publicationText: 'UIST 2001',
                        link: 'https://canvas.uw.edu/files/85810296/'
                    },
                    {
                        authorText: 'Roy Want, Trevor Pering, Gunner Danneels, Muthu Kumar, Murali Sundar, John Light',
                        title: 'The Personal Server: Changing the Way We Think about Ubiquitous Computing',
                        publicationText: 'UbiComp 2002',
                        link: 'https://canvas.uw.edu/files/85803916/'
                    },
                    {
                        authorText: 'Jonathan Lester, Tanzeem Choudhury, Gaetano Borriello',
                        title: 'A Practical Approach to Recognizing Physical Activities',
                        publicationText: 'Pervasive 2006',
                        link: 'https://canvas.uw.edu/files/85835094/'
                    },
                    {
                        authorText: 'Bret Victor',
                        title: 'Magic Ink: Information Software and the Graphical Interface',
                        publicationText: '2006',
                        link: 'http://worrydream.com/MagicInk/'
                    },
                ]
            }/>,
        },
        {
            date: DateTime.fromISO('2022-01-13'),
            virtual: true,

            dateTitle: 'Contributions in Human-Computer Interaction',
            contentNonstandard: <ContentContributionsInHCI readings={
                {
                    framing: {
                        authorText: 'Jacob O. Wobbrock, Julie A. Kientz',
                        title: 'Research Contributions in Human-Computer Interaction',
                        publicationText: 'Interactions, 2016',
                        link: 'https://canvas.uw.edu/files/85805207/'
                    },
                    contributions: {
                        'Empirical': [
                            {
                                authorText: 'Eiji Hayashi, Jaime Lien, Nicholas Gillian, Leonardo Giusti, Dave Weber, Jin Yamanaka, Lauren Bedal, Ivan Poupyrev',
                                title: 'RadarNet: Efficient Gesture Recognition Technique Utilizing a Miniature Radar Sensor',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445367'
                            },
                            {
                                authorText: 'Maia J Boyd, Jamar L Sullivan, Marshini Chetty, Blase Ur',
                                title: 'Understanding the Security and Privacy Advice Given to Black Lives Matter Protesters',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445061'
                            },
                            {
                                authorText: 'Kaixing Zhao, Sandra Bardot, Marcos Serrano, Mathieu Simonnet, Bernard Oriolo, Christophe Jouffrais',
                                title: 'Tactile Fixations: A Behavioral Marker on How People with Visual Impairments Explore Raised-line Graphics',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445578'
                            },
                        ],
                        'Artifact': [
                            {
                                authorText: 'Wolf Kienzle, Eric Whitmire, Chris Rittaler, Hrvoje Benko',
                                title: 'ElectroRing: Subtle Pinch and Touch Detection with a Ring',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445094'
                            },
                            {
                                authorText: 'Yiyue Luo, Kui Wu, Tomás Palacios, and Wojciech Matusik',
                                title: 'KnitUI: Fabricating Interactive and Sensing Textiles with Machine Knitting',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445780'
                            },
                            {
                                authorText: 'Richen Liu, Min Gao, Shunlong Ye, and Jiang Zhang',
                                title: 'IGScript: An Interaction Grammar for Scientific Data Presentation',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445535'
                            },
                        ],
                        'Methodological': [
                            {
                                authorText: 'Paweł W. Woźniak, Jakob Karolus, Florian Lang, Caroline Eckerth, Johannes Schöning, Yvonne Rogers, Jasmin Niess',
                                title: 'Creepy Technology: What Is It and How Do You Measure It?',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445299'
                            },
                            {
                                authorText: 'Jiamin Dai, Karyn Moffatt',
                                title: 'Surfacing the Voices of People with Dementia: Strategies for Effective Inclusion of Proxy Stakeholders in Qualitative Research',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445756'
                            },
                            {
                                authorText: 'Audrey Desjardins, Heidi R. Biggs',
                                title: 'Data Epics: Embarking on Literary Journeys of Home Internet of Things Data',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445241'
                            },
                        ],
                        'Theoretical': [
                            {
                                authorText: 'Emeline Brulé, Gilles Bailly',
                                title: '”Beyond 3D printers”: Understanding Long-Term Digital Fabrication Practices for the Education of Visually Impaired or Blind Youth',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445403'
                            },
                            {
                                authorText: 'Florian “Floyd” Mueller, Tim Dwyer, Sarah Goodwin, Kim Marriott, Jialin Deng, Han D. Phan, Jionghao Lin, Kun-Ting Chen, Yan Wang, Rohit Ashok Khot',
                                title: 'Data as Delight: Eating Data',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445218'
                            },
                            {
                                authorText: 'Miguel Bruns, Stijn Ossevoort, Marianne Graves Petersen',
                                title: 'Expressivity in Interaction: A Framework for Design',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445231'
                            },
                        ],
                        'Benchmark / Dataset': [
                            {
                                authorText: 'Axel Antoine, Sylvain Malacria, Nicolai Marquardt, Géry Casiez',
                                title: 'Interaction Illustration Taxonomy: Classification of Styles and Techniques for Visually Representing Interaction Scenarios',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445586'
                            }, 
                            {
                                authorText: 'Nimra Zaheer, Obaid Ullah Ahmad, Ammar Ahmed, Muhammad Shehryar Khan, Mudassir Shabbir',
                                title: 'SEMOUR: A Scripted Emotional Speech Repository for Urdu',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445171'
                            }, 
                            {
                                authorText: 'Vinoth Pandian Sermuga Pandian, Sarah Suleri, and Prof. Dr. Matthias Jarke',
                                title: 'UISketch: A Large-Scale Dataset of UI Element Sketches',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445784'
                            },
                        ],
                        'Survey': [
                            {
                                authorText: 'Kelly Mack, Emma McDonnell, Dhruv Jain, Lucy Lu Wang, Jon E. Froehlich, Leah Findlater',
                                title: 'What Do We Mean by "Accessibility Research"?: A Literature Survey of Accessibility Papers in CHI and ASSETS from 1994 to 2019',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445412'
                            },
                            {
                                authorText: 'Cayley MacArthur, Arielle Grinberg, Daniel Harley, Mark Hancock',
                                title: 'You’re Making Me Sick: A Systematic Review of How Virtual Reality Research Considers Gender & Cybersickness',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445701'
                            },
                            {
                                authorText: 'Anjali Devakumar, Jay Modh, Bahador Saket, Eric P. S. Baumer, Munmun De Choudhury',
                                title: 'A Review on Strategies for Data Collection, Reflection, and Communication in Eating Disorder Apps',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445670'
                            },
                        ],
                        'Opinion': [
                            {
                                authorText: 'Nithya Sambasivan, Shivani Kapania, Hannah Highfill, Diana Akrong, Praveen Kumar Paritosh, Lora M Aroyo',
                                title: '"Everyone wants to do the model work, not the data work": Data Cascades in High-Stakes AI',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445518'
                            },
                            {
                                authorText: 'Sebastian Linxen, Christian Sturm, Florian Brühlmann, Vincent Cassau, Klaus Opwis, Katharina Reinecke',
                                title: 'How WEIRD is CHI?',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445488'
                            },
                            {
                                authorText: 'Barrett Ens, Benjamin Bach, Maxime Cordeil, Ulrich Engelke, Marcos Serrano, Wesley Willett, Arnaud Prouzeau, Christoph Anthes, Wolfgang Büschel, Cody Dunne, Tim Dwyer, Jens Grubert, Jason H Haga, Nurit Kirshenbaum, Dylan Kobayashi, Tica Lin, Monsurat Olaosebikan, Fabian Pointecker, David Saffo, Nazmus Saquib, Dieter Schmalstieg, Danielle Albers Szafir, Matt Whitlock, Yalong Yang',
                                title: 'Grand Challenges in Immersive Analytics',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3446866'
                            },
                        ],
                    }
                }
            } />,
            additionalResources: [
                {
                    authorText: 'Herbert A. Simon',
                    title: 'The Science of Design: Creating the Artificial',
                    publicationText: 'Design Issues, 1988',
                    link: 'https://canvas.uw.edu/files/85805201/'
                },
                {
                    authorText: 'Donald E. Stokes',
                    title: 'Pasteur’s Quadrant: Basic Science and Technological Innovation',
                    publicationText: 'Book Chapter, 1997',
                    link: 'https://canvas.uw.edu/files/85805202/'
                },
            ]
        },

        //
        // Week 3
        //
        {
            date: DateTime.fromISO('2022-01-18'),
            virtual: true,

            dateTitle: 'Usability Evaluation Considered Harmful',
            readingsStandard: {
                framing: {
                    authorText: 'Saul Greenberg, Bill Buxton',
                    title: 'Usability Evaluation Considered Harmful (Some of the Time)',
                    publicationText: 'CHI 2008',
                    link: 'https://canvas.uw.edu/files/85831973/'
                },
                instances: [
                    {
                        authorText: 'Dan R. Olsen, Jr',
                        title: 'Evaluating User Interface Systems Research',
                        publicationText: 'UIST 2007',
                        link: 'https://canvas.uw.edu/files/85831974/'
                    },
                    {
                        authorText: 'James Fogarty',
                        title: 'Code and Contribution in Interactive Systems Research',
                        publicationText: 'CHI 2017 Workshop on #HCI.Tools: Strategies and Best Practices for Designing, Evaluating, and Sharing Technical HCI Toolkits',
                        link: 'https://canvas.uw.edu/files/85831972/'
                    }
                ]
            },
        },
        {
            date: DateTime.fromISO('2022-01-20'),
            virtual: true,

            dateTitle: 'In-Class Finalization of Project Proposals',
            contentNonstandard: <ContentNoReading />,
        },
        {
            date: DateTime.fromISO('2022-01-23'),

            dateTitle: 'Project Proposal',
            contentNonstandard: <ContentProjectProposal />,
        },

        //
        // Week 4
        //
        {
            date: DateTime.fromISO('2022-01-25'),
            virtual: true,

            dateTitle: 'Research Topic: Design Tools',
            readingsStandard: {
                framing: {
                    authorText: 'Mark W. Newman, James Lin, Jason I. Hong, James A. Landay',
                    title: 'DENIM: An Informal Web Site Design Tool Inspired by Observations of Practice',
                    publicationText: 'HCI, 2003',
                    link: 'https://canvas.uw.edu/files/85832106/'
                },
                instances: [
                    {
                        authorText: 'Steven P. Dow, Alana Glassco, Jonathan Kass, Melissa Schwarz, Daniel L. Schwartz, Scott R. Klemmer',
                        title: 'Parallel Prototyping Leads to Better Design Results, More Divergence, and Increased Self-Efficacy',
                        publicationText: 'TOCHI, 2010',
                        link: 'https://canvas.uw.edu/files/85832107/'
                    },
                    {
                        authorText: 'Stefanie Mueller, Sangha Im, Serafima Gurevich, Alexander Teibrich, Lisa Pfisterer, François Guimbretière, Patrick Baudisch',
                        title: 'WirePrint: 3D Printed Previews for Fast Prototyping',
                        publicationText: 'UIST 2014',
                        link: 'https://canvas.uw.edu/files/85832105/'
                    }
                ]
            },
        },
        {
            date: DateTime.fromISO('2022-01-27'),
            virtual: true,

            dateTitle: 'Research Topic: Accessibility',
            guest: {
                name: 'Meredith Ringel Morris',
                link: 'https://cs.stanford.edu/~merrie/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Jennifer Mankoff, Gillian R. Hayes, Devva Kasnitz',
                    title: 'Disability Studies as a Source of Critical Inquiry for the Field of Assistive Technology',
                    publicationText: 'ASSETS 2010',
                    link: 'https://canvas.uw.edu/files/86272943/'
                },
                instances: [
                    {
                        authorText: 'Shaun Kane, Meredith Ringel Morris, Ann Paradiso, Jon Campbell',
                        title: '"At times avuncular and cantankerous, with the reflexes of a mongoose": Understanding Self-Expression through Augmentative and Alternative Communication Devices',
                        publicationText: 'CSCW 2017',
                        link: 'https://canvas.uw.edu/files/86272939/'
                    },
                    {
                        authorText: 'Kyle Rector, Keith Salmon, Daniel Thornton, Neel Joshi, Meredith Ringel Morris',
                        title: 'Eyes-Free Art: Exploring Proxemic Audio Interfaces For Blind and Low Vision Art Engagement',
                        publicationText: 'UbiComp 2017',
                        link: 'https://canvas.uw.edu/files/86272945/'
                    }
                ]
            }
        },

        //
        // Week 5
        //
        {
            date: DateTime.fromISO('2022-02-01'),

            dateTitle: 'Research Topic: Interface Toolkits',
            readingsStandard: {
                framing: {
                    authorText: 'Brad Myers, Scott E. Hudson, Randy Pausch',
                    title: 'Past, Present, and Future of User Interface Software Tools',
                    publicationText: 'TOCHI 2000',
                    link: 'https://canvas.uw.edu/files/85832110/'
                },
                instances: [
                    {
                        authorText: 'Michael Bostock, Vadim Ogievetsky, Jeffrey Heer',
                        title: 'D3: Data-Driven Documents',
                        publicationText: 'InfoVis 2011',
                        link: 'https://canvas.uw.edu/files/85832111/'
                    },
                    {
                        authorText: 'Morgan Dixon, James Fogarty',
                        title: 'Prefab: Implementing Advanced Behaviors Using Pixel-Based Reverse Engineering of Interface Structure',
                        publicationText: 'CHI 2010',
                        link: 'https://canvas.uw.edu/files/85832109/'
                    }
                ]
            }
        },
        {
            date: DateTime.fromISO('2022-02-03'),
            virtual: true,

            dateTitle: 'Research Topic: CSCW and Social Computing',
            guest: {
                name: 'Benjamin Mako Hill',
                link: 'https://mako.cc/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Mark S. Ackerman',
                    title: 'The Intellectual Challenge of CSCW: The Gap Between Social Requirements and Technical Feasibility',
                    publicationText: 'HCI 2000',
                    link: 'https://canvas.uw.edu/files/87251526/'
                },
                instances: [
                    {
                        authorText: 'Aaron Halfaker, R. Stuart Geiger, Jonathan T. Morgan, John Riedl',
                        title: 'The Rise and Decline of an Open Collaboration System: How Wikipedia’s Reaction to Popularity Is Causing Its Decline',
                        publicationText: 'American Behavioral Scientist 2012',
                        link: 'https://canvas.uw.edu/files/87251640/'
                    },
                    {
                        authorText: 'Sneha Narayan, Jake Orlowitz, Jonathan T Morgan, Benjamin Mako Hill, Aaron Shaw',
                        title: 'The Wikipedia Adventure: Field Evaluation of an Interactive Tutorial for New Users',
                        publicationText: 'CSCW 2017',
                        link: 'https://canvas.uw.edu/files/87251725/'
                    }
                ]
            },
            additionalResources: [
                {
                    authorText: 'P. J. Resnick, Neophytos Iacovou, Mitesh Suchak, Pete Bergstrom, John Riedl',
                    title: 'GroupLens: An Open Architecture for Collaborative Filtering of Netnews',
                    publicationText: 'CSCW 1994',
                    link: 'https://canvas.uw.edu/files/87251782/'
                },
                
            ],
        },

        //
        // Week 6
        //
        {
            date: DateTime.fromISO('2022-02-08'),
            virtual: true,

            dateTitle: 'Project Milestone 1 Presentations',
            contentNonstandard: <ContentProjectMilestone />,
        },
        {
            date: DateTime.fromISO('2022-02-10'),
            virtual: true,

            dateTitle: 'Project Milestone 1 Presentations',
        },
        //
        // Week 7
        //
        {
            date: DateTime.fromISO('2022-02-15'),
            dateTitle: 'Research Topic: Interaction with AI',
            guest: {
                name: 'Adam Fourney',
                link: 'https://www.adamfourney.com/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Eric Horvitz',
                    title: 'Principles of Mixed-Initiative User Interfaces',
                    publicationText: 'CHI 1999',
                    link: 'https://canvas.uw.edu/files/86272398/'
                },
                instances: [
                    {
                        authorText: 'Saleema Amershi, Dan Weld, Mihaela Vorvoreanu, Adam Fourney, Besmira Nushi, Penny Collisson, Jina Suh, Shamsi Iqbal, Paul N. Bennett, Kori Inkpen, Jaime Teevan, Ruth Kikin-Gil, Eric Horvitz',
                        title: 'Guidelines for Human-AI Interaction',
                        publicationText: 'CHI 2019',
                        link: 'https://canvas.uw.edu/files/86272544/'
                    },
                    {
                        authorText: 'Qian Yang, Aaron Steinfeld, Carolyn Penstein Rosé, John Zimmerman',
                        title: 'Re-examining Whether, Why, and How Human-AI Interaction Is Uniquely Difficult to Design',
                        publicationText: 'CHI 2020',
                        link: 'https://canvas.uw.edu/files/87000322/'
                    } 
                ],   
            }
        },
        {
            date: DateTime.fromISO('2022-02-17'),

            dateTitle: 'Experimental Design and Analysis',
            guest: {
                name: 'Eunice Jun',
                link: 'https://homes.cs.washington.edu/~emjun/',
            },
            contentNonstandard: <ContentExperimentalDesignAndAnalysis />,
        },

        //
        // Week 8
        //
        {
            date: DateTime.fromISO('2022-02-22'),
            awayJames: true,

            dateTitle: 'Research Topic: Designing with Children',
            guest: {
                name: 'Jason Yip',
                link: 'http://bigyipper.com/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Allison Druin',
                    title: 'The Role of Children in the Design of New Technology',
                    publicationText: 'Behaviour and Information Technology, 2002',
                    link: 'https://canvas.uw.edu/files/86306673/'
                },
                instances: [
                    {
                        authorText: 'Kung Jin Lee, Wendy Roldan, Tian Qi Zhu, Harkiran Kaur Saluja, Sungmin Na, Britnie Chin, Yilin Zeng, Jin Ha Lee, Jason Yip',
                        title: 'The Show Must Go On: A Conceptual Model of Conducting Synchronous Participatory Design With Children Online',
                        publicationText: 'CHI 2021',
                        link: 'https://canvas.uw.edu/files/86306650/'
                    },
                    {
                        authorText: 'Julia Woodward, Feben Alemu, Natalia E. López Adames, Lisa Anthony, Jason C. Yip, Jaime Ruiz',
                        title: '“It Would Be Cool to Get Stampeded by Dinosaurs”: Analyzing Children’s Conceptual Model of AR Headsets Through Co-Design',
                        publicationText: 'CHI 2022',
                        link: 'https://canvas.uw.edu/files/86306656/'
                    }
                ]
            }
        },
        {
            date: DateTime.fromISO('2022-02-24'),
            awayJames: true,

            dateTitle: 'Research Topic: Programming as Interaction',
            guest: {
                name: 'Eunice Jun',
                link: 'https://homes.cs.washington.edu/~emjun/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Sarah Chasins, Elena Glassman, Joshua Sunshine',
                    title: 'PL and HCI: Better Together',
                    publicationText: 'CACM 2021',
                    link: 'https://canvas.uw.edu/files/87636522/'
                },
                instances: [
                    {
                        authorText: 'Eunice Jun, Melissa Birchfield, Nicole De Moura, Jeffrey Heer, René Just',
                        title: 'Hypothesis Formalization: Empirical Findings, Software Limitations, and Design Implications',
                        publicationText: 'TOCHI 2022',
                        link: 'https://canvas.uw.edu/files/87636175/'
                    },
                    {
                        authorText: 'Eunice Jun, Maureen Daum, Jared Roesch, Sarah Chasins, Emery Berger, René Just, Katharina Reinecke',
                        title: ' Tea: A High-level Language and Runtime System for Automating Statistical Analysis',
                        publicationText: 'UIST 2019',
                        link: 'https://canvas.uw.edu/files/87636173/'
                    }
                ]
            }
        },

        //
        // Week 9
        //
        {
            date: DateTime.fromISO('2022-03-01'),
            virtual: true,

            dateTitle: 'Project Milestone 2 Presentations',
            contentNonstandard: <ContentProjectMilestone />,
        },
        {
            date: DateTime.fromISO('2022-03-03'),
            virtual: true,

            dateTitle: 'Project Milestone 2 Presentations',
        },

        //
        // Statistics Lab
        //
        {
            date: DateTime.fromISO('2022-03-06'),

            dateTitle: 'Statistics Lab Due',
            contentNonstandard: <ContentDueStatisticsLab />
        },

        //
        // Week 10
        //
        {
            date: DateTime.fromISO('2022-03-08'),
            virtual: true,

            dateTitle: 'Research Topic: Building Scalable and Sustainable Research Software in Academia',
            guest: {
                name: 'Philip Guo',
                link: 'https://pg.ucsd.edu/',
            },
            // Framing paper: https://dl.acm.org/doi/10.1145/3472749.3474819
            readingsStandard: {
                framing: {
                    authorText: 'Philip Guo',
                    title: 'Ten Million Users and Ten Years Later: Python Tutor’s Design Guidelines for Building Scalable and Sustainable Research Software in Academia',
                    publicationText: 'UIST 2021',
                    link: 'https://canvas.uw.edu/files/86470756/'
                },
                instances: [
                    {
                        authorText: 'Philip Guo',
                        title: 'Older Adults Learning Computer Programming: Motivations, Frustrations, and Design Opportunities',
                        publicationText: 'CHI 2017',
                        link: 'https://canvas.uw.edu/files/86470755/'
                    },
                    {
                        authorText: 'Philip Guo',
                        title: 'Codeopticon: Real-Time, One-To-Many Human Tutoring for Computer Programming',
                        publicationText: 'CHI 2015',
                        link: 'https://canvas.uw.edu/files/86470754/'
                    },
                ],
            },
        },
        {
            date: DateTime.fromISO('2022-03-10'),

            dateTitle: 'Research Topic: Research through Design',
            guest: {
                name: 'Audrey Desjardins',
                link: 'http://www.audreydesjardins.com/',
            },
            
            readingsStandard: {
                framing: {
                    authorText: 'William Gaver',
                    title: 'What Should We Expect from Research Through Design?',
                    publicationText: 'CHI 2012',
                    link: 'https://canvas.uw.edu/files/86270922/'
                },
                instances: [
                    {
                        authorText: 'William Odom, Ron Wakkary, Youn-kyung Lim, Audrey Desjardins, Bart Hengeveld, Richard Banks',
                        title: 'From Research Prototype to Research Product',
                        publicationText: 'CHI 2016',
                        link: 'https://canvas.uw.edu/files/86270966/'
                    },
                    {
                        authorText: 'Heidi R. Biggs, Audrey Desjardins',
                        title: 'High Water Pants: Designing Embodied Environmental Speculation',
                        publicationText: 'CHI 2020',
                        link: 'https://canvas.uw.edu/files/86270892/'
                    },
                ],
                
            },
            additionalResources: [
                {
                    authorText: 'Heidi R. Biggs, Audrey Desjardins',
                    title: 'Crafting an Embodied Speculation: An Account of Prototyping Methods',
                    publicationText: 'DIS 2020',
                    link: 'https://canvas.uw.edu/files/86270913/'
                },
                {
                    authorText: 'Heidi Biggs, Cayla Key, Audrey Desjardins, Afroditi Psarra',
                    title: 'Moving Design Research: GIFs as Research Tools',
                    publicationText: 'DIS 2021',
                    link: 'https://canvas.uw.edu/files/86270921/'
                },
            ],
        },

        //
        // Finals Week
        //
        {
            date: DateTime.fromISO('2022-03-11'),

            dateTitle: 'Exam Available',
            contentNonstandard: <ContentAvailableExam />
        },
        {
            date: DateTime.fromISO('2022-03-14'),

            dateTitle: 'Exam Due',
            contentNonstandard: <ContentDueExam />
        },
        {
            date: DateTime.fromISO('2022-03-17'),

            dateTitle: 'Project Final Report Due',
            contentNonstandard: <ContentDueProjectFinalReport />
        },
    ];
}

/*
dateTitle: 'Research Topic: Social Computing and CSCW',
guest: {
    name: 'Amy Zhang',
    link: 'https://homes.cs.washington.edu/~axz/',
},
readingsStandard: {
    framing: {
        authorText: 'Mark S. Ackerman',
        title: 'The Intellectual Challenge of CSCW: The Gap Between Social Requirements and Technical Feasibility',
        publicationText: 'Human-Computer Interaction, 2009',
        link: 'https://canvas.uw.edu/files/63385683/'
    },
    instances: [
        {
            authorText: 'Kaitlin Mahar, Amy X. Zhang, David Karger',
            title: 'Squadbox: A Tool to Combat Online Harassment Using Friendsourced Moderation',
            publicationText: 'CHI 2018',
            link: 'https://canvas.uw.edu/files/63385812/'
        },
        {
            authorText: 'Maurice Jakesch, Megan French, Xiao Ma, Jeffrey T. Hancock, Mor Naaman',
            title: 'AI-Mediated Communication: How the Perception that Profile Text was Written by AI Affects Trustworthiness',
            publicationText: 'CHI 2019',
            link: 'https://canvas.uw.edu/files/63385702/'
        },
    ]
}
*/
