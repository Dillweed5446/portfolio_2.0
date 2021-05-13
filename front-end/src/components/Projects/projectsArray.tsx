import React from 'react'
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiStyledComponents, SiMariadb, SiNextDotJs, SiMaterialUi, SiJavascript } from 'react-icons/si'

export const ProjectsArray: Array<any> = [
  {
    title: 'this.portfolio',
    image: '',
    icons: [{ icon: <FaReact key="1"/>, tech: 'React' },
      { icon: <SiTypescript key="2"/>, tech: 'TypeScript' },
      { icon: <FaNodeJs key="3"/>, tech: 'Node.js' },
      { icon: <SiMariadb key="4"/>, tech: 'MariaDB' },
      { icon: <FaCss3Alt key="5"/>, tech: 'CSS3' },
      { icon: <SiStyledComponents key="6" />, tech: 'Styled-Components' }
    ],
    demoHref: '/#top',
    codeHref: 'https://github.com/Dillweed5446/portfolio_2.0'
  },
  {
    title: 'Hui Wa\'a Weather',
    image: '',
    icons: [{ icon: <FaReact key="1"/>, tech: 'React' },
      { icon: <SiJavascript key="2"/>, tech: 'JavaScript' },
      { icon: <SiNextDotJs key="3"/>, tech: 'Next.js' },
      { icon: <SiMaterialUi key="4"/>, tech: 'Material-UI' },
      { icon: <FaCss3Alt key="5"/>, tech: 'CSS3' }
    // { icon: < key="5" />, tech: 'Chart.js' },  Need to make icon for these.
    // { icon: < key="5" />, tech: 'Axios' }
    ],
    demoHref: 'https://pdill.dev/paddleWrapper',
    codeHref: 'https://github.com/Dillweed5446/pdill.dev/tree/master/pdill.dev/components/Paddler_App'
  },
  {
    title: 'Library CRUD',
    image: '',
    icons: [{ icon: <FaReact key="1"/>, tech: 'React' },
      { icon: <SiJavascript key="2"/>, tech: 'JavaScript' },
      { icon: <FaNodeJs key="3"/>, tech: 'Node.js' },
      { icon: <SiMariadb key="4"/>, tech: 'MariaDB' },
      { icon: <FaCss3Alt key="5"/>, tech: 'CSS3' }
    //   { icon: < key="5" />, tech: 'Axios' }  Add axios icon
    ],
    demoHref: 'Deploy me!',
    codeHref: 'https://github.com/Dillweed5446/library_crud'
  },
  {
    title: 'MotherCupboard',
    image: '',
    icons: [{ icon: <FaReact key="1"/>, tech: 'React-Native' },
      { icon: <SiJavascript key="2"/>, tech: 'JavaScript' },
      { icon: <FaCss3Alt key="3"/>, tech: 'CSS3' },
      { icon: <SiMaterialUi key="4"/>, tech: 'Material-UI' }
    ],
    demoHref: 'https://mothercupboard.com',
    codeHref: 'https://github.com/aptlyundecided/mc-frontend'
  },
  {
    title: 'Portfolio 1.0.0',
    image: '',
    icons: [{ icon: <FaReact key="1"/>, tech: 'React' },
      { icon: <SiJavascript key="2"/>, tech: 'JavaScript' },
      { icon: <SiNextDotJs key="3"/>, tech: 'Next.js' },
      { icon: <SiMaterialUi key="4"/>, tech: 'Material-UI' },
      { icon: <FaCss3Alt key="5"/>, tech: 'CSS3' }],
    demoHref: 'https://pdill.dev',
    codeHref: 'https://github.com/Dillweed5446/pdill.dev'
  }
]
